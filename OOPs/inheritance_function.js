function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.creationTS = new Date();
}

const vishalAccount = new BankAccount("Vishal G", 1000);
const johnAccount = new BankAccount("John Doe");

BankAccount.prototype.deposit = function (amount) {
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


function currentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 100000;
};

currentAccount.prototype.takePersonalLoan = function(amount) {
    console.log(this.transactionLimit < amount ? 'YES' : 'NO');
};
currentAccount.prototype = Object.create(BankAccount.prototype);

