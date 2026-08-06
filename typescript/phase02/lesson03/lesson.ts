// Primitive Types
const age = 19;
console.log(age);

// Reference Types
const user = {
  name: "Hong",
};
console.log(user.name);

// String Interpolation
const message = `Hello ${user.name}`;
console.log(message);

// Useful String Methods
const language = "TypeScript";
console.log(language.length);
console.log(language.toUpperCase());
console.log(language.toLowerCase());
console.log(language.includes("Script"));

// undefined
let phoneNumber: string | undefined
console.log(phoneNumber);

// null
const deletedAccount = null;
console.log(deletedAccount)

// bigint
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber)

// symbol
const id1 = Symbol();
const id2 = Symbol();
console.log(id1);
console.log(id2)

export {};
