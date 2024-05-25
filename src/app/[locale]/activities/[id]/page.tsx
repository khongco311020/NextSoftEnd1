"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function ActivityDetail() {
  const { id } = useParams();
  const t = useTranslations("ActivitiesPage");

  return (
    <div className="container">
      <h1 className="text-lg font-semibold text-green-600 py-5">
        {t("news_title")}
      </h1>
      <div>
        <span className="text-slate-400">{t(`date${id}`)}</span>
        <p>{t(`description${id}`)}</p>
      </div>
    </div>
  );
}
