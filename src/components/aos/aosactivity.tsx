"use client";
import AOS from "aos";
import Image from "next/image";

import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ActivitiesAo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="" >
          <div className="container flex flex-col gap-5">
            <p className="text-bold text-3xl text-green-600 text-center">
              Happy Hour
            </p>
            
          </div>
        </div>
  );
    
}
