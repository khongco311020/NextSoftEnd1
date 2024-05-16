import ActivitiesAo from "@/components/aos/aosactivity";
import Carousel from "@/components/news/newsCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Activities() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <div className="">
      
        <Image
          src="/bg.jpg"
          alt=""
          width={1200}
          height={250}
          className="relative w-full h-auto "
        />
        {/* <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div> */}

        {/* <h1 className="text-3xl font-bold text-white absolute z-10 top-10 left-10">Hoạt động</h1> */}
      </div>

      <div className="flex flex-col gap-5 py-14">
        <h1 className="text-3xl font-semibold text-center text-green-600">
          SkyNextSoft
        </h1>
        <p className="text-center w-3/6 m-auto pb-10">
          Là nơi mà nhân viên luôn được quan tâm sức khỏe, thỏa mái sáng tạo,
          khuyến khích đóng góp và pháp triển ý tưởng. Mục đích hướng tới đào
          tạo, phát triển nhân viên.
        </p>
        <div className="background py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-5">
              <ActivitiesAo/>
              <div className="col-span-1"data-aos="fade-left">
                <div className="">
                  <Image
                    src="/chaybo.jpg"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1" data-aos="fade-right">
                <div className="">
                  <Image
                    src="/dabong.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="col-span-1" data-aos="fade-left">
                <div className="flex container flex-col gap-5">
                  <h1 className="text-2xl text-bold text-green-600 pb-5">
                    CLB đá bóng
                  </h1>
                  <p>
                    Nhằm tăng cường sức khỏe cũng như gắn kết giữa các nhân viên
                    công ty hàng tuần SkyNextSoft sẽ có những trận bóng giao lưu
                  </p>
                  <p>
                    Đá bóng là môn thể thao đối kháng và đồng đội luôn mang lại
                    cho bạn cảm giác mạng mẽ mỗi khi ra sân và đặc biết là giải
                    lao sau khi ngồi làm việc 8 tiếng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col gap-5">
            <h1 className="text-bold text-3xl text-green-600 text-center">
              Happy Hour
            </h1>
            <p className="text-center w-3/6 m-auto">
              Khoảng thời gian nhân viên nghỉ giải lao ăn hoa quả là lúc mọi
              người tụ tập cùng nhau nói chuyện,trao đổi, thư gian đầu óc đặc
              biết là giúp đôi mắt được nghỉ ngơi sau quãng thời dài tập chung
              vào màn hình{" "}
            </p>
          </div>
        </div>
      </div>
      <Carousel/>
    </div>
  );
}
