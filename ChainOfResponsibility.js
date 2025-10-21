class Handler {
    constructor() {
        this.nextHandler = null;
    }

    setNext(handler) {
        this.nextHandler = handler
        return this.nextHandler;
    }

    handleOps(request) {
        if(this.nextHandler) {
            return this.nextHandler.handleOps(request);
        }
        return null;
    }
}

class Hanlder1 extends Handler {
    handleOps(request) {
        if(request.type === 'first') {
            return request.content;
        } else {
            return super.handleOps(request);
        }
    }
}

class Hanlder2 extends Handler {
  handleOps(request) {
    if (request.type === "second") {
      return request.content;
    } else {
      return super.handleOps(request);
    }
  }
}

class Hanlder3 extends Handler {
  handleOps(request) {
    if (request.type === "third") {
      return request.content;
    } else {
      return super.handleOps(request);
    }
  }
}

const ChildHandler1 = new Hanlder1();
const ChildHandler2 = new Hanlder2();
const ChildHandler3 = new Hanlder3();

ChildHandler1.setNext(ChildHandler2).setNext(ChildHandler3);


const user = [
  {
    type: "first",
    content: "First step",
  },
  {
    type: "second",
    content: "Second step",
  },
  {
    type: "third",
    content: "Third step",
  },
];

user.forEach(item => {
    const res = ChildHandler1.handleOps(item);
    console.log(res);
});