import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { i18n, type Locale } from "../../../i18n-config";

import Header from "@/app/[lang]/components/header";
import Footer from "@/components/footer";
import ThemeProvider from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const metadata: Metadata = {
  title: "Yuhe International",
  description: "裕禾国际货运专注农机业务",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  console.log("params", params);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="z-[99999]">
            <div className="pointer-events-none fixed inset-4 z-[99999]"></div>
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
