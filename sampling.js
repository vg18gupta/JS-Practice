const sampling = (fun, count, context) => {
    let counter = 0
    return function(...args) {
        context = this ? this : context;
        counter++;

        if(counter !== count) {
            return;
        }

        fun.apply(context, args);
        counter = 0;
    }
}

function message(){
  console.log("hello");
}

const sample = sampling(message, 4);
sample();
sample();
sample();
sample(); // hello
sample();
sample();
sample();
sample(); // hello