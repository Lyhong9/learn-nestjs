const product = {
  name: "Gaming Laptop",
  price: 1200,
  stock: 10,
  isAvailable: true,
};

product.name = "iPhone 12 Pro Max";

console.log(product);

// Type Alias
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
  stock: 5,
};

const keyboard: Product = {
  id: 2,
  name: "Keyboard",
  price: 80,
  stock: 20,
};

console.log(laptop);
console.log(keyboard);

// Nested Objects
type Address = {
  street: string;
  city: string;
};

type Customer = {
  name: string;
  address: Address;
};
const customer: Customer = {
  name: "Hong",
  address: {
    street: "Russian Blvd",
    city: "Phnom Penh",
  },
};
console.log(customer.address.city);

// Objects with Arrays
type Student = {
  name: string;
  skills: string[];
};
const student: Student = {
  name: "Hong",
  skills: ["TypeScript", "NestJS", "PostgreSQL"],
};
console.log(student);
for (const skill of student.skills) {
  console.log(skill);
}

export {};
