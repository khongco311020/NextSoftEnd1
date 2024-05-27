import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/header";
import Footer from "@/components/footer/footer";

import HomeIconn from "@/components/home/homeIcon";
import { NextIntlClientProvider, useMessages } from "next-intl";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkyNextSoft",
  description: "SkyNext Soft WebSite",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen  mx-auto">
            <Header />
            <div className="flex-grow">{children}</div>
            <HomeIconn />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
