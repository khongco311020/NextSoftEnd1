import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer/footer";

import HomeIconn from "@/components/home/homeIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyNextSoft",
  description: "SkyNext Soft WebSite",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen  mx-auto">
          <Header />
          <div className="flex-grow">{children}</div>
          <HomeIconn />

          <Footer />
        </div>
      </body>
    </html>
  );
}
