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
    
    // Get file stats for creation time
    const stats = await fs.stat(filePath);
    const fileCreatedTime = stats.birthtime;
    console.log(`  - File creation time: ${fileCreatedTime}`);

    // Extract title
    let title = data.title;
    let titleSource = 'frontmatter';
    if (!title) {
      // Try to extract from first H1
      const h1Match = markdownContent.match(/^#\s+(.+)$/m);
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
      const bulletLines = markdownContent.split('\n').filter(line => /^\s*([-*+])\s+/.test(line));
      if (bulletLines.length > 0) {
        description = bulletLines.slice(0, 3).map(l => l.replace(/^\s*([-*+])\s+/, '')).join(' ');
        descriptionSource = 'bullet points';
      } else {
        // Fallback: first non-heading paragraph
        const descMatch = markdownContent.replace(/\r/g, '').split(/\n\s*\n/).find(
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
      created: data.created || fileCreatedTime.toISOString(),
      updated: data.updated || new Date().toISOString(),
      path: relativePath,
      url: `/view/${slug}`,
      content: markdownContent
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