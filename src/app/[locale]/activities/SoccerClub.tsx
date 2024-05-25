import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SoccerClub() {
  const t = useTranslations("ActivitiesPage");
  return (
    <div className="background py-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-5">
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
  );
}
