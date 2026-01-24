Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = marks.myFilter((item, index) => {
  if (index > 3) {
    return item;
  }
});

console.log(result);
