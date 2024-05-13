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
  Mousewheel,
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
      <h2 className="text-lg font-semibold">Tin tức mới</h2>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        // scrollbar={{  }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        spaceBetween={30}
        slidesPerView={4}
        modules={[Pagination, Navigation, A11y, Mousewheel, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        mousewheel={true}
        className="my-5"
      >
        <SwiperSlide>
          <Link href="https://www.24h.com.vn/thoi-trang-hi-tech/samsung-da-co-vu-khi-cuc-manh-cho-smartphone-cao-...55.html">
            <div>
              <div>
                <Image
                  src="/samsung.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Samsung đã có "vũ khí" cực mạnh cho smartphone cao cấp
              </h3>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="https://cafebiz.vn/kinh-doanh-qua-mang-het-thoi-tron-thue-176240508140519745.chn">
            <div>
              <div>
                <Image
                  src="/troliai.webp"
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
          <Link href="https://cafebiz.vn/lo-hong-nghiem-trong-khien-hon-50000-may-chu-co-nguy-co-bi-tan-cong-17624...28.chn">
            <div>
              <div>
                <Image
                  src="/lohong.webp"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Lỗ hổng nghiêm trọng khiến hơn 50.000 máy chủ có nguy cơ bị tấn
                công
              </h3>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="https://cafebiz.vn/vi-sao-he-thong-cua-bitcoin-chua-bao-gio-bi-hack-176240509133356291.chn">
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
          <Link href="https://www.24h.com.vn/thoi-trang-hi-tech/iphone-16-chua-ra-mat-tin-don-ve-iphone-18-pro-da...34.html">
            <div>
              <div>
                <Image
                  src="/iphone16.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                iPhone 16 chưa ra mắt, tin đồn về iPhone 18 Pro đã xuất hiện
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Carousel;
