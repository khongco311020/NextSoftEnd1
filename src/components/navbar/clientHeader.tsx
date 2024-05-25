"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import  {useRouter}  from 'next/navigation';


import { usePathname} from "next/navigation";
import { Hash } from "crypto";
import { url } from "inspector";
import { useSearchParams } from "next/navigation";

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
  },[url])

   
  
    

   



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
      className={` fixed w-screen z-10 text-white  ${
        isSticky ? "bg-white shadow-lg !text-black" : ""
      }`}
    >
      <header className="flex items-center justify-between h-20 ">
        <nav className="flex items-center justify-between w-full ">
          <Link href="/" className="flex items-center flex-wrap text-2xl pl-10 max-lg:text-xl max-lg:pl-4">
            <Image
              src="/logo-removebg - Copy.png"
              alt=""
              width={30}
              height={40}
              className="imglogo max-lg:w-10"
            />
            <h2
              className={` font-semibold  ${isChange ? "hidden" : ""} ${isSticky ? "text-green-600 !block" : ""}`}
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
