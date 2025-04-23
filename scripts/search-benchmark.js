#!/usr/bin/env node

/**
 * Search benchmark utility for testing MiniSearch performance with different data sizes
 * This helps us understand the limits of client-side search and optimize accordingly
 */

import MiniSearch from 'minisearch';

// Configure MiniSearch options - same as in our app
const searchOptions = {
  fields: ['title', 'description', 'content', 'tags'],
  storeFields: ['id', 'title', 'description', 'tags', 'url'],
  searchOptions: {
    boost: { title: 2, tags: 1.5 },
    fuzzy: 0.2,
    prefix: true
  }
};

// Generate mock data for testing
function generateMockData(count) {
  const data = [];
  const tags = ['javascript', 'react', 'vue', 'angular', 'node', 'python', 'java', 'go', 'rust', 'css', 'html'];

  for (let i = 0; i < count; i++) {
    // Generate a realistic looking document
    const numTags = Math.floor(Math.random() * 4) + 1; // 1-4 tags
    const documentTags = [];

    // Select random tags
    for (let t = 0; t < numTags; t++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      if (!documentTags.includes(tag)) {
        documentTags.push(tag);
      }
    }

    // Create the document
    data.push({
      id: `doc-${i}`,
      title: `Document ${i}: ${documentTags.join(' & ')} example`,
      description: `This is a sample document about ${documentTags.join(', ')} with some additional description text to make the document more realistic.`,
      content: `# Document ${i}

## Section 1
This is a sample section with content about ${documentTags[0] || 'technology'}.

## Section 2
This section has more detail and examples of ${documentTags[1] || 'programming'} concepts.

## Section 3
### Subsection 3.1
Details about ${documentTags[2] || 'development'} approach.
### Subsection 3.2
More information about best practices.`,
      tags: documentTags,
      url: `/view/doc-${i}`,

    });
  }

  return data;
}

// Run search benchmark
async function runBenchmark() {
  const sizes = [10, 50, 100, 500, 1000, 5000];
  const results = [];

  for (const size of sizes) {
    const mockData = generateMockData(size);

    // Measure index creation time
    console.log(`Testing with ${size} documents...`);
    const indexStartTime = performance.now();
    const searchIndex = new MiniSearch(searchOptions);
    searchIndex.addAll(mockData);
    const indexTime = performance.now() - indexStartTime;

    // Measure search time (average of multiple searches)
    const searches = ['react', 'javascript api', 'component design pattern', 'performance optimization'];
    let totalSearchTime = 0;

    for (const query of searches) {
      const searchStartTime = performance.now();
      searchIndex.search(query);
      totalSearchTime += performance.now() - searchStartTime;
    }

    const avgSearchTime = totalSearchTime / searches.length;

    // Measure memory usage
    const indexSizeBytes = Buffer.byteLength(JSON.stringify(searchIndex.toJSON()), 'utf8');
    const indexSizeMB = indexSizeBytes / (1024 * 1024);

    results.push({
      documentCount: size,
      indexingTimeMs: indexTime.toFixed(2),
      searchTimeMs: avgSearchTime.toFixed(2),
      indexSizeMB: indexSizeMB.toFixed(2)
    });
  }

  // Display results
  console.table(results);

  // Provide recommendations
  console.log('\nRecommendations:');

  const lastResult = results[results.length - 1];
  if (parseFloat(lastResult.searchTimeMs) > 500) {
    console.log('⚠️ Search time exceeds 500ms with large document sets. Consider:');
    console.log('  - Implementing a sharded search index strategy');
    console.log('  - Server-side search for very large collections');
    console.log('  - Reducing the number of indexed fields');
  } else {
    console.log('✅ Search performance is acceptable at the tested document sizes.');
  }

  if (parseFloat(lastResult.indexSizeMB) > 5) {
    console.log('⚠️ Search index size is large. Consider:');
    console.log('  - Limiting the amount of content indexed per document');
    console.log('  - Using a pagination strategy for search results');
    console.log('  - Implementing lazy loading of search indexes');
  } else {
    console.log('✅ Search index size is reasonable at the tested document sizes.');
  }
}

// Run the benchmark
runBenchmark().catch(console.error);