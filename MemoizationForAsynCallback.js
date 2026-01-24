// MEMOISED FUNCTION FOR ASYNC CALLBACKS BASED TASKS

// REQUIREMENT
// 1. ttl -> Expiry time for invalidating cache.
// 2. maxSize –> Cache eviction following LRU to maintain limited set of cache for efficient memory management.
// 3. abort –> Option to abort ongoing call to have better control.
// 4. key –> Option to generate custom key.
// 5. latestWins –> Abort the all previous calls and prioritizes the latest call for same key.


