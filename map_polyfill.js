Array.prototype.myMap = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

const marks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = marks.myMap((item, index) => {
  if (index > 3) {
    return item;
  } else {
    return "NaN";
  }
});

console.log(result);
