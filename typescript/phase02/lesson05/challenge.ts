type Supplier = {
  name: string;
  email: string;
  phone: string;
};

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: boolean;
  discount: number;
  isAvailable: boolean;
  tags: string[];
  supplier: Supplier;
};

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 18",
    category: "Phone",
    price: 1500,
    stock: true,
    discount: 10,
    isAvailable: true,
    tags: ["Phone", "iPhone"],
    supplier: {
      name: "Lyhong",
      email: "damlyhong@gmail.com",
      phone: "0123456789",
    },
  },
  {
    id: 2,
    name: "iPhone 19",
    category: "Phone",
    price: 1500,
    stock: true,
    discount: 10,
    isAvailable: true,
    tags: ["Phone", "iPhone"],
    supplier: {
      name: "Lyhong",
      email: "damlyhong@gmail.com",
      phone: "0123456789",
    },
  },
  {
    id: 3,
    name: "iPhone 20",
    category: "Phone",
    price: 1500,
    stock: true,
    discount: 10,
    isAvailable: true,
    tags: ["Phone", "iPhone"],
    supplier: {
      name: "Lyhong",
      email: "damlyhong@gmail.com",
      phone: "0123456789",
    },
  },
];

for (const product of products) {
  const finalPrice = product.price * (1 - product.discount / 100);

  console.log("====================");
  console.log(`Name: ${product.name}`);
  console.log(`Category: ${product.category}`);
  console.log(`Price: $${product.price}`);
  console.log(`Final Price: $${finalPrice}`);
  console.log(`Supplier: ${product.supplier.name}`);
  console.log(`Tags: ${product.tags.join(", ")}`);
}

export {};
