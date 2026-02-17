const user = {
  name: "Vishal",
  age: null,
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: null,
      },
    },
    secondary: null,
  },
  phones: [
    { type: "home", number: "1234567890" },
    { type: "work", number: null },
  ],
  preferences: null,
};

const flattenObject = (obj, prefix = '', result = {}) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}_${key}` : key;
            if (Array.isArray(obj[key])) { // fix: check array first
              (obj[key] || []).forEach((item, index) => {
                flattenObject(item, `${newKey}.${index}`, result);
              });
            } else if (obj[key] && typeof obj[key] === 'object') { // fix else if syntax
              flattenObject(obj[key], newKey, result);
            } else {
              result[newKey] = obj[key]; // fix: use newKey instead of key
            }
        }
    }
    return result
};

console.log(flattenObject(user));