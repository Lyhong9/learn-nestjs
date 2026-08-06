interface User {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  phone?: string; // Optional Properties
}
const user1: User = {
  id: 1,
  name: "Hong",
  email: "hong@gmail.com",
  password: "123456",
};
const user2: User = {
  id: 2,
  name: "Dara",
  email: "dara@gmail.com",
  password: "abcdef",
};

console.log(user1);
console.log(user2);

// Extending Interfaces
interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  university: string;
}
interface Teacher extends Person {
  salary: number;
}
const student1: Student = {
  name: "Lyhong",
  age: 19,
  university: "SETEC",
};
const teacher1: Teacher = {
  name: "Lyhong",
  age: 19,
  salary: 2999,
};
console.log(student1);
console.log(teacher1);

// Interfaces with Arrays
interface Developer {
  name: string;
  skills: string[];
}
const developer: Developer = {
    name: "Hong",
    skills: [
        "NestJS",
        "TypeScript",
        "Docker",
    ],
};
for (const skill of developer.skills) {
    console.log(skill);
}

// Nested Interfaces
interface Address {
    city: string;
    street: string;
}
interface Customer {
    name: string;
    address: Address;
}
const customer: Customer = {
    name: "Hong",
    address: {
        city: "Phnom Penh",
        street: "Russian Blvd",
    },
};
console.log(customer)

export {};
