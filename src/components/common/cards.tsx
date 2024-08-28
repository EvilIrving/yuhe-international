"use client";
import { useState } from "react";
import Image from "next/image";

const ProductCard = ({
  product,
}: {
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
    parameters: {
      label: string;
      value: string;
    }[];
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg border border-gray-200 p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="h-48 w-full rounded-lg object-cover"
      />

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-bold">{product.name}</h2>
      <p className="text-gray-500">{product.description}</p>

      {/* Product Parameters (Visible only on hover) */}
      {isHovered && (
        <div className="absolute inset-x-0 bottom-0 rounded-b-lg bg-white/90 p-4 shadow-lg">
          <ul>
            {product.parameters.map((param, index) => (
              <li key={index} className="text-sm text-gray-600">
                {param.label}: {param.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProductsGrid = ({ selectedCategory }: { selectedCategory: string }) => {
  const products = [
    {
      name: "XGH5120ZYSL6",
      category: "loader",
      description: "后装压缩式垃圾车",
      image: "/images/products/engineer/loader.png", // Replace with actual image path
      parameters: [
        { label: "车厢有效容积(m³)", value: "10" },
        { label: "压缩循环时间(s)", value: "≤14" },
      ],
    },
    {
      name: "XGH5120ZYSL6",
      category: "truck",
      description: "后装压缩式垃圾车",
      image: "/images/products/engineer/loader.png", // Replace with actual image path
      parameters: [
        { label: "车厢有效容积(m³)", value: "10" },
        { label: "压缩循环时间(s)", value: "≤14" },
      ],
    },
    {
      name: "XGH5120ZYSL6",
      category: "loader",
      description: "后装压缩式垃圾车",
      image: "/images/products/engineer/loader.png", // Replace with actual image path
      parameters: [
        { label: "车厢有效容积(m³)", value: "10" },
        { label: "压缩循环时间(s)", value: "≤14" },
      ],
    },
    {
      name: "XGH5120ZYSL6",
      category: "loader",
      description: "后装压缩式垃圾车",
      image: "/images/products/engineer/loader.png", // Replace with actual image path
      parameters: [
        { label: "车厢有效容积(m³)", value: "10" },
        { label: "压缩循环时间(s)", value: "≤14" },
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);
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
