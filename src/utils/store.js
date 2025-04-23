import { create } from 'zustand'
import { createShardedSearchIndex, extractAllTags } from './shardedSearch'

/**
 * Global state management with Zustand
 * Handles app-wide state including mind maps, search, and UI preferences
 */
export const useStore = create((set, get) => ({
  // Data state
  mindMaps: [],
  filteredMindMaps: [],
  allTags: [],
  tagCounts: {}, // Added tag counts object
  currentMindMap: null,

  // Search state
  searchQuery: '',
  selectedTags: [],
  searchIndex: null,
  searchMetrics: null,

  // UI state
  isLoading: true,
  loadingProgress: 0,
  // Initialize darkMode from localStorage, fallback to system preference
  darkMode: (() => {
    const stored = localStorage.getItem('darkMode');
    let initial;
    if (stored !== null) {
      initial = stored === 'true';
      console.log('[store.js] darkMode loaded from localStorage:', initial);
    } else {
      initial = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('[store.js] darkMode loaded from system preference:', initial);
    }
    return initial;
  })(),
  isSearchPerformanceVisible: false,

  // Toggle search performance visibility
  toggleSearchPerformanceVisibility: () => set(state => ({
    isSearchPerformanceVisible: !state.isSearchPerformanceVisible
  })),

  // Initialize application data
  initializeApp: async () => {
    try {
      set({ isLoading: true, loadingProgress: 10 });

      // Fetch the index.json file
      const response = await fetch('/index.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch mind maps data: ${response.status}`);
      }

      set({ loadingProgress: 30 });

      // Fetch and normalize mind map data
      let data = await response.json();

      // Normalize all tags to lowercase and remove duplicates
      data = data.map(mindMap => {
        if (mindMap.tags && Array.isArray(mindMap.tags)) {
          // Convert tags to lowercase and remove duplicates
          const normalizedTagsSet = new Set();
          mindMap.tags.forEach(tag => {
            if (tag && typeof tag === 'string') {
              normalizedTagsSet.add(tag.toLowerCase());
            }
          });

          // Update the mindMap with normalized tags
          return {
            ...mindMap,
            tags: Array.from(normalizedTagsSet)
          };
        }
        return mindMap;
      });

      set({ mindMaps: data, filteredMindMaps: data });

      set({ loadingProgress: 50 });

      // Create and configure sharded search index
      const shardSize = 200; // Documents per shard
      const searchIndex = await createShardedSearchIndex(shardSize);
      await searchIndex.addDocuments(data);

      set({ loadingProgress: 80 });

      // Extract all tags for filtering - now handled by extractAllTags function
      const tags = extractAllTags(data);

      // Calculate tag counts
      const tagCounts = {};
      tags.forEach(tag => {
        tagCounts[tag] = data.filter(mindMap =>
          mindMap.tags && Array.isArray(mindMap.tags) &&
          mindMap.tags.includes(tag)
        ).length;
      });

      set({
        searchIndex,
        allTags: tags,
        tagCounts,
        isLoading: false,
        loadingProgress: 100
      });

    } catch (error) {
      console.error('Error initializing app:', error);
      // Add some sample data for development
      const sampleData = [
        {
          id: 'sample-mind-map',
          title: 'Sample Mind Map',
          description: 'This is a sample mind map for development purposes.',
          tags: ['sample', 'development'],
          url: '/view/sample-mind-map',
          content: '# Sample Mind Map\n## Topic 1\n### Subtopic 1.1\n### Subtopic 1.2\n## Topic 2\n### Subtopic 2.1'
        }
      ];

      // Normalize sample data tags
      sampleData.forEach(item => {
        if (item.tags && Array.isArray(item.tags)) {
          const normalizedTagsSet = new Set();
          item.tags.forEach(tag => {
            if (tag && typeof tag === 'string') {
              normalizedTagsSet.add(tag.toLowerCase());
            }
          });
          item.tags = Array.from(normalizedTagsSet);
        }
      });

      // Calculate tag counts for sample data
      const tagCounts = {};
      const allTags = extractAllTags(sampleData);
      allTags.forEach(tag => {
        tagCounts[tag] = sampleData.filter(mindMap =>
          mindMap.tags && Array.isArray(mindMap.tags) &&
          mindMap.tags.includes(tag)
        ).length;
      });

      set({
        mindMaps: sampleData,
        filteredMindMaps: sampleData,
        allTags,
        tagCounts,
        isLoading: false
      });

      // Create a search index with sample data
      try {
        const searchIndex = await createShardedSearchIndex();
        await searchIndex.addDocuments(sampleData);
        set({ searchIndex });
      } catch (err) {
        console.error('Failed to initialize search:', err);
      }
    }
  },

  // Set current mind map by ID
  setCurrentMindMapById: (id) => {
    const { mindMaps } = get();
    const mindMap = mindMaps.find(m => m.id === id);
    set({ currentMindMap: mindMap || null });
  },

  // Search and filter functions
  setSearchQuery: async (query) => {
    set({ searchQuery: query });
    const { searchIndex, selectedTags } = get();

    if (searchIndex) {
      const startTime = performance.now();
      const results = await searchIndex.search(query, selectedTags);
      const endTime = performance.now();

      // Collect search metrics
      const metrics = {
        searchTime: endTime - startTime,
        indexSize: await searchIndex.getIndexSize(),
        shardCount: searchIndex.getShardCount(),
        shardSizes: searchIndex.getShardSizes(),
        shardSearchTimes: searchIndex.getShardSearchTimes(),
      };

      set({
        filteredMindMaps: results,
        searchMetrics: metrics,
        // Show metrics automatically when there's a search
        isSearchPerformanceVisible: query.length > 0
      });
    }
  },

  // Toggle or set a tag selection
  toggleTag: async (tag, clearAll = false) => {
    if (clearAll) {
      set({ selectedTags: [] });
    } else {
      // Normalize tag to lowercase if it's a string
      const normalizedTag = tag && typeof tag === 'string' ? tag.toLowerCase() : tag;
      const { selectedTags } = get();

      const newTags = selectedTags.includes(normalizedTag)
        ? selectedTags.filter(t => t !== normalizedTag)
        : [...selectedTags, normalizedTag];

      set({ selectedTags: newTags });
    }

    // Re-run search with updated tags
    const { searchIndex, searchQuery, selectedTags: updatedTags } = get();
    if (searchIndex) {
      const results = await searchIndex.search(searchQuery, clearAll ? [] : updatedTags);
      set({ filteredMindMaps: results });
    }
  },

  // UI state controls
  toggleDarkMode: () => set(state => {
    const newDarkMode = !state.darkMode;
    localStorage.setItem('darkMode', newDarkMode);
    console.log('[store.js] toggleDarkMode called. New darkMode:', newDarkMode, 'localStorage:', localStorage.getItem('darkMode'));
    return { darkMode: newDarkMode };
  }),
}))