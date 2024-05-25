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
        <h1 className="text-3xl font-semibold text-center text-green-600">
          {t("title")}
        </h1>
        <p className="text-center w-3/6 m-auto pb-10">{t("description")}</p>

        <RunningClub />
        <SoccerClub />
        <HappyHour />

        <div className="container pb-10">
          <h1 className="text-lg font-semibold text-green-600 py-5">
            {t("news_title")}
          </h1>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="col-span-1">
                <div className="flex gap-3">
                  <span className="w-1/5 text-slate-400">
                    {t(`date${index}`)}
                  </span>
                  <Link
                    href={`/${locale}/activities/${index}`}
                    className="w-3/4 hover:text-green-600 cursor-pointer"
                  >
                    {t(`description${index}`)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
