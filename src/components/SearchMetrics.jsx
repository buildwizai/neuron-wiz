import React from 'react';
import { useStore } from '../utils/store';

/**
 * SearchMetrics component displays performance metrics related to search operations
 * It shows metrics like search time, number of results, and shard information
 */
const SearchMetrics = () => {
  const {
    searchMetrics,
    searchResults,
    isSearchPerformanceVisible
  } = useStore();

  if (!isSearchPerformanceVisible || !searchMetrics) {
    return null;
  }

  const {
    searchTime,
    indexSize,
    shardCount,
    shardSizes,
    shardSearchTimes
  } = searchMetrics;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm mt-2 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Search Performance Metrics</h3>
        <span className="text-green-600 dark:text-green-400 font-medium">
          {searchTime.toFixed(2)}ms
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
        <div>Results: <span className="font-medium">{searchResults?.length || 0}</span></div>
        <div>Index Size: <span className="font-medium">{(indexSize / 1024).toFixed(2)} KB</span></div>

        {shardCount > 1 && (
          <>
            <div>Shards: <span className="font-medium">{shardCount}</span></div>
            <div className="col-span-2">
              <details className="cursor-pointer">
                <summary className="text-blue-600 dark:text-blue-400">Shard Details</summary>
                <div className="ml-2 mt-1">
                  {shardSizes.map((size, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>Shard {idx + 1}: {size} docs</span>
                      <span>{shardSearchTimes[idx]?.toFixed(2) || '?'}ms</span>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchMetrics;