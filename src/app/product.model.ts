export interface Product {
  model: string;
  productType: string;
  averagePrice: string;
  type?: {
    typeId: string,
    upper: string,
    medium: string,
    lower: string,
    categoryIdentifiers: string
  };
}
