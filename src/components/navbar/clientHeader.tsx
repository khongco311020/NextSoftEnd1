"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Console } from "console";
import { url } from "inspector";
import { useActionData, useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";
export default function ClientHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSticky, setIsSticky] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const url = usePathname();

  useEffect(()=>{

    if(url == "/vi") {
      setIsChange(true)
    }
    else if(url == '/en') {
      setIsChange(true)
    }
    else{
      setIsChange(false)
    }
    console.log(url)
    console.log(isChange)
      
  },[url])
  console.log(url)
    console.log(isChange)


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
      className={` fixed w-screen z-10 text-white px-10 ${
        isSticky ? "bg-white shadow-lg !text-black" : ""
      }`}
    >
      <header className="flex items-center justify-between h-20 ">
        <nav className="flex items-center justify-between w-full ">
          <Link href="/" className="flex items-center flex-wrap text-2xl">
            <Image
              src="/logo-removebg - Copy.png"
              alt=""
              width={30}
              height={40}
              className="imglogo"
            />
            <h2
              className={` font-semibold ${isChange ? "hidden" : ""} ${isSticky ? "text-green-600 !block" : ""}`}
            >
              SkyNext Soft
            </h2>
          </Link>
          {children}
        </nav>
      </header>
    </div>
  );
}
