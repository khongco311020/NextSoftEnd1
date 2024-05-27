import { useTranslations } from "next-intl";

export default function HappyHour() {
  const t = useTranslations("ActivitiesPage");
  return (
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
  );
}
