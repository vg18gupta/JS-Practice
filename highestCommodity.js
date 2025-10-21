
class Store {
  constructor() {
    this.list = {};
  }
  add(key, val) {
    if (this.list[key]) {
      const value = Math.max(this.list[key], val);
      this.list[key] = value;
    } else {
      this.list[key] = val;
    }
  }
  highestPrice(key) {
    return this.list[key] ? this.list[key] : null;
  }
}



const s = new Store();
s.add(1, 1);
s.add(1, 4);
s.add(1, 2);
console.log(s.highestPrice(1));