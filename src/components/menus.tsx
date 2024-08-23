import { useState } from "react";
import Link from "next/link";
import { headerConfig } from "@/config";
interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

const MenuNav: React.FC = () => {
  const { links } = headerConfig;

  return (
    <nav className=" ">
      <ul className="flex items-center justify-center">
        {links.map((item) => (
          <MenuItemComponent key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
};

interface MenuItemComponentProps {
  item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group px-4 py-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={item.href}>
        <span className="flex py-2 text-lg font-semibold text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-2 lg:inline-flex lg:py-5 xl:ml-3 2xl:ml-3 text-black">
          {item.label}
        </span>
      </Link>

      {item.subItems && (
        <ul
          className={`w-64 absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg z-50 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {item.subItems.map((subItem) => (
            <li key={subItem.label}>
              <Link href={subItem.href}>
                <span className="ud-menu-scroll flex py-2 text-lg font-semibold text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-5 lg:inline-flex lg:py-3 xl:ml-5 2xl:ml-7 text-black">
                  {subItem.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuNav;
