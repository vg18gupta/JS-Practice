const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    let clone = {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const value = obj[key]
            if(value instanceof Date) {
                clone[key] = new Date(value);
            } else if(value instanceof RegExp) {
                clone[key] = new RegExp(value.source, value.flags);
            } else if (typeof value === 'object') {
                clone[key] = deepClone(value);
            } else {
                // Direct copy for primitive values
                clone[key] = value;
            }
        }
    }
    return clone;
}

const original = {
 name: 'Alice',
 age: 30,
 address: {
 city: 'Wonderland',
 country: 'Fantasy'
 },
 hobbies: ['reading', 'biking'],
 birthDate: new Date(1994, 5, 24),
 regexTest: /abc/i
};
// Follow up: Adding a circular reference
original.circularRef = original;
const cloned = deepClone(original);
// Test the deep clone behavior
console.log(cloned);
// Check if circular reference is handled correctly
console.log(cloned.circularRef === cloned); // true
console.log(cloned.circularRef !== original.circularRef); // true
console.log(cloned.address !== original.address); // true
console.log(cloned.hobbies !== original.hobbies); // true
console.log(cloned.birthDate !== original.birthDate); // true
console.log(cloned.regexTest !== original.regexTest); // true
console.log(cloned.address.city === original.address.city); // true 