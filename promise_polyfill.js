const promiseList = [
  new Promise((resolve, reject) => resolve("Resolve promise 1")),
  new Promise((resolve, reject) => resolve("Resolve promise 2")),
  new Promise((resolve, reject) => resolve("Resolve promise 3")),
  new Promise((resolve, reject) => reject("Reject promise 4")),
  new Promise((resolve, reject) => resolve("Resolve promise 5")),
  new Promise((resolve, reject) => resolve("Resolve promise 6"))
];

// Promise.all
const myPromiseAll = (promiseList) => {
    if(!promiseList.length) return;
    let count = 0;
    let result = [];

    return new Promise((resolve, reject) => {
        for (let task of promiseList) {
            Promise.resolve(task)
                .then((val) => {
                    result.push(val);
                    count++;
                    if(count === promiseList.length) {
                        resolve(result);
                    }
                })
                .catch((e) => {
                    reject(e)
                })
        }
    })
};

myPromiseAll(promiseList).then(res => console.log(res)).catch(e => console.log(e));

// Promise.race
const myPromiseRace = (promiseList) => {
  if (!promiseList.length) return;

  return new Promise((resolve, reject) => {
    for (let task of promiseList) {
      Promise.resolve(task)
        .then((val) => {
            resolve(val);
        })
        .catch((e) => {
          reject(e);
        });
    }
  });
};

myPromiseRace(promiseList)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

// Promise.any

const myPromiseAny = (promiseList) => {
    if(!promiseList.length) return;
    let count = 0;
    let error = [];

    return new Promise((resolve, reject) => {
        for(let task of promiseList) {
            Promise.resolve(task)
                .then(val => {
                    resolve(val);
                })
                .catch(e => {
                    error.push(e);
                    count++;

                    if(count === promiseList.length) {
                        reject(error);
                    }
                })
        }
    })
}

myPromiseAny(promiseList)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));