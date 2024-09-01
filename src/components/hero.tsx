import Image from "next/image";
const Hero = () => {
  return (
    <section id="home" className="relative z-10 pb-28 pt-48">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="opacity: 1; transform: none;">
              <div className="mx-auto max-w-[1000px] text-center">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  YUHE 裕禾
                </h2>

                <p className="text-body-color-2 mb-4 w-full text-lg font-medium leading-7 dark:text-white [&:not(:first-child)]:mt-6">
                  加纳YUHE公司成立于2017年，办公室位于北部城市Tamale。是一家从事工程建筑、工程机械进口、农业机械进口、网站建设以及国际货物运输的集团公司。本公司重视客户是上帝的经营理念，以诚信为基本服务准则。通过全面的产品库和强大的开发能力，为客户提供价格低廉、品质上乘的相关产品和运输服务。有任何需求请联系我们，我们一定会提供优质的服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="to-transparent absolute left-0 top-0 -z-10 size-full bg-gradient-to-b from-primary opacity-20"></div>
      <Image
        className="pointer-events-none absolute left-0 top-0 -z-10 select-none"
        src="/static/hero-shape-1.svg"
        width={411}
        height={276}
        alt="Image"
      />
      <Image
        className="pointer-events-none absolute right-0 top-0 -z-10 select-none"
        src="/static/hero-shape-2.svg"
        width={820}
        height={692}
        alt="Image"
      />
    </section>
  );
};
export default Hero;
