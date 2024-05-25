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
    <div className="w-screen">
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
        breakpoints={{
          300:{
            slidesPerView: 1,
            spaceBetween: 20,
          },  

          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1228:{
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        
        // mousewheel={true}
        className="my-5 "
      >
        <SwiperSlide>
          <Link
            href="https://vnexpress.net/nguy-co-bi-danh-cap-giong-noi-4747749.html"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/access/news/giongnoi.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Nguy cơ bị 'đánh cắp' giọng nói
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
                  src="/access/news/ai.webp"
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
            href="https://vietnamnet.vn/chieu-nay-bill-gates-an-do-se-gap-go-gioi-cong-nghe-viet-nam-2282519.html"
            target="_blank"
          >
            <div>
              <div>
                <Image
                  src="/access/news/ando.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Chiều nay, “Bill Gates Ấn Độ” sẽ gặp gỡ giới công nghệ Việt Nam
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
                  src="/access/news/bitcoin.webp"
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
                  src="/access/news/shoppee.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="image"
                />
              </div>
              <h3 className="pt-4 font-medium hover:text-neutral-300">
                Google tung 'vũ khí' AI mới, Shopee lập kỷ lục doanh thu
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    
  );
};
export default Carousel;
