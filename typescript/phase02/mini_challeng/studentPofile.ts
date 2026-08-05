// Create the student profile object directly using inline types
const student: {
  name: string;
  age: number;
  university: string;
  major: string;
  gpa: number;
  isGraduated: boolean;
  backendSkills: string[];
  databases: string[];
} = {
  name: "Hong",
  age: 22,
  university: "RUPP",
  major: "Computer Science",
  gpa: 3.8,
  isGraduated: false,
  backendSkills: ["Node.js", "NestJS"],
  databases: ["PostgreSQL", "MongoDB"]
};

// Print everything in a clean format
console.log(`===== Student Profile =====\n`);
console.log(`Name: ${student.name}\n`);
console.log(`Age: ${student.age}\n`);
console.log(`University: ${student.university}\n`);
console.log(`Major: ${student.major}\n`);
console.log(`GPA: ${student.gpa}\n`);
console.log(`Graduated: ${student.isGraduated}\n`);

console.log(`Backend Skills:`);
console.log(`- ${student.backendSkills[0]}`);
console.log(`- ${student.backendSkills[1]}\n`);

console.log(`Databases:`);
console.log(`- ${student.databases[0]}`);
console.log(`- ${student.databases[1]}`);

export {};
