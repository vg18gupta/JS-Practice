class QueueCallbacks {
    constructor(concurrent) {
        this.concurrent = concurrent;
        this.queue = [];
        this.currentIndex = 0;
    }

    process(callback) {
        return new Promise((resolve, reject) => {
            this.queue.push({callback, resolve, reject});
            this.execute();
        })
    }

    async execute() {
        if (this.currentIndex >= this.concurrent) return;
        if(this.queue.length === 0) return;

        const task = this.queue.shift();
        this.currentIndex++;
        try {
            const res = await task.callback();
            task.resolve(res);
        } catch (e) {
            task.reject(e);
        } finally {
            this.currentIndex--;
            this.execute();
        }
    }

};

const engine = new QueueCallbacks(2);

const asyncTask = (id, delay) => async () => {
  console.log(`Start ${id}`);
  await new Promise(res => setTimeout(res, delay));
  console.log(`End ${id}`);
  return id;
};

engine.process(asyncTask(1, 1000));
engine.process(asyncTask(2, 500));
engine.process(asyncTask(3, 300));
engine.process(asyncTask(4, 800));
