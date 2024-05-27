import Carousel from "@/components/news/newsCarousel";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import RunningClub from "./RunningClub";
import SoccerClub from "./SoccerClub";
import HappyHour from "./HappyHour";
import Link from "next/link";

export default function Activities() {
  const t = useTranslations("ActivitiesPage");
  const locale = useLocale();

  return (
    <div>
      <div className="">
        <Image
          src="/bg.jpg"
          alt=""
          width={1200}
          height={250}
          className="relative w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-5 py-14">
        <h1 className="text-3xl font-semibold text-center text-green-600  max-md:w-4/5 m-auto">
          SkyNext Soft
        </h1>
        <p className="text-center w-3/6 m-auto pb-10  max-md:w-4/5">{t("description")}</p>
        <div className="background py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
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
                    src="/access/activities/chaybo.jpg"
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
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              <div className="col-span-1" data-aos="fade-right">
                <div className="">
                  <Image
                    src="/access/activities/dabong.webp"
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
            <h1 className="text-bold text-3xl text-green-600 text-center max-md:w-4/5 m-auto">
              {t("happy_hour_title")}
            </h1>
            <p className="text-center w-3/6 m-auto max-md:w-4/5 m-auto">
              {t("happy_hour_description")}
            </p>
          </div>
        </div>
        <Carousel />
      </div>
      <div className="container pb-10">
        <h1 className="text-lg font-semibold text-green-600 py-5">
          {t("news_title")}
        </h1>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400">{t("date1")}</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                {t("description1")}
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400">{t("date2")}</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                {t("description2")}
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400 ">{t("date3")}</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                {t("description3")}
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-3">
              <span className="w-1/5 text-slate-400 ">{t("date4")}</span>
              <p className="w-3/4 hover:text-green-600 cursor-pointer">
                {t("description4")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
