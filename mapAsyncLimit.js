/**
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */
export default async function mapAsyncLimit(iterable, callbackFn, size) {
  let results = new Array(iterable.length);
  
  async function worker() {
    for(let i = 0; i < iterable.length; i++) {
      results[i] = await callbackFn(iterable[i]);
    }
  }

  const workers = Array.from({length: Math.min(size, iterable.length)}, () => worker())
  await Promise.all(workers);
  return results
}

//PROBLEM: https://www.greatfrontend.com/questions/javascript/map-async-limit?format=javascript