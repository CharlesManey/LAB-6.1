import type Product from "../models/Product";

export type SortOrder = 'ascending' | 'descending';

export function sortByPrice(products: Product[], order: SortOrder = 'ascending'): Product[] {
  return [...products].sort((a, b) => {
    const difference = a.getPrice() - b.getPrice();
    return order === 'ascending' ? difference : -difference;
  });
}

export function sortByName(products: Product[], order: SortOrder = 'ascending'): Product[] {
  return [...products].sort((a, b) => {
    const comparision = a.getName().localeCompare(b.getName());
    return order === 'ascending' ? comparision : -comparision;
  });
}