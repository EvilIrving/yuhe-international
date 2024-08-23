import Hero from "@/components/hero";
import UserExample from "@/app/user-example/page";
import WeTeam from "@/app/we-team/page";
import Products from "@/components/product";
export default function Home() {
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
