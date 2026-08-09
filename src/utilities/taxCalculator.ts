import { DigitalProduct } from "../models/DigitalProduct";
import { PhysicalProduct } from "../models/PhysicalProduct";
import type Product from "../models/Product";

export function calculateTax<Type extends Product>(product: Type): number {
  if (product instanceof PhysicalProduct){
    return product.getPriceWithTax();
  } else if (product instanceof DigitalProduct){
    return product.getPriceWithTax();
  }
  return product.getPriceWithTax();
}