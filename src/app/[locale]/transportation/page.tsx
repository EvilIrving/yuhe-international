"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import ServicesItem from "./services_item";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { transportationConfig } from "@/data.config";

export default function TransportationPage() {
  const services = transportationConfig.services;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="transportation"
      className="relative z-10 pt-32 dark:text-white"
    >
      <div className="container">
        <div className="mx-auto flex flex-1 gap-6 pb-20">
          <section className="w-1/2">
            {/* 介绍 */}
            <h3 className="mb-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
              业务介绍
            </h3>
            <div className="mx-auto w-2/3 text-lg">
              {transportationConfig.overview}
            </div>
          </section>

          <section className="w-1/2">
            <div className="py-6">
              <div className="opacity: 1; transform: none;">
                <div className="mx-auto text-center">
                  <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                    我们的承诺
                  </h3>

                  <p className="mx-auto w-2/3 text-lg leading-7">
                    裕禾船务深知国际物流的复杂与挑战，正如航海征程中每一次乘风破浪的冒险。我们始终坚持以客户为中心，致力于提供高效、安全、专业的物流解决方案。无论是跨越大洋的集装箱运输，还是特殊货物的细致处理，我们都以高度的责任心和精湛的服务确保每一单业务的成功。裕禾船务不仅是您可信赖的物流合作伙伴，更是您全球贸易之旅上的坚实后盾。我们坚守承诺，为您铺就通向世界的广阔航道。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 服务项目 */}
        <div className="mx-auto w-full">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: services.length }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className="h-[550px] w-full">
                    <CardContent className="size-full pt-6">
                      <ServicesItem item={services[index]} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
