"use client";
import { useState } from "react";

import ProductsGrid from "@/components/common/cards";
import { productsConfig } from "@/data.config";
const EngineeringPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const products = productsConfig[0].products;
  const categories = [
    { name: "所有", count: 100, type: "all" },
    { name: "装载机", count: 58, type: "loader" },
    { name: "挖掘机", count: 39, type: "excavator" },
    { name: "罐车", count: 24, type: "truck" },
    { name: "精品二手设备", count: 35, type: "usedcar" },
  ];

  return (
    <section id="engineering" className="pb-20 pt-[120px]">
      <div className="container">
        <div className="relative p-4">
          {/* Title and Product Count */}
          <div className="mb-4 flex flex-wrap items-center">
            <h2 className="mr-4 text-2xl font-bold">工程机械</h2>
            <span className="text-gray-600 dark:text-gray-200">
              共有 <strong> {products.length || 0}</strong> 件相关产品
            </span>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 flex flex-wrap items-center justify-start border-b-2 border-gray-200 pb-4 dark:border-gray-700">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`mr-4 cursor-pointer rounded px-2 py-1 text-sm ${
                  selectedCategory === category.type
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary dark:text-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.type)}
              >
                {category.name}
                {/* ({category.count}) */}
              </span>
            ))}
          </div>

          {/* Inquiry Button */}
          <div className="relative text-left md:absolute md:right-0 md:top-10">
            <button className="rounded bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/70">
              我要购机-立即询价
            </button>
          </div>
        </div>

        <div>
          <ProductsGrid
            selectedCategory={selectedCategory}
            products={productsConfig[0].products}
          />
        </div>
      </div>
    </section>
  );
};

export default EngineeringPage;
