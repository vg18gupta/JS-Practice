class BrowserHistory {
  constructor() {
    this.history = [];
    this.index = 0;
  }

  visit(url) {
    this.history[this.index] = url;
    this.index = this.index + 1;
  }

  current() {
    return this.history[this.index - 1];
  }

  forward() {
    this.index = Math.min(this.history.length, ++this.index);
  }

  backward() {
    this.index = Math.max(0, --this.index);
  }
}

const bh = new BrowserHistory();

bh.visit("A");
console.log(bh.current());

bh.visit("B");
console.log(bh.current());

bh.visit("C");
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.visit("D");
console.log(bh.current());

bh.backward();
console.log(bh.current());

bh.forward();
console.log(bh.current());
