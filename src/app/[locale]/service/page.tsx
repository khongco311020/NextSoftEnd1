import Carousel from "@/components/news/newsCarousel";

import { useTranslations } from "next-intl";
import Image from "next/image";

const Service = () => {
  const t = useTranslations("ServicePage");
  

  const servicesData = [
    {
      id: "thiet-ke-website",
      title: t("web_design"),
      description: t("web_design_description"),
      items: [
        t("web_design_item1"),
        t("web_design_item2"),
        t("web_design_item3"),
        t("web_design_item4"),
        t("web_design_item5"),
        t("web_design_item6"),
      ],
    },
    {
      id: "thiet-ke-he-thong",
      title: t("system_design"),
      description: t("system_design_description"),
      items: [
        t("system_design_item1"),
        t("system_design_item2"),
        t("system_design_item3"),
        t("system_design_item4"),
        t("system_design_item5"),
        t("system_design_item6"),
      ],
    },
    {
      id: "giai-phap-cntt",
      title: t("it_solution"),
      description: t("it_solution_description"),
      items: [
        t("it_solution_item1"),
        t("it_solution_item2"),
        t("it_solution_item3"),
        t("it_solution_item4"),
        t("it_solution_item5"),
      ],
    },
    {
      id: "thiet-ke-app-mobile",
      title: t("mobile_app_design"),
      description: t("mobile_app_design_description"),
      items: [
        t("mobile_app_design_item1"),
        t("mobile_app_design_item2"),
        t("mobile_app_design_item3"),
        t("mobile_app_design_item4"),
        t("mobile_app_design_item5"),
        t("mobile_app_design_item6"),
      ],
    },
  ];

  return (
    <div className="">
      
      <Image
        src="/bg.jpg"
        alt=""
        width={1200}
        height={250}
        className="relative w-full h-auto"
      />
      <div className="services px-5 py-10 container mx-auto flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold text-green-600 mb-8">
          {t("title")}
        </h1>
        {servicesData.map((service) => (
          <section key={service.id} id={service.id}>
            <h2 className="border-b pb-1 text-2xl font-bold text-green-600 mb-6">
              {service.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {service.description}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {service.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default Service;
