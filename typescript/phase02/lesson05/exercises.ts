// Exercise 1
type Book = {
  title: string;
  author: string;
  price: number;
  isStock: boolean;
};

const book: Book = {
  title: "Atomic",
  author: "Lyhong",
  price: 9.99,
  isStock: true,
};

console.log(book);

// Exercise 2
type Car = {
  brand: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  {
    brand: "Lambo",
    model: "King",
    year: 2026,
  },
  {
    brand: "Bugatti",
    model: "Goat",
    year: 2026,
  },
];

for(const car of cars){
  console.log(car)
}

// Exercise 3
type Address = {
  street: string;
  city: string;
};

type Employee = {
  name: string;
  address: Address;
};
const employee: Employee = {
  name: "Hong",
  address: {
    street: "Russian Blvd",
    city: "Phnom Penh",
  },
};
console.log(employee.name);
console.log(employee.address.city)
console.log(employee.address.street)

// Exercise 4
type Student = {
  name: string;
  skills: string[];
};
const student: Student = {
  name: "Hong",
  skills: ["TypeScript", "NestJS", "PostgreSQL"],
};

for( const skill of student.skills){
  console.log(skill)
}

// Exerrcise 5 easier to create a lot of object like carOne and carTwo

export {};
