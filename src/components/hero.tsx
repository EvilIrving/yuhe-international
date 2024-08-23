import Image from "next/image";
const Hero = () => {
  return (
    <section id="home" className="relative z-10 pb-28 pt-48">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="opacity: 1; transform: none;">
              <div className="mx-auto max-w-[720px] text-center">
                <h2 className="scroll-m-20   pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  The People of the Kingdom
                </h2>

                <p className="leading-7 [&:not(:first-child)]:mt-6 mx-auto mb-4 max-w-[620px] text-lg font-medium text-body-color-2 dark:text-white">
                  The king, seeing how much happier his subjects were, realized
                  the error of his ways and repealed the joke tax.
                </p>
              </div>

              {/* 轮播图 */}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20 bg-gradient-to-b from-primary to-transparent"></div>
      <Image
        className="absolute left-0 top-0 -z-10 pointer-events-none select-none"
        src="/static/hero-shape-1.svg"
        width={411}
        height={276}
        alt="Image"
      />
      <Image
        className="absolute right-0 top-0 -z-10 pointer-events-none select-none"
        src="/static/hero-shape-2.svg"
        width={820}
        height={692}
        alt="Image"
      />
    </section>
  );
};
export default Hero;
