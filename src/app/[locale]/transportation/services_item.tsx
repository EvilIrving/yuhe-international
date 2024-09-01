import Image from "next/image";

import { Service } from "@/type";
const ServicesItem = ({ item }: { item: Service }) => {
  return (
    <div className="relative flex size-full justify-start">
      <div className="mr-4 w-1/4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="pt-6 text-lg text-gray-600 dark:text-gray-300">
          {item.desc}
        </p>
      </div>
      <div className="relative h-full w-3/4">
        <Image src={item.src} alt={item.name} fill className="rounded" />
      </div>
    </div>
  );
};

export default ServicesItem;
