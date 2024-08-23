import React from "react";
import Link from "next/link";
const ContactUs: React.FC = () => {
  return (
    <section className="bg-light-bg py-[120px] dark:bg-[#14102C]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Side: Contact Information */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="transform-none opacity-100">
              <div
                className="wow fadeInUp mb-16 max-w-[350px]"
                data-wow-delay="0s"
              >
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                  联系我们
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  您希望了解任何问题都可以联系我们
                </h2>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2">
                <div className="transform-none opacity-100">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">
                      办公地址
                    </h3>
                    <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
                      Obuasi, Ashanti Region, Ghana
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="transform-none opacity-100">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">
                      Email
                    </h3>
                    <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
                      dong.yy1916@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="transform-none opacity-100">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">
                      联系电话：
                    </h3>
                    <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
                      +233 594 291436
                    </p>
                    <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
                      +233 540 125194
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="transform-none opacity-100">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="text-dark mb-4 text-lg font-semibold dark:text-white">
                      先添加我们的WhatsApp
                    </h3>
                    <p className="text-body-color-2 dark:text-body-color text-base font-medium leading-loose">
                      <Link href="https://wa.me/233540125194">
                        +233540125194
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="transform-none opacity-100">
              <div className="sm:14 wow fadeInUp dark:bg-dark rounded-md bg-white px-8 py-12">
                <h2 className="text-dark mb-8 text-2xl font-bold dark:text-white sm:text-[34px] lg:text-2xl xl:text-[34px]">
                  给我们发消息
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      怎么称呼*
                    </label>
                    <input
                      className="text-body-color w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none focus:border-primary dark:border-[#E9E9E9]/50 dark:bg-white/5"
                      type="text"
                      id="name"
                      placeholder="请填写您的名字"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      className="text-dark mb-2 block text-sm font-medium dark:text-white"
                      htmlFor="email"
                    >
                      您的邮箱*
                    </label>
                    <input
                      className="text-body-color w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none focus:border-primary dark:border-[#E9E9E9]/50 dark:bg-white/5"
                      type="email"
                      id="email"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="message"
                    >
                      您想咨询什么问题*
                    </label>
                    <textarea
                      className="text-body-color w-full rounded-md border border-[#E9E9E9]/50 bg-transparent px-5 py-3 text-base font-medium outline-none focus:border-primary dark:border-[#E9E9E9]/50 dark:bg-white/5"
                      id="message"
                      rows={6}
                      placeholder="请输入您的问题"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="w-full rounded-full bg-primary p-3 text-center text-base font-semibold text-white hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                      type="submit"
                    >
                      发送给我们
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
