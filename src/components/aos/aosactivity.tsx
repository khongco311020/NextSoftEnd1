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
          once:true
        });
        AOS.refresh();
      }, []);

      return(
        <div className="col-span-1" data-aos="fade-right">
                <div className="flex container flex-col gap-5">
                  <h1 className="text-2xl text-bold text-green-600 pb-5">
                    CLB Chạy bộ
                  </h1>
                  <p>
                    Nhằm tăng cường sức khỏe nhân viên SkyNextSoft luôn khuyến
                    khích mọi người tập thể dục hàng ngày
                  </p>
                  <p>
                    Chạy bộ hay đạp xe mà những môn thể thao mà công ty đưa ra
                    giúp mọi người hòa mình với thiên nhiên, sáng tạo ý tưởng
                  </p>
                </div>
              </div>
      )
}