"use client";
import { useState } from "react";

import ProductsGrid from "@/components/common/cards";
import { productsConfig } from "@/data.config";

const EngineeringPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { name: "所有", count: 24, type: "all" },
    { name: "拖拉机", count: 100, type: "truck" },
    { name: "水稻收割机", count: 58, type: "tractor" },
    { name: "农机配件", count: 39, type: "accessories" },
  ];
  return (
    <section id="engineering" className="pb-20 pt-[120px]">
      <div className="container">
        <div className="relative bg-white p-4">
          {/* Title and Product Count */}
          <div className="mb-4 flex items-center">
            <h2 className="mr-4 text-2xl font-bold">农业机械</h2>
            <span className="text-gray-600">
              共有 <strong> 100</strong> 件相关产品
            </span>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 flex items-center justify-start border-b-2 border-gray-200 pb-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`mr-4 cursor-pointer rounded px-2 py-1 text-sm ${
                  selectedCategory === category.type
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setSelectedCategory(category.type)}
              >
                {category.name}({category.count})
              </span>
            ))}
          </div>

          {/* Inquiry Button */}
          <div className="absolute right-0 top-12 text-left">
            <button className="rounded bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/70">
              我要购机-立即询价
            </button>
          </div>
        </div>

        <div>
          <ProductsGrid
            selectedCategory={selectedCategory}
            products={productsConfig[1].products}
          />
        </div>
      </div>
    </section>
  );
};

export default EngineeringPage;
