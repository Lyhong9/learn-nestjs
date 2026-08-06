// Exercise 1
interface User {
  id: number;
  name: string;
  email: string;
}

const user1: User = {
  id: 1,
  name: "Hong",
  email: "hong@gmail.com",
};
const user2: User = {
  id: 2,
  name: "Dara",
  email: "dara@gmail.com",
};

console.log(user1)
console.log(user2)

// Exercise 2 Because we can read only can't be change value

// Exercise 3
interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  university: string;
}
const student1: Student = {
  name: "Lyhong",
  age: 19,
  university: "SETEC",
};
console.log(student1)

// Exercise 4
interface Customer {
    name: string;
    phone?: string;
}

const customer1: Customer = {
  name: "Lyhong",
  phone: "096899414"
}
const customer2: Customer = {
  name: "Sochea",
}

console.log(customer1)
console.log(customer2)

// Exercise 5
// interface use for Describes object structures.
// type use for Declares aliases for any data shape.

export {};
