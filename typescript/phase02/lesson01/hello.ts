// Basic Types
let firstName: string = "Hong";
let age: number = 19;
let isLoggedIn: boolean = true;
let skills: string[] = ["JavaScript", "TypeScript", "NestJS"];
let scores: number[] = [90, 95, 100];
let user: {
  name: string;
  age: number;
} = {
  name: "Hong",
  age: 22,
};

// Type Inference
let country = "Cambodia"; //TypeScript automatically infers

// Type Annotation
let email: string;
email = "lyhong@gmail.com";

// Best Practices
const fullName = "DAM LyHong";

function greet(name: string) {
  console.log(name);
}

console.log(`Hello ${firstName}!`);
console.log(`Age: ${age}`);
console.log(`Loggin: ${isLoggedIn}`);
console.log(`Skills: ${skills}`);
console.log(`Scores: ${scores[2]}`);
console.log(`User name: ${user.name}`);
console.log(`User age: ${user.age}`);
console.log(`Country: ${country}`);
console.log(`Email: ${email}`);
console.log(`Full Name: ${fullName}`);
greet("Hong is the Goat")

export {};
