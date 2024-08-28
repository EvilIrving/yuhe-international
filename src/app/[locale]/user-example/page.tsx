"use client";
import { describe } from "node:test";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import UserExampleItem from "./UserExampleItem";

export default function UserExample() {
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

  const UserExamples = [
    {
      src: "/images/user-example/example1.jpg",
      desc: "我们在中国有这么多机器",
      title: "挖掘机",
    },
    {
      src: "/images/user-example/example2.jpg",
      desc: "我们在中国有这么多机器",
      title: "收割机",
    },
    {
      src: "/images/user-example/example3.jpg",
      desc: "我们在中国有这么多机器",
      title: " 耕地机",
    },
  ];

  return (
    <section id="user-example" className="relative z-10 pb-28">
      <div className="container">
        <h3 className="mb-8 scroll-m-20 text-center text-2xl font-semibold tracking-tight">
          客户案例
        </h3>
        <div className="mx-auto w-3/4">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {Array.from({ length: UserExamples.length }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className="h-[450px] w-full">
                    <CardContent className="size-full pt-6">
                      <UserExampleItem item={UserExamples[index]} />
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
