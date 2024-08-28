import Link from "next/link";
import { useTranslations } from "next-intl";

import Products from "@/app/[locale]/products/page";
import UserExample from "@/app/[locale]/user-example/page";
import WeTeam from "@/app/[locale]/we-team/page";
import Hero from "@/components/hero";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Hero />

      {/* 用户案例 */}
      <UserExample />

      {/* 我们的团队  */}

      <WeTeam />

      {/* 产品中心  */}

      <Products />
    </main>
  );
}
