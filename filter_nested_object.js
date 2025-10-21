const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
     f: {
       g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const deepFilter = (obj, filter) => {
    for(let key in obj) {
        const val = obj[key];

        if(typeof val === 'object') {
            deepFilter(val, filter);
        } else if(filter(val) === false){
            delete obj[key];
        }

        if (JSON.stringify(val) === "{}") {
            delete obj[key];
        }
    }

    return obj;
}


const filter = (s) => typeof s === "string";

console.log(deepFilter(obj, filter))
