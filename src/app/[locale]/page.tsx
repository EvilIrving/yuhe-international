import Link from "next/link";
import { useTranslations } from "next-intl";

import UserExample from "@/app/[locale]/user-example/page";
import WeTeam from "@/app/[locale]/we-team/page";
import Hero from "@/components/hero";
import Products from "@/components/product";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Hero />
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("title")}
      </h2>
      <Link href="/about">go to about page</Link>
      {/* 用户案例 */}
      <UserExample />

      {/* 我们的团队  */}

      <WeTeam />

      {/* 产品中心  */}

      <Products />
    </main>
  );
}
