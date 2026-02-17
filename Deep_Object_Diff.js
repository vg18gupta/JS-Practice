const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { a: 1, b: { c: 4, e: 5 } };

const compareObj = (obj1, obj2, result = {}) => {
  const allKeys = new Set([
    ...Object.keys(obj1 || {}),
    ...Object.keys(obj2 || {})
  ])

  for(let key of allKeys) {
     const val1 = obj1?.[key];
    const val2 = obj2?.[key];

    if(key in obj1 && !(key in obj2)) {
      result[key] = { delete: obj1[key] };
    } else if(key in obj2 && !(key in obj2)) {
      result[key] = { delete: obj2[key] };
    } else {
      // Both are objects (and not null/array) - recurse
      if (isObject(val1) && isObject(val2)) {
        const nestedDiff = compareObj(val1, val2);
        if (Object.keys(nestedDiff).length > 0) {
          result[key] = nestedDiff;
        }
      }
      else if (val1 !== val2) {
        result[key] = { old: val1, new: val2 };
      }
    }
  }
  return result;
}

function isObject(value) {
  return value !== null 
    && typeof value === 'object' 
    && !Array.isArray(value);
}

console.log(compareObj(obj1, obj2));
