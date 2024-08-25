import Link from "next/link";

import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

import UserExample from "@/app/[lang]/user-example/page";
import WeTeam from "@/app/[lang]/we-team/page";
import Hero from "@/components/hero";
import Products from "@/components/product";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Hero />
      <p className="py-5 text-center text-2xl text-green-400">
        {dictionary["server-component"].welcome}

        <Link href="/about">go to about page</Link>
      </p>
      {/* 用户案例 */}
      <UserExample />

      {/* 我们的团队  */}

      <WeTeam />

      {/* 产品中心  */}

      <Products />
    </main>
  );
}
