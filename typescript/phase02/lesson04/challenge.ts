const customerName = "LyHong";

const products = ["Laptop", "Mouse", "Keyboard"];

const prices = [1200, 25, 80];

const discount = 10;

const isPaid = true;

for (const product of products) {
  console.log(product);
}

let totalPrice = 0;

for (const price of prices) {
  totalPrice += price;
}

const discountAmount = totalPrice * (discount / 100);
const finalPrice = totalPrice - discountAmount;

const order: [number, boolean] = [1001, true];
const [orderId, paymentStatus] = order;

console.log("\n===== Shopping Cart =====");
console.log(`Customer Name: ${customerName}`);
console.log("Products:", products);
console.log("Prices:", prices);
console.log("Discount:", discount + "%");
console.log("Is Paid:", isPaid);

console.log("\n===== Calculation =====");
console.log("Total Price: $" + totalPrice);
console.log("Discount Amount: $" + discountAmount);
console.log("Final Price: $" + finalPrice);

console.log("\n===== Order =====");
console.log("Order ID:", orderId);
console.log("Payment Status:", paymentStatus);
