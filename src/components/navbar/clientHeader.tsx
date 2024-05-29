"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ClientHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const url = usePathname();

  useEffect(() => {
    if (url == "/vi") {
      setIsChange(true);
    } else if (url == "/en") {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  }, [url]);
  console.log(url);
  console.log(isChange);

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
      className={` w-full fixed  z-10 text-white  ${
        isSticky ? "bg-white shadow-lg !text-black" : ""
      }`}
    >
      <nav className="flex items-center justify-between w-full  h-20">
        <Link
          href="/"
          className="flex items-center flex-wrap text-2xl pl-10  max-lg:pl-4"
        >
          <Image
            src="/logo-removebg - Copy.png"
            alt=""
            width={30}
            height={40}
            className="imglogo max-lg:w-10"
          />
          <h2 className={` font-semibold ${isSticky ? "text-green-600" : ""}`}>
            SkyNext Soft
          </h2>
        </Link>
        {children}
      </nav>
    </div>
  );
}
