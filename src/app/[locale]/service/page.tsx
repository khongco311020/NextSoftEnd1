import Carousel from "@/components/news/newsCarousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Service = () => {
  const t = useTranslations("ServicePage");

  return (
    <div className="">
      <Image
        src="/bg.jpg"
        alt=""
        width={1200}
        height={250}
        className="relative w-full  h-auto "
      />
      <div className="services px-5 py-10 container mx-auto flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold text-green-600 mb-8">
          {t("title")}
        </h1>
        <section id="thiet-ke-website">
          <h2 className=" border-b pb-1 text-2xl text-bold text-green-600 mb-6">
            {t("web_design")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t("web_design_description")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("web_design_item1")}</li>
            <li>{t("web_design_item2")}</li>
            <li>{t("web_design_item3")}</li>
            <li>{t("web_design_item4")}</li>
          </ul>
        </section>
        <section id="thiet-ke-he-thong">
          <h2 className="border-b pb-1 text-2xl text-bold text-green-600 mb-6">
            {t("system_design")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t("system_design_description")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("system_design_item1")}</li>
            <li>{t("system_design_item2")}</li>
            <li>{t("system_design_item3")}</li>
            <li>{t("system_design_item4")}</li>
          </ul>
        </section>
        <section id="giai-phap-cntt">
          <h2 className="border-b pb-1 text-2xl text-bold text-green-600 mb-6">
            {t("it_solution")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t("it_solution_description")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("it_solution_item1")}</li>
            <li>{t("it_solution_item2")}</li>
            <li>{t("it_solution_item3")}</li>
            <li>{t("it_solution_item4")}</li>
          </ul>
        </section>
        <section id="thiet-ke-app-mobile">
          <h2 className="border-b pb-1 text-2xl text-bold text-green-600 mb-6">
            {t("mobile_app_design")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t("mobile_app_design_description")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("mobile_app_design_item1")}</li>
            <li>{t("mobile_app_design_item2")}</li>
            <li>{t("mobile_app_design_item3")}</li>
            <li>{t("mobile_app_design_item4")}</li>
          </ul>
        </section>
      </div>
      <Carousel/>
    </div>
  );
};

export default Service;
