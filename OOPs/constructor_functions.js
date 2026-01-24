// Constructor Functions in JavaScript
// What is a Constructor Function?

// A constructor function is a regular JavaScript function that is used with the new keyword to create and initialize object.

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.creationTS = new Date();
    // Since we dont need these methods in every initialisation hich increases the memory usage we will add these methods using prototype.
    // this.deposit = function(amount) {
    //     this.balance += amount;
    // };
    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

const vishalAccount = new BankAccount('Vishal G', 1000);
const johnAccount = new BankAccount('John Doe');

BankAccount.prototype.deposit = function(amount) {
        this.balance += amount;
    };

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
// deposit amount to bank
vishalAccount.deposit(5000);
johnAccount.deposit(10000);

// withdraw
vishalAccount.withdraw(2000);



// ----------------------------------- X ---------------------------------------

// Class based OOPs

class BankAccount {
  customerName;
  creationTS;
  balance = 0;

  constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.balance = balance;
      this.creationTS = new Date();
  };

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
      this.balance -= amount;
  }
}

const vishalGuptaAccount = new BankAccount("Vishal G", 1000);
const johnDoeAccount = new BankAccount("John Doe");

// deposit amount to bank
vishalAccount.deposit(5000);
johnAccount.deposit(10000);

// withdraw
vishalAccount.withdraw(2000);