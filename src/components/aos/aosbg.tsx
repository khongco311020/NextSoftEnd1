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
      once:true
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" pb-5 " >
      <Image
        src="/logo-removebg - Copy.png"
        alt=""
        width={300}
        height={250}
        className=" m-auto pt-5"
        data-aos="fade-right"
      />
      <h1 className="text-green-500 font-bold text-center text-5xl pb-5" data-aos="fade-left">
        SKYNEXTSOFT
      </h1>
      <p className="text-center text-sky-600 text-3xl pb-5 p-1" data-aos="fade-right">
        CODING THE FUTURE
      </p>
      <h1 className="text-green-500 font-bold text-center text-4xl" data-aos="fade-left">
        SMART - SPEED - STRONG - SECURE
      </h1>
    </div>
  );
}