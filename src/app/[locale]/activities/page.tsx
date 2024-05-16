import ActivitiesAo from "@/components/aos/aosactivity";
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
          {t("title")}
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
            <ActivitiesAo/>
            <p className="text-center w-3/6 m-auto">
              {t("happy_hour_description")}
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
