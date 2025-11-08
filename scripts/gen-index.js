#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Get directory name using ES modules approach
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MARKDOWN_DIR = path.join(__dirname, '../content');
const OUTPUT_FILE = path.join(__dirname, '../public/index.json');

// No longer require both fields; we will extract them if missing
const REQUIRED_FIELDS = [];

/**
 * Generate a slug from a title
 * @param {string} title - The title to slugify
 * @returns {string} - Slugified title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Process a Markdown file and extract its metadata
 * @param {string} filePath - Path to the Markdown file
 * @returns {Object} - Metadata object
 */
// Helper to ensure unique slugs
function getUniqueSlug(baseSlug, usedSlugs) {
  let slug = baseSlug;
  let counter = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
}

/**
 * Normalize list indentation so nested items keep their hierarchy.
 * Markmap (and CommonMark) expect at least two spaces per depth level.
 * This ensures any odd indentation (1, 3, etc.) is rounded up so sublists stay nested.
 * @param {string} markdown
 * @returns {string}
 */
function normalizeListIndentation(markdown) {
  return markdown
    .split('\n')
    .map(line => {
      const match = line.match(/^(\s+)([-*+]|\d+\.)\s+/);
      if (!match) return line;

      // Convert tabs to two spaces to keep depth calculations predictable
      const indentAsSpaces = match[1].replace(/\t/g, '  ');
      const needsNormalization = indentAsSpaces.length % 2 !== 0;
      const normalizedIndentLength = needsNormalization
        ? indentAsSpaces.length + 1
        : indentAsSpaces.length;

      const normalizedIndent = ' '.repeat(Math.max(2, normalizedIndentLength));
      const trimmedLine = line.trimStart();

      return `${normalizedIndent}${trimmedLine}`;
    })
    .join('\n');
}

async function processMarkdownFile(filePath, usedSlugs) {
  const relativePath = path.relative(MARKDOWN_DIR, filePath);
  const fileNameWithoutExt = path.basename(filePath, '.md');
  
  try {
    console.log(`\nProcessing: ${relativePath}`);
    
    const content = await fs.readFile(filePath, 'utf-8');
    console.log('  - Read file content successfully');
    
    const { data, content: markdownContent } = matter(content);
    console.log('  - Parsed frontmatter successfully');
    console.log(`    Frontmatter keys: ${Object.keys(data).join(', ')}`);

    const normalizedContent = normalizeListIndentation(markdownContent);
    
    // Determine creation and last-modified times using Git history when available.
    // This works well for deployments (e.g., GitHub Pages) where filesystem
    // timestamps reflect build time rather than the true content history.
    let fileTime;
    let gitLastModified = null;
    try {
      const { spawnSync } = await import('child_process');

      // Resolve git repository root so we can use a path relative to it.
      const gitRootRes = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf-8' });
      const gitRoot = gitRootRes.status === 0 ? gitRootRes.stdout.trim() : null;

      if (gitRoot) {
        const relPath = path.relative(gitRoot, filePath);

        // Get the first commit (earliest) date for this file. Use --follow to handle renames.
        const creationRes = spawnSync('git', ['log', '--follow', '--format=%aI', '--reverse', '--', relPath], { encoding: 'utf-8' });
        const creationOutput = creationRes.status === 0 ? creationRes.stdout.trim() : '';
        const creationLine = creationOutput.split('\n').find(Boolean) || '';

        // Get last commit date for this file
        const lastRes = spawnSync('git', ['log', '-1', '--format=%aI', '--', relPath], { encoding: 'utf-8' });
        const lastOutput = lastRes.status === 0 ? lastRes.stdout.trim() : '';

        if (creationLine) {
          fileTime = new Date(creationLine);
          console.log(`  - File creation time from Git (first commit): ${fileTime.toISOString()}`);
        }

        if (lastOutput) {
          gitLastModified = new Date(lastOutput).toISOString();
          console.log(`  - File last-modified time from Git (last commit): ${gitLastModified}`);
        }
      }

      // If git info wasn't available, fall back to filesystem timestamps
      if (!fileTime) {
        const stats = await fs.stat(filePath);
        // Use the earlier of birthtime and mtime as a reasonable "created" time
        const fileCreatedTime = stats.birthtime;
        const fileModifiedTime = stats.mtime;
        fileTime = new Date(Math.min(fileCreatedTime.getTime(), fileModifiedTime.getTime()));
        console.log(`  - File creation time from filesystem: ${fileTime.toISOString()}`);
      }
    } catch (error) {
      // If anything goes wrong with Git, fallback to filesystem stats
      try {
        const stats = await fs.stat(filePath);
        const fileCreatedTime = stats.birthtime;
        const fileModifiedTime = stats.mtime;
        fileTime = new Date(Math.min(fileCreatedTime.getTime(), fileModifiedTime.getTime()));
        console.log(`  - File creation time from filesystem (git failed): ${fileTime.toISOString()}`);
      } catch (fsErr) {
        // As a last resort, use now
        fileTime = new Date();
        console.log(`  - File creation time fallback to now: ${fileTime.toISOString()}`);
      }
    }

    // Extract title
    let title = data.title;
    let titleSource = 'frontmatter';
    if (!title) {
      // Try to extract from first H1
      const h1Match = normalizedContent.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1].trim();
        titleSource = 'H1 heading';
      } else {
        title = fileNameWithoutExt;
        titleSource = 'filename';
      }
    }
    console.log(`  - Title: "${title}" (source: ${titleSource})`);

    // Extract description
    let description = data.description;
    let descriptionSource = 'frontmatter';
    if (!description) {
      // Try to extract the first 3 bullet points
      const bulletLines = normalizedContent.split('\n').filter(line => /^\s*([-*+])\s+/.test(line));
      if (bulletLines.length > 0) {
        description = bulletLines.slice(0, 3).map(l => l.replace(/^\s*([-*+])\s+/, '')).join(' ');
        descriptionSource = 'bullet points';
      } else {
        // Fallback: first non-heading paragraph
        const descMatch = normalizedContent.replace(/\r/g, '').split(/\n\s*\n/).find(
          para => !para.startsWith('#') && para.trim().length > 0
        );
        if (descMatch) {
          description = descMatch.replace(/\n/g, ' ').trim();
          descriptionSource = 'first paragraph';
        } else {
          description = '';
          descriptionSource = 'none (empty)';
        }
      }
    }
    console.log(`  - Description: ${description ? 'Found' : 'Missing'} (source: ${descriptionSource})`);

    // Generate and check slug
    let baseSlug = data.slug || generateSlug(title);
    let slug = getUniqueSlug(baseSlug, usedSlugs);
    console.log(`  - Generated slug: ${slug}`);
    if (slug !== baseSlug) {
      console.log(`  - Warning: Duplicate slug detected, using ${slug} instead of ${baseSlug}`);
    }
    usedSlugs.add(slug);
    
    // Create metadata object
    const metadata = {
      id: slug,
      title,
      description: description || '',
      tags: data.tags || [],
  created: data.created || fileTime.toISOString(),
  updated: data.updated || gitLastModified || new Date().toISOString(),
      path: relativePath,
      url: `/view/${slug}`,
      content: normalizedContent
    };

    console.log(`  - Final metadata:`);
    console.log(`    Title: ${metadata.title}`);
    console.log(`    Description: ${metadata.description ? 'Present' : 'Empty'}`);
    console.log(`    Tags: ${metadata.tags.length}`);
    console.log(`    Created: ${metadata.created}`);
    console.log(`    Updated: ${metadata.updated}`);
    console.log(`    URL: ${metadata.url}`);
    
    return metadata;
  } catch (error) {
    console.error(`\nError processing ${relativePath}:`);
    console.error(`  ${error.message}`);
    throw error;
  }
}

