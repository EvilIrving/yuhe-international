import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/components/logo";
import { footerConfig } from "@/pageConfig";
const Footer = () => {
  const {
    description,
    socialLinks,
    quickLinks,
    supports,
    copyrightText,
    footerShape1,
    footerShape2,
  } = footerConfig;

  return (
    <footer className="relative z-10 pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
            <div className="wow fadeInUp mb-14 max-w-[330px] xl:mb-20">
              <div className="w-36 pb-5">
                <Logo />
              </div>
              <p className="text-body-color-2 dark:text-body-color mb-10 text-sm font-normal">
                {description}
              </p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-body-color-2 dark:bg-dark flex size-10 items-center justify-center rounded-full bg-light-bg hover:bg-primary hover:text-white dark:text-white dark:hover:bg-primary"
                  >
                    <Image
                      width={20}
                      height={20}
                      src={link.icon}
                      alt="Social Link"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
            <div className="mb-14 xl:mb-20">
              <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    className="text-body-color-2 dark:text-body-color block text-base font-medium hover:text-primary dark:hover:text-primary"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
            <div className="mb-14 xl:mb-20">
              <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">
                Supports
              </h4>
              <div className="space-y-3">
                {supports.map((support, index) => (
                  <Link
                    key={index}
                    className="text-body-color-2 dark:text-body-color block text-base font-medium hover:text-primary dark:hover:text-primary"
                    href={support.href}
                  >
                    {support.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F3F4F4] py-7 text-center dark:border-[#2D2C4A]">
          <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
            {copyrightText}
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10">
        <Image
          width={158}
          height={392}
          src={footerShape2}
          alt="Footer Shape 2"
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          width={157}
          height={254}
          src={footerShape1}
          alt="Footer Shape 1"
        />
      </div>
    </footer>
  );
};

export default Footer;
