"use client";
import { useState } from "react";
import Image from "next/image";

interface Product {
  name: string;
  type: string;
  typeName: string;
  desc: string;
  smallImg: string;
  images: string;
  features: string;
  parameter: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg border border-gray-200 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Image
        src={product.smallImg}
        alt={product.name}
        width={300}
        height={200}
        className="h-48 w-full rounded-lg object-cover"
      />

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.desc}</p>
    </div>
  );
};

const ProductsGrid = ({
  selectedCategory,
  products,
}: {
  selectedCategory: string;
  products: Product[];
}) => {
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.type === selectedCategory);
  return (
    <div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">当前类型还没有产品哦</div>
      )}
    </div>
  );
};

export default ProductsGrid;
