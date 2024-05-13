"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function ClientHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` fixed w-full z-10 text-white px-10 ${
        isSticky ? "bg-white shadow-lg !text-black" : ""
      }`}
    >
      <header className="flex items-center justify-between h-20">
        <nav className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center flex-wrap text-2xl">
            <Image
              src="/logo-removebg - Copy.png"
              alt=""
              width={30}
              height={40}
              className="imglogo"
            />
            <h2
              className={` font-semibold ${isSticky ? "text-green-700" : ""}`}
            >
              SkyNextSoft
            </h2>
          </Link>
          {children}
        </nav>
      </header>
    </div>
  );
}
