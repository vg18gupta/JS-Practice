const sum = (a, b, c, d, e) => {
    return a + b + c +d + e;
}

const curry = (fun) => {
    return function curried(...args) {
        if(args.length >= fun.length) {
            return fun(...args);
        }

        return function(...args2) {
            return curried(...args, ...args2);
        }
    }
}



let curriedSum = curry(sum);

console.log(curriedSum(1,2,3,4,5));
console.log(curriedSum(1)(2,3)(4,5));
console.log(curriedSum(1) (2) (3) (4)(5));