/**
 * Find all Markdown files recursively in a directory
 * @param {string} dir - Directory to search
 * @returns {Promise<string[]>} - Array of file paths
 */
async function findMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? findMarkdownFiles(fullPath) : fullPath;
  }));

  const allFiles = files.flat();
  const mdFiles = allFiles.filter(file => file.endsWith('.md'));
  
  console.log(`Found ${allFiles.length} total files in ${dir}`);
  console.log(`Found ${mdFiles.length} markdown files in ${dir}`);
  
  return mdFiles;
}

async function processAllMarkdownFiles(files) {
  const results = [];
  const usedSlugs = new Set();
  const failedFiles = [];
  
  for (const file of files) {
    const ext = path.extname(file);
    if (ext !== '.md') continue;
    const filePath = path.isAbsolute(file) ? file : path.join(MARKDOWN_DIR, file);
    try {
      const metadata = await processMarkdownFile(filePath, usedSlugs);
      if (metadata) {
        results.push(metadata);
      } else {
        failedFiles.push({ file: filePath, reason: 'Metadata generation failed' });
      }
    } catch (error) {
      failedFiles.push({ file: filePath, reason: error.message });
    }
  }
  
  if (failedFiles.length > 0) {
    console.log('\nFailed to process the following files:');
    failedFiles.forEach(({ file, reason }) => {
      console.log(`- ${path.relative(MARKDOWN_DIR, file)}: ${reason}`);
    });
  }
  
  console.log(`\nSuccessfully processed: ${results.length} files`);
  console.log(`Failed to process: ${failedFiles.length} files\n`);
  
  return results;
}

/**
 * Main function to generate the index
 */
async function generateIndex() {
  try {
    // Ensure directories exist
    await fs.mkdir(MARKDOWN_DIR, { recursive: true });

    console.log('Finding Markdown files...');
    const files = await findMarkdownFiles(MARKDOWN_DIR);

    console.log(`Processing ${files.length} Markdown files...`);
    const metadata = await processAllMarkdownFiles(files);

    console.log(`Writing index with ${metadata.length} entries...`);
    await fs.writeFile(
      OUTPUT_FILE,
      JSON.stringify(metadata, null, 2),
      'utf-8'
    );

    console.log(`Index generated at ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating index:', error);
    process.exit(1);
  }
}

// Run the generator
generateIndex();
