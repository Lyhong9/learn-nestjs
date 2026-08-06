const skills = ["JavaScript", "TypeScript", "NestJS"];

skills[0] = "ExpressJS";

console.log(skills.includes("NestJS"));

for (const skill of skills) {
  console.log(skill);
}

skills.pop();

console.log(skills);

const user: [number, string] = [
  1,
  "Hong"
];
const location: [number, number] = [
  11.5564,
  104.9282
];

console.log(user)
console.log(location)

export {};
