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
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) return false;

    return true;
  }

  return result;
};