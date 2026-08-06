// Account configuration with explicit types (unchanging values)
const accountHolder = "Jane Doe";
const accountNumber = "1234-5678-9012";
const bankName = "Global Vanguard Bank";
const currency = "USD";
const isActive = true;

// Transactions and mutable balance
let balance = 1000; // Starting balance
const initialBalance = balance;

const depositAmount = 500;
balance += depositAmount;

const withdrawAmount = 200;
balance -= withdrawAmount;

// Output formatting
console.log("===== Bank Account =====");
console.log("");
console.log(`Holder: ${accountHolder}`);
console.log(`Account: ${accountNumber}`);
console.log(`Bank: ${bankName}`);
console.log(`Currency: ${currency}`);
console.log("");
console.log(`Balance Before: $${initialBalance}`);
console.log("");
console.log(`Deposit: $${depositAmount}`);
console.log("");
console.log(`Withdraw: $${withdrawAmount}`);
console.log("");
console.log(`Final Balance: $${balance}`);
console.log("");
console.log(`Active: ${isActive}`);
