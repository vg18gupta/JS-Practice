const helper = (arr) => {
    let index = 0;
    
    return {
        next: function() {
            return index < arr.length ? arr[index++] : null
        },
        done: function() {
            return index >= arr.length;
        }
    }
}




const iterator = helper([1, 2, "hello"]);

console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"
