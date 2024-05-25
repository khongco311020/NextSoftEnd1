
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer/footer";

import HomeIconn from "@/components/home/homeIcon";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

      </head>
      <body className={inter.className}>
        <div className="flex flex-col  w-full  ">
          <Header/>         
          <div className="flex-grow">{children}</div>
          <HomeIconn/>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
