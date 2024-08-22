import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
            <div className="wow fadeInUp mb-14 max-w-[330px] xl:mb-20">
              <div className="w-64 h-16">
                <Link className="mb-6 inline-block" href="/about">
                  <Image
                    src="/static/logo-white.svg"
                    width={146}
                    height={46}
                    alt="Image"
                    className="hidden dark:block"
                  />
                  <Image
                    src="/static/logo.svg"
                    width={146}
                    height={46}
                    alt="Image"
                    className="dark:hidden"
                  />
                </Link>
              </div>

              <p className="mb-10 text-base font-medium text-body-color-2 dark:text-body-color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                natus distinctio culpa quod deleniti necessitatibus enim
                doloremque perspiciatis nisi tempore. A repellat nulla assumenda
                nostrum adipisci repudiandae atque voluptatibus nisi.
              </p>
              <div className="flex items-center space-x-3">
                <Link
                  href={"#"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/social-link/whatsapp.svg"
                    alt="Image"
                  />
                </Link>
                <Link
                  href={"#"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                >
                  <Image
                    width={20}
                    height={20}
                    src="/social-link/gmail.svg"
                    alt="Image"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
            <div className="mb-14 xl:mb-20">
              <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">
                Quick Links
              </h4>
              <div className="space-y-3">
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  What is ico
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Roadmap
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Whitepaper
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Social Network
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Join Us Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
            <div className="mb-14 xl:mb-20">
              <h4 className="mb-5 text-2xl font-bold text-black dark:text-white">
                Supports
              </h4>
              <div className="space-y-3">
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Setting &amp; Privacy
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Help &amp; Support
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  24/7 Supports
                </Link>
                <Link
                  className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  href="#"
                >
                  On Point FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F3F4F4] py-7 text-center dark:border-[#2D2C4A]">
          <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
            © Crypto - All Rights Reserved, Crafted by Next.js Templates
          </p>
        </div>
      </div>

      <div className="absolute left-0 top-0 -z-10">
        <Image
          width={158}
          height={392}
          src="/static/footer-shape-2.svg"
          alt="Image"
        ></Image>
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          width={157}
          height={254}
          src="/static/footer-shape-1.svg"
          alt="Image"
        ></Image>
      </div>
    </footer>
  );
};

export default Footer;
