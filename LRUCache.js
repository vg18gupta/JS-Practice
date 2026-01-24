class LRUCache {
    constructor(maxsize = 1000) {
        this.maxsize = maxsize;
        this.map = new Map();
    }

    get(key) {
        if(!this.map.has(key)) return null;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    set(key, value) {
        if(this.map.has(key)) this.map.delete(key);
        else if(this.map.size >= this.maxsize) {
            const oldestKey = this.map.keys().next().value;
            this.map.delete(oldestKey);
        }
        this.map.set(key, value);
    }

    delete(key) {
        this.map.delete(key);
    }

    clear() {
        this.map.clear();
    }
}