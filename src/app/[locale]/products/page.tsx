import Image from "next/image";

const Products = () => {
  const products = [
    {
      name: "Tractor",
      chineseName: "拖拉机",
      icon: "/images/products/tractor.jpg",
    },
    {
      name: "Excavator/Hydradig",
      chineseName: "挖掘机",
      icon: "/images/products/excavator.png",
    },
    {
      name: "Loader",
      chineseName: "装载机",
      icon: "/images/products/loader.png",
    },
    {
      name: "Mixer Truck",
      chineseName: "罐车",
      icon: "/images/products/mixer-truck.jpg",
    },
    {
      name: "Rice Harvester",
      chineseName: "水稻收割机",
      icon: "/images/products/rice-harvester.jpg",
    },
    {
      name: "Agricultural Machinery Parts",
      chineseName: "农机配件",
      icon: "/images/products/agricultural.jpg",
    },
    {
      name: "Agricultural Machinery Parts",
      chineseName: "二手机器",
      icon: "/images/products/used.png",
    },
  ];

  //   挖掘机  装载机 罐车 水稻收割机 拖拉机 农机配件
  return (
    <section id="product" className="relative z-10 pb-28">
      <div className="container">
        <div className="">
          <div className="">
            <div className="mx-auto p-8">
              <div className="fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
                <h3 className="mb-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
                  我们的产品
                </h3>
                <p className="text-sm font-medium text-gray-400 dark:text-white">
                  服务团队是一支技术精湛、专业负责的工程师团队。他们经过徐工集团的严格培训和考核，具备丰富的技术知识和实践经验。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="mb-2 h-56 w-48">
                      <Image
                        width={150}
                        height={150}
                        src={product.icon}
                        alt={product.name}
                        className="object-contain"
                      />
                    </div>
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg font-medium">
                      {product.chineseName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-32 right-0 -z-10">
        <Image
          src="static/token-sale-shape.svg"
          width={311}
          height={768}
          alt="shape"
        />
      </div>
    </section>
  );
};

export default Products;
