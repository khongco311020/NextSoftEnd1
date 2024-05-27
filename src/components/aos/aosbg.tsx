"use client";
import AOS from "aos";
import Image from "next/image";

import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AosBg() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div >
        <img src="/logo.png" alt="logo" className="w-36 m-auto pt-20 pb-5"   data-aos="fade-left"/>
      </div>
      <div className=" pb-5  w-4/5 m-auto flex flex-col content-center" data-aos="fade-right ">   
      <h1
        className="text-green-500 font-bold text-center text-4xl pb-4"
        
      >
        SKYNEXT SOFT
      </h1>
      <p
        className="text-center text-sky-600 text-2xl pb-4 p-1"
        
      >
        CODING THE FUTURE
      </p>
      <h1
        className="text-green-500 font-bold text-center text-3xl"
        // data-aos="fade-left"
      >
        SMART - SPEED - STRONG - SECURE
      </h1>
    </div>
    </div>
    
  );
}
