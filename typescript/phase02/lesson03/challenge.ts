// Product Information System
// Define explicit primitive types for all fields
const productName = "Pro Gaming Laptop X1";
const category = "Electronics";
const basePrice = 1200;
let stock = 45;
const discountPercentage = 10; // 10% discount
const isAvailable: boolean = true;
const sku = "TECH-LAP-001";

// Requirements: Specific initializations
let description: string | null = null;
let barcode: string | undefined = undefined;

// Calculate the final price after discount
const discountFraction = discountPercentage / 100;
const finalPrice = basePrice * (1 - discountFraction);

// Print everything neatly
console.log("===== Product =====");
console.log(`Name:        ${productName}`);
console.log(`Category:    ${category}`);
console.log(`SKU:         ${sku}`);
console.log(`Stock:       ${stock} units`);
console.log(`Available:   ${isAvailable}`);
console.log(`Description: ${description}`); // Prints as null
console.log(`Barcode:     ${barcode}`);     // Prints as undefined
console.log("");
console.log(`Price:       $${basePrice}`);
console.log(`Discount:    ${discountPercentage}%`);
console.log(`Final Price: $${finalPrice}`);

export {}
