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
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(content);
    const relativePath = path.relative(MARKDOWN_DIR, filePath);
    const fileNameWithoutExt = path.basename(filePath, '.md');

    // Extract title
    let title = data.title;
    if (!title) {
      // Try to extract from first H1
      const h1Match = markdownContent.match(/^#\s+(.+)$/m);
      if (h1Match) {
        title = h1Match[1].trim();
      } else {
        title = fileNameWithoutExt;
        console.warn(`Warning: Missing title in frontmatter and H1 in ${filePath}`);
      }
    }

    // Extract description
    let description = data.description;
    if (!description) {
      // Try to extract the first 3 bullet points
      const bulletLines = markdownContent.split('\n').filter(line => /^\s*([-*+])\s+/.test(line));
      if (bulletLines.length > 0) {
        description = bulletLines.slice(0, 3).map(l => l.replace(/^\s*([-*+])\s+/, '')).join(' ');
      } else {
        // Fallback: first non-heading paragraph
        const descMatch = markdownContent.replace(/\r/g, '').split(/\n\s*\n/).find(
          para => !para.startsWith('#') && para.trim().length > 0
        );
        if (descMatch) {
          description = descMatch.replace(/\n/g, ' ').trim();
        } else {
          description = '';
          console.warn(`Warning: Missing description in frontmatter, no bullets, and no suitable paragraph in ${filePath}`);
        }
      }
    }

    // Generate a slug if not provided
    let baseSlug = data.slug || generateSlug(title);
    let slug = getUniqueSlug(baseSlug, usedSlugs);
    if (slug !== baseSlug) {
      console.warn(`Warning: Duplicate slug '${baseSlug}' detected. Using '${slug}' for file ${filePath}`);
    }
    usedSlugs.add(slug);

    // Create metadata object
    return {
      id: slug,
      title,
      description,
      tags: data.tags || [],
      created: data.created || new Date().toISOString(),
      updated: data.updated || new Date().toISOString(),
      path: relativePath,
      url: `/view/${slug}`,
      content: content
      // content: markdownContent, // Only use the markmap content (without frontmatter)
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
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

  return files
    .flat()
    .filter(file => file.endsWith('.md'));
}

async function processAllMarkdownFiles(files) {
  const results = [];
  const usedSlugs = new Set();
  for (const file of files) {
    const ext = path.extname(file);
    if (ext !== '.md') continue;
    const filePath = path.isAbsolute(file) ? file : path.join(MARKDOWN_DIR, file);
    const metadata = await processMarkdownFile(filePath, usedSlugs);
    if (metadata) results.push(metadata);
  }
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