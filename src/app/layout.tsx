import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuhe International",
  description: "裕禾国际货运专注农机业务",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
