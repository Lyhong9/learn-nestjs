// Exercise 1
const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "NestJS",
  "GO",
  "C++",
];

console.log(programmingLanguages);
console.log(programmingLanguages[0]);
console.log(programmingLanguages[4]);

// Exercise 2
const prices = [100, 200, 300, 400];

console.log(prices.length);
console.log(prices.includes(300));

// Exercise 3
const frameworks = ["Express"];

frameworks.push("NestJS");
frameworks.push("Fastify");
frameworks.pop();
console.log(frameworks);

// Exercise 4
for (const skill of programmingLanguages) {
  console.log(skill);
}

// Exerrcise 5 i understood
const student: [string, number, boolean] = ["LYhong", 19, true];

console.log(student);

export {};
