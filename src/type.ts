type Product = {
  name: string;
  type: string;
  typeName: string;
  desc: string;
  smallImg: string;
  images: string;
  features: string;
  parameter: string;
};

type ProductConfig = {
  type: string;
  title: string;
  products: Product[];
};

export type { Product, ProductConfig };
