import { useState } from "react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

const MenuNav: React.FC = () => {
  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Roadmap", href: "/roadmap" },
    {
      label: "Pages",
      href: "#",
      subItems: [
        { label: "Blog Grid Page", href: "/blog-grid" },
        { label: "Token Sale Page", href: "/token-sale" },
        { label: "Support Page", href: "/support" },
        { label: "Signin Page", href: "/signin" },
        { label: "Signup Page", href: "/signup" },
      ],
    },
    { label: "Support", href: "/support" },
  ];

  return (
    <nav className=" ">
      <ul className="flex space-x-8 ">
        {menuItems.map((item) => (
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
      className="relative group p-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={item.href}>
        <span className="text-white hover:text-gray-200 cursor-pointer">
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
                <span className="block px-4 py-2 text-black hover:text-black-200">
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
