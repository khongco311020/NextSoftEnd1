"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import React from "react";
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
    <div className=" pb-5 absolute top-40 left-40" data-aos="fade-down">
      <p className="text-center text-sky-600 text-4xl pb-5">
        CODING THE FUTURE
      </p>
      <h1 className="text-green-500 font-bold text-center text-5xl">
        SMART - SPEED - STRONG - SECURE
      </h1>
    </div>
  );
}
