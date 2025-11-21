const createtask = () => {
  const randomNumber = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber > 5) resolve(randomNumber);
      else reject(randomNumber);
    }, randomNumber * 100);
  });
};

const taskArray = [
  createtask,
  createtask,
  createtask,
  createtask,
  createtask,
  createtask,
  createtask,
  createtask,
];

const executePromise = async (taskArray, cb) => {
  let result = [];
  let error = [];
  for (let task of taskArray) {
    try {
      const res = await task();
      result.push(res);
    } catch (e) {
      error.push(e);
    }
  }

  cb(result, error);
};

executePromise(taskArray, (result, error) => console.log(result, error));
