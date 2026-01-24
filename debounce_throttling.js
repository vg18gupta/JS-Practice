const debounce = (fn, delay) => {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);

        setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


const throttling = function(cb, limit) {
    let isThrottling = false;

    return function(...args) {
        if(!isThrottling) {
            cb.apply(this, args);
            isThrottling = true;

            setTimeout(() => {
                isThrottling = false;
            }, limit)
        }
    }
}