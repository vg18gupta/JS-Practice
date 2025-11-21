const debounce = (fn, delay) => {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);

        setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}