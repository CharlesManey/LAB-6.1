export default class Product {
  protected sku: string;
  protected name: string;
  protected price: number;
  protected static taxRate: number;

  constructor(sku: string, name: string, price: number,){
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `Product Name: ${this.name}, Price: ${this.price}, SKU: ${this.sku}`;
  }

  getPriceWithTax(): number {
    return Number(this.price * (1 + Product.taxRate));
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}
