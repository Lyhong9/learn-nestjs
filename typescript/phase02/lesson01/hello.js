// Basic Types
let firstName = "Hong";
let age = 19;
let isLoggedIn = true;
let skills = ["JavaScript", "TypeScript", "NestJS"];
let scores = [90, 95, 100];
let user = {
    name: "Hong",
    age: 22,
};
// Type Inference
let country = "Cambodia"; //TypeScript automatically infers
// Type Annotation
let email;
email = "lyhong@gmail.com";
console.log(`Hello ${firstName}!`);
console.log(`Age: ${age}`);
console.log(`Loggin: ${isLoggedIn}`);
console.log(`Skills: ${skills}`);
console.log(`Scores: ${scores[2]}`);
console.log(`User name: ${user.name}`);
console.log(`User age: ${user.age}`);
console.log(`Country: ${country}`);
console.log(`Email: ${email}`);
export {};
