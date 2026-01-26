Array.prototype.myMap = function(cb) {
    const result = [];

    for(let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }

    return result;
}

Array.prototype.myFilter = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) result.push(this[i]);
  }

  return result;
};

Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) return false;

    return true;
  };
};

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};