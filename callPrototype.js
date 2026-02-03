Function.prototype.myCall = function (thisArg, ...argArray) {
  let context = thisArg ? Object(thisArg) : globalThis;
  let fnKey = Symbol('fn');
  context[fnKey] = this;

  let result = context[fnKey](...argArray);

  delete context[fnKey];

  return result;
};