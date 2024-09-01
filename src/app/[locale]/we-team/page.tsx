import Image from "next/image";

import Gallerys from "@/components/gallery";
export default function WeTeam() {
  return (
    <section id="we-team" className="relative z-10 pb-28">
      <div className="container">
        <div className="w-full">
          <div className="fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <h3 className="mb-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
              我们的团队
            </h3>
            <p className="text-sm font-medium text-gray-400 dark:text-white">
              服务团队是一支技术精湛、专业负责的工程师团队。他们经过徐工集团的严格培训和考核，具备丰富的技术知识和实践经验。
            </p>
          </div>
          <div className="-mx-4 flex justify-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
              <Gallerys />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <Image
          src="static/timeline.svg"
          width={435}
          height={959}
          alt="timeline"
        />
      </div>
    </section>
  );
}
