const memoize = (fn, ttl = 5000) => {
  let cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();

    if(cache.has(key)) {
      const { value, timestamp } = cache.get(key);

      if(now - timestamp < ttl) {
        return value;
      } else {
        cache.delete(key);
      }
    }

    const value = fn.call(this, ...args);
    cache.set(key, { value, timestamp: now });
    return value;
  }
}