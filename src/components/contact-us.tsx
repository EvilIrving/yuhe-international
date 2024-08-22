import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-light-bg py-[120px] dark:bg-[#14102C]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Side: Contact Information */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="opacity-100 transform-none">
              <div
                className="wow fadeInUp mb-16 max-w-[350px]"
                data-wow-delay="0s"
              >
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                  Contact Us
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  Let's talk about your problem.
                </h2>
              </div>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 sm:w-1/2">
                <div className="opacity-100 transform-none">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      401 Broadway, 24th Floor, Orchard Cloud View, London
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="opacity-100 transform-none">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Email Address
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      info@yourdomain.com
                    </p>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      contact@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="opacity-100 transform-none">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Phone Number
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      +990 846 73644
                    </p>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      +550 9475 4543
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 sm:w-1/2">
                <div className="opacity-100 transform-none">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      Tell us your problem we will get back to you ASAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full px-4 lg:w-5/12">
            <div className="opacity-100 transform-none">
              <div className="sm:14 wow fadeInUp rounded-md bg-white px-8 py-12 dark:bg-dark">
                <h2 className="mb-8 text-2xl font-bold text-dark dark:text-white sm:text-[34px] lg:text-2xl xl:text-[34px]">
                  Send us a Message
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Full Name*
                    </label>
                    <input
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 bg-transparent px-5 py-3 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5"
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <input
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 bg-transparent px-5 py-3 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5"
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message*
                    </label>
                    <textarea
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 bg-transparent px-5 py-3 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="message"
                      rows={6}
                      placeholder="Type your message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      className="w-full rounded-full bg-primary p-3 text-center text-base font-semibold text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                      type="submit"
                    >
                      Send Message
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
