import type { DiscountableProduct } from "../utilities/discountableProduct";
import Product from "./Product";

export class PhysicalProduct extends Product implements DiscountableProduct {
  protected weightLbs: number;
  protected static taxRate = 0.10;

  constructor(sku:string,name:string,price:number,weight:number) {
    super(sku,name,price);
    this.weightLbs = weight;
  }

  displayDetails(): string {
    return `Product Name: ${this.name}, Price: $${this.price}, SKU: ${this.sku}, Weight: ${this.weightLbs} lbs`;
  }

  getPriceWithTax(): number {
    return Number((this.price * (1 + PhysicalProduct.taxRate)).toFixed(2));
  }

  getWeightInKg(): number {
    return Number((this.weightLbs / 2.205).toFixed(1));
  }

  applyDiscount(percent: number): void {
    const discoutAmount = (this.price * percent) / 100;
    this.price = Math.max(0, this.price - discoutAmount);
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}
