// Exercise 1
const name: string = "Lyhong";
const age: number = 19;
const isBackendDeveloper: boolean = true;

// Exercise 2
const favoriteProgrammingLanguages: string[] = [
  "Spring BOOT",
  "ExpressJS",
  "TypeScript",
  "NestJS",
];

// Exercise 3
const hong: {
  name: string;
  age: number;
  country: string
  favoriteLanguage: string
} = {
  name: "Lyhong",
  age: 19,
  country: "USA",
  favoriteLanguage: "NestJS"
};

// Exercise 4
// Type Inference (TypeScript guesses it is a string)
const firstName = "DAM"; 

// Type Annotation (You explicitly declare it is a string)
const lastName: string = "LyHong"; 

console.log(`My name is ${name}`);
console.log(`I'm ${age} years old`);
console.log(`I am a backend developer: ${isBackendDeveloper}`);

console.log(`Favorite programming languages: ${favoriteProgrammingLanguages}`);

console.log(`My name is ${hong.name} i am ${hong.age} years old i'm from ${hong.country} my favorite language is ${hong.favoriteLanguage}`)

console.log(`Full name: ${firstName} ${lastName}`)

export {};
