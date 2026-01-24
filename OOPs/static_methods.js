// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class User {
    static id = 1;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id+1;
  }
  // use case of static method
  static sortByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static sortByIncome(user1, user2) {
    return user1.income - user2.income;
  }
};


const user1 = new User('Vishal', 29, 2000);
const user2 = new User('John', 32, 1000);
const user3 = new User('Jane', 21, 5000);

const users = [user1, user2, user3];

users.sort(User.sortByAge);

users.sort(User.sortByIncome);


// Use case of static properties
// lets say we want to maintain a id for each user instance and it should be incremental and here this will be only available to the class.