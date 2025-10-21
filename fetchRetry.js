const fetchData = () => {
    const num = Math.floor(Math.random() * 10);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 5) resolve('Data Received');
            else reject(`Data fetch Failed - ${num}`);
        }, 100)
    })
}

const fetchRetry = (fun, retry, delay) => {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fun()
                .then((res) => {
                    resolve(res);
                })
                .catch(e => {
                    console.log(`Attempt ${n} ${e}`)
                    if(n < 1) reject(e);
                    else {
                        setTimeout(() => {
                            attempt(n - 1);
                        }, delay);
                    }
                })

        }
        attempt(retry)
    })
}

fetchRetry(fetchData, 3, 100).then(res => console.log(res)).catch(e => console.log(e));