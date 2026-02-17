const STATES = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: "REJECTED"
}

class CustomPromise { 
    #value = void 0;
    #state = STATES.PENDING;
    #resolutionHandlers = [];
    #rejectionHandlers = [];
    constructor(fn) {
        this.resolve = this.#_resolve.bind(this);
        this.reject = this.#_reject.bind(this);

        try {
            fn(this.resolve, this.reject)
        } catch(e) {
            this.reject(e)
        }
    }

    #_resolve(value) {
        microQuetask(() => {
            if(this.#state !== STATES.PENDING) return;

            this.#value = value;
            this.#state = STATES.FULFILLED;
            this.#runResolutionHandlers();
        })
    }

    #_reject(value) {
        microQuetask(() => {
            if(this.#state !== STATES.PENDING) return;

            this.#value = value;
            this.#state = STATES.REJECTED;
            this.#runRejectionHandlers();

        })
    }

    #runResolutionHandlers() {
        if(this.#resolutionHandlers.length) {
            this.#resolutionHandlers.forEach(handler => handler(this.#value));
            this.#resolutionHandlers = []
        }
    }

    #runRejectionHandlers() {
        if(this.#rejectionHandlers.length) {
            this.#rejectionHandlers.forEach(handler => handler(this.#value));
            this.#rejectionHandlers = []
        }
    }

    then(resolutionHandler, rejectionHandler) {
        return new CustomPromise((resolve, reject) => {
            const thenHandler = (result) => {
                if(!resolutionHandler) {
                    return resolve(result);
                }

                try {
                    const returnedResult = resolutionHandler(result);

                    if(returnedResult instanceof CustomPromise) {
                        returnedResult.then(resolve, reject);
                    } else {
                        return resolve(returnedResult)
                    }
                } catch(e) {
                    return reject(e)
                }

            };
            this.#resolutionHandlers.push(thenHandler);

            const catchHandler = (result) => {
                if(!rejectionHandler) {
                    return reject(result);
                }

                try {
                    const returnedResult = rejectionHandler(result);

                    if(returnedResult instanceof CustomPromise) {
                        returnedResult.then(resolve, reject);
                    } else {
                        return resolve(returnedResult)
                    }
                } catch(e) {
                    return reject(e)
                }

            };
            this.#rejectionHandlers.push(catchHandler);

            if(this.#state === STATES.FULFILLED) {
                this.#runResolutionHandlers();
            } else if (this.#state === STATES.REJECTED) {
                this.#runRejectionHandlers();
            }
        })
    }

    catch(rejectionHandler) {
        return this.then(null, rejectionHandler);
    }
}