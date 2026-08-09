import Product from "./Product";

export class DigitalProduct extends Product {
  protected fileSize: number;
  protected static taxRate = 0;

  constructor(sku:string,name:string,price:number,fileSize:number) {
    super(sku,name,price);
    this.fileSize = fileSize;
  }

  displayDetails(): string {
    return `Product Name: ${this.name}, Price: $${this.price}, SKU: ${this.sku}, File Size: ${this.fileSize} GB`;
  }

  getPriceWithTax(): number {
    return Number((this.price * (1 + DigitalProduct.taxRate)).toFixed(2));
  }

  getFileSizeMB(): string {
    return `File Size: ${this.fileSize * 1000} MB`;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
}

