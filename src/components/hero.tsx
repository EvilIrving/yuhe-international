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
                  我们的承诺
                </h2>

                <p className="text-body-color-2 mb-4 w-full text-lg font-medium leading-7 dark:text-white [&:not(:first-child)]:mt-6">
                  裕禾船务深知国际物流的复杂与挑战，正如航海征程中每一次乘风破浪的冒险。我们始终坚持以客户为中心，致力于提供高效、安全、专业的物流解决方案。无论是跨越大洋的集装箱运输，还是特殊货物的细致处理，我们都以高度的责任心和精湛的服务确保每一单业务的成功。裕禾船务不仅是您可信赖的物流合作伙伴，更是您全球贸易之旅上的坚实后盾。我们坚守承诺，为您铺就通向世界的广阔航道。
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
