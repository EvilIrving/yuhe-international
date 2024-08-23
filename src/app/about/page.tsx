import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import ContactUs from "@/components/contact-us";

export default function AboutUs() {
  return (
    <section id="about" className="pb-20 pt-[120px]">
      <div className="mx-auto px-20">
        <h1 className="text-4xl font-bold mb-10">关于我们</h1>
        <div className="mb-10">
          <AspectRatio ratio={29 / 9}>
            <Image
              src="/static/ocean.jpeg"
              fill
              alt="Image"
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <section className="mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">集装箱运输及多式联运</h2>
          <p className="text-lg leading-relaxed mb-6">
            裕禾船务的核心服务项目之一，业务区域涵盖整个非洲大陆、欧洲、地中海、南美、北美、中东波斯湾、印巴、东南亚、韩国等地区。公司先后与世界上90%以上的著名集装箱班轮公司有长期合作，并签有一系列运价协议；并且，借助于我们很早就开始自行设计开发并日臻完善的独立运价平台，为客户提供了非常全面的国际海运集装箱航线及相关港口运价、船期、航程等选择，为广大国际、国内客户的海上进出口运输提供了极大的便利，在国际货运代理业务市场上声名鹊起。
            同时，借助于遍布全世界的海外代理和合作伙伴，我们可以为客户提供各种DDU、DDP等业务，并打造了一整套经海运、铁路、公路、航空等多种运输方式优化组合使用的多式联运体系，可以满足客户对运输时间、运输费用等提出的特殊要求，提供量身定制的服务。
          </p>
          <h2 className="text-3xl font-bold mb-4">特种货物及危险品运输</h2>
          <p className="text-lg leading-relaxed mb-6">
            随着中国经济的快速发展以及与世界各国的经贸交流日趋频繁，越来越多的外贸企业响应我国提出的“一带一路”等重大国际经济政策，为各类超大、超重的机械类货物、各种危险品和化工品、各类冷藏货物的出口营造了快速发展的局面。
            在此背景下，裕禾船务积极打造了相关的公司政策，为各类特种货物和危化品运输提供更便利的运输方式、更优惠的运费和更高质量的服务！
            只要您的货物适合使用集装箱运输，我们都可以为之提供一系列的普柜、冷柜、和特种柜运输优化方案，为您量身定制！
            我们多次成功地为中国在伊朗、泰国、菲律宾、孟加拉国、安哥拉、加纳、津巴布韦等国家进行的大型石油管道、路桥、发电站建设项目进行了货物的集装箱运输，也曾多次受客户委托安全地将大批量、高危等级的危险品货物运往了欧洲、南非、拉美等多个地区的国家。
          </p>
        </section>
      </div>
      <ContactUs />
    </section>
  );
}
