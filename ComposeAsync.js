// ComposeAsync is also knows as PIPE and COMPOSE

function a(x, y) {
    return new Promise((resolve, reject) => {
        resolve(x * y)
    })
}

function b(x) {
  return x * 5;
}

function c(x, y) {
  return new Promise((resolve, reject) => {
    resolve(x / 10);
  });
}

const composeAsync = (...func) => {
    return async(...input) => {
        let result = input;

        let reverseFunc = [...func].reverse();

        for (let task of reverseFunc) {
          result = await task(...(Array.isArray(result) ? result : [result]));
        }
        return result;
    }
}



composeAsync(c, b, a)(5, 3).then(res => console.log(res)).catch(e => console.log(e));
