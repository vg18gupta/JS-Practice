class PubSub {
    constructor() {
        this.handler = {}
    }

    subscribe(eventname, cb) {
        if(!this.handler[eventname]) {
            this.handler[eventname] = []
        }

        this.handler?.[eventname].push(cb)
    }

    unsubscribe(eventname, cb) {
        if(this.handler[eventname]) {
            this.handler = this.handler[eventname].filter(item => item !== cb);
        }
    }

    publish(eventname, data) {
        if (this.handler[eventname]) {
          this.handler[eventname].forEach(cb => {
              cb(data);
          });
        }
    }
}