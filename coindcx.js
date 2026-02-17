// console.log('Script start');

// const promise1 = new Promise((resolve) => {
//   console.log('Promise 1 started');
//   setTimeout(() => {
//     resolve('Promise 1 resolved');
//   }, 1000);
// });

// async function asyncCall() {
//   console.log('asyncCall: start');
//   await promise1;
//   console.log('asyncCall: end');
// }

// asyncCall();

// promise1.then((result) => {
//   console.log(result);
// });

// console.log('Script end');

// // Script start
// // Script end
// // asyncCall: start
// //asyncCall: end
// // Promise 1 resolved


// const user = {
//   name: "Alice",
//   greet() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet(); 


// var x = 10;
// function outer() {
//   var x = 20;
//   function inner() {
//     x++;
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   inner();
// }
// outer();







let str = "1001010001"
// result will be  "0110101110"


const transformBinary = (bn) => {
    let newStr = '';
    for(let i = 0; i < bn.length; i++ ) {
        const val = (bn[i] + 1) / 2;
        console.log(val);
        bn[i] = val;
    }
    
    return bn;
}
console.log(transformBinary(str));

