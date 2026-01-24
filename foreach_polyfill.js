Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
marks.myForEach((item, index) => {
  if (index > 3) {
    console.log(item);
  }
});