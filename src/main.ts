// Import all of our model files and utility file
import Product from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utilities/taxCalculator";
import { sortByName, sortByPrice } from "./utilities/productSorting";

// Storage for Physical and Digital products extended from Product (polymorphism)
const productInventory: Product[] = [];

// New Physical and Digital products
const preOrderGta = new DigitalProduct('P069', 'GTAVI Preorder', 99.99, 0.01);
const digitalGame = new DigitalProduct('P003', 'Ridge Racer 7', 69.99, 79.4);
const boots = new PhysicalProduct('P002', 'Work Boots', 49.99, 10);
const mouse = new PhysicalProduct('P502', 'Logitech G502', 149.99, 0.25);

// Push them into Storage
productInventory.push(preOrderGta, digitalGame, boots, mouse);

// For of Loop to show product details and Final price with tax
for (const product of productInventory) {
  console.log(product.displayDetails(), `, Final Price with tax: $${calculateTax(product)}`);
}

const sortedByPriceAsc = sortByPrice(productInventory, 'ascending');
const sortedByPriceDes = sortByPrice(productInventory, 'descending');
const sortedByNameAsc = sortByName(productInventory, 'ascending');
const sortedByNameDes = sortByName(productInventory, 'descending');

console.log('Sorted by price Ascending', sortedByPriceAsc);
console.log('Sorted by price Descending', sortedByPriceDes);
