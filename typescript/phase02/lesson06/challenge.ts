interface Address {
  street: string;
  city: string;
}
interface Person {
  readonly id: number;
  name: string;
  age: number;
  address: Address;
}
interface Student extends Person {
  grade: string;
  skills: string[];
}
interface Teacher extends Person {
  salary: number;
  subjects: string[];
}
const students: Student[] = [
  {
    id: 1,
    name: "Lyhong",
    age: 19,
    address: {
      street: "2004",
      city: "Phnom Penh",
    },
    grade: "Year 4",
    skills: ["TypeScript", "JavaScript", "NestJS"],
  },
  {
    id: 2,
    name: "Sochea",
    age: 19,
    address: {
      street: "2004",
      city: "Phnom Penh",
    },
    grade: "Year 4",
    skills: ["TypeScript", "JavaScript", "NestJS"],
  },
];
const teachers: Teacher[] = [
  {
    id: 1,
    name: "Lyhong",
    age: 19,
    address: {
      street: "2004",
      city: "Phnom Penh",
    },
    salary: 2999,
    subjects: ["TypeScript", "JavaScript", "NestJS"],
  },
  {
    id: 2,
    name: "Sochea",
    age: 19,
    address: {
      street: "2004",
      city: "Phnom Penh",
    },
    salary: 2999,
    subjects: ["TypeScript", "JavaScript", "NestJS"],
  },
];

for (const student of students) {
  console.log(`====================`);
  console.log(`Name         ${student.name}`);
  console.log(`Age          ${student.age}`);
  console.log(`City         ${student.address.city}`);
  console.log(`Skills       ${student.skills.join(", ")}`);
  console.log(`Grade        ${student.grade}`);
}

for (const teacher of teachers) {
  console.log(`====================`);
  console.log(`Name         ${teacher.name}`);
  console.log(`Age          ${teacher.age}`);
  console.log(`City         ${teacher.address.city}`);
  console.log(`Subjects     ${teacher.subjects.join(", ")}`);
  console.log(`Salary       ${teacher.salary}`);
}

export {};
