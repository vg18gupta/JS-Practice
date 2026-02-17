class AsyncRateLimiter {
  constructor(maxLimit) {
    this.limit = maxLimit;
    this.queue = [];
    this.running = 0;
  }

  runAll(itemList) {
    return Promise.all(
      itemList.map(task => this.run(task))
    );
  }

  run(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.proceed();
    });
  }

  async proceed() {
    if (this.running >= this.limit) return;
    if (this.queue.length === 0) return;

    const { task, resolve, reject } = this.queue.shift();
    this.running++;

    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.proceed();
    }
  }
}

// Usage:
const limiter = new AsyncRateLimiter(2);
await limiter.runAll([
  () => fetch('/api/1'),
  () => fetch('/api/2'),
  () => fetch('/api/3'),
  () => fetch('/api/4')
]);