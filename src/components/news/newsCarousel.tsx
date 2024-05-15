"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  //   Delay,
  // Mousewheel,
  Autoplay,
} from "swiper/modules";

const Carousel = () => {
  // useEffect(() => {
  //     const swiper = new Swiper('.swiper-container', {
  //         // options
  //     });
  // }, []);

  return (
    <div className="swiper-container  container">
      <h2 className="text-lg font-semibold text-green-600">Tin tức mới</h2>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        // scrollbar={{  }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        spaceBetween={30}
        slidesPerView={4}
        modules={[Pagination, Navigation, A11y, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // mousewheel={true}
        className="my-5"
      >
        <SwiperSlide>
          <Link
            href="https://www.24h.com.vn/thoi-trang-hi-tech/samsung-da-co-vu-khi-cuc-manh-cho-smartphone-cao-...55.html"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/vinsmart.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Động thái mới của Vingroup để tái cấu trúc công ty sản xuất điện
                thoại di động VinSmart
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="https://cafebiz.vn/kinh-doanh-qua-mang-het-thoi-tron-thue-176240508140519745.chn"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/ai.webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Tạo hành lang pháp lý cho ứng dụng trợ lý ảo phát triển
              </h3>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            href="https://cafebiz.vn/lo-hong-nghiem-trong-khien-hon-50000-may-chu-co-nguy-co-bi-tan-cong-17624...28.chn"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/taxi.webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Taxi điện mini đầu tiên tại Việt Nam tung ảnh ra quân: giá cước
                từ 8.000 đồng/km, thuê tự lái 450.000 đồng/ngày
              </h3>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            href="https://cafebiz.vn/vi-sao-he-thong-cua-bitcoin-chua-bao-gio-bi-hack-176240509133356291.chn"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/bitcoin.webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Vì sao hệ thống của Bitcoin chưa bao giờ bị hack
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="https://www.24h.com.vn/thoi-trang-hi-tech/iphone-16-chua-ra-mat-tin-don-ve-iphone-18-pro-da...34.html"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/vinfast.webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Hình ảnh đầu tiên của loạt xe VF 3 'bằng xương bằng thịt' tại
                nhà máy VinFast Hải Phòng
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
