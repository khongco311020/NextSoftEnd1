import Carousel from "@/components/news/newsCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Activities() {
  const t = useTranslations("ActivitiesPage");

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
      </div>

      <div className="flex flex-col gap-5 py-14">
        <h1 className="text-3xl font-semibold text-center text-green-600">
          SkyNext Soft
        </h1>
        <p className="text-center w-3/6 m-auto pb-10">{t("description")}</p>
        <div className="background py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1" data-aos="fade-right">
                <div className="flex container flex-col gap-5">
                  <h1 className="text-2xl text-bold text-green-600 pb-5">
                    {t("running_club_title")}
                  </h1>
                  <p>{t("running_club_description1")}</p>
                  <p>{t("running_club_description2")}</p>
                </div>
              </div>
              <div className="col-span-1" data-aos="fade-left">
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
                    {t("soccer_club_title")}
                  </h1>
                  <p>{t("soccer_club_description1")}</p>
                  <p>{t("soccer_club_description2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container flex flex-col gap-5">
            <h1 className="text-bold text-3xl text-green-600 text-center">
              {t("happy_hour_title")}
            </h1>
            <p className="text-center w-3/6 m-auto">
              {t("happy_hour_description")}
            </p>
          </div>
        </div>
      </div>
      <div className="container pb-10">
        <h1 className="text-lg font-semibold text-green-600 py-5">Tin tức về công ty</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400">8-3-2024</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                Nhân ngày Quốc tế Phụ nữ công ty có tổ chức một bữa tiệc để chúc
                tốt đẹp nhất đến nửa kia của thế giới
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400">20-4-2024</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                Nhân viên của SkyNext Soft sẻ được nghỉ lễ từ ngày 30 tháng 4
                năm 2024 thứ 3 hết ngày 1 tháng 5 năm 2024 thứ 4. Công ty sẽ
                hoạt động trở lại bình thường vào ngày 2 tháng 5 năm 2024 thứ 5.
                Chúc mọi người có một kì nghỉ vui vẻ hạnh phúc bên gia đình
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400 ">18-4-2024</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                Ngày 18 tháng 4 năm 2024 nhân viên sẽ được nghỉ dịp Giỗ tổ Hùng
                Vương chúc mọi người có kì nghỉ lễ vui vẻ
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400 ">30-1-2024</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                Nhân viên SKyNext Soft được nghỉ lễ Tết Nguyên Đán từ ngày 8
                tháng 2 đến 14 tháng 2 năm 2024 ngày 15 tháng 2 sẽ quay trở lại
                làm việc bình thường. Chúc mọi người một năm mới bình an, an
                khang thịnh vượng
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
