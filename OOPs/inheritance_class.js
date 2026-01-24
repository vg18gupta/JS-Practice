class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const A1 = new Animal();
const D1 = new Dog();

console.log(A1.speak());
