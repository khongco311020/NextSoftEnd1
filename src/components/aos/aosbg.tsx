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
    <div className=" pb-5 pt-2 ">
      <Image
        src="/logo-removebg - Copy.png"
        alt=""
        width={250}
        height={190}
        className=" m-auto pt-8 w-2/12 h-auto"
        data-aos="fade-right"
      />
      <h1
        className="text-green-500 font-bold text-center text-4xl pb-4"
        data-aos="fade-left"
      >
        SKYNEXT SOFT
      </h1>
      <p
        className="text-center text-sky-600 text-2xl pb-4 p-1"
        data-aos="fade-right"
      >
        CODING THE FUTURE
      </p>
      <h1
        className="text-green-500 font-bold text-center text-3xl"
        data-aos="fade-left"
      >
        SMART - SPEED - STRONG - SECURE
      </h1>
    </div>
  );
}
