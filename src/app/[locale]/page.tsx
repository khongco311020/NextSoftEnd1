import { useLocale, useTranslations } from "next-intl";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiSmart, GiStrong } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import AosBg from "@/components/aos/aosbg";
import Carousel from "@/components/news/newsCarousel";

export default function Home() {
  const t = useTranslations("IndexPage");
  const h = useTranslations("Home");
  const locale = useLocale();

  return (
    <div className={styles.wrap}>
      <div className=" h-5/6 bg-slate-300">
        <AosBg />
      </div>

      <div className="py-14 ">
        <h1 className="pb-4 text-center text-3xl font-semibold text-slate-800 w-4/5 m-auto">
          {h("value")}
        </h1>
        <p className="text-center pb-14 text-lg font-light italic w-4/5 m-auto">
          {h("contentValue")}
        </p>
        <div className="container " data-aos="fade-down">
          <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 ">
            <div className="col-span-1 flex items-center flex-col gap-3 shadow-lg p-5 py-9 bg-white hover:shadow-2xl ">
              <div className="text-6xl text-green-600">
                <GiSmart />
              </div>
              <h2 className=" text-lg font-semibold">Smart</h2>
              <span className="text-justify p-5 ">{h("smart")}</span>
            </div>
            <div className="col-span-1 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl ">
              <div className="text-6xl text-green-600">
                <IoSpeedometer />
              </div>
              <h2 className=" text-lg font-semibold">Speed</h2>
              <p className="text-justify p-5">{h("speed")}</p>
            </div>
            <div className="col-span-1 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl ">
              <div className="text-6xl text-green-600">
                <GiStrong />
              </div>
              <h2 className=" text-lg font-semibold ">Strong</h2>
              <p className="text-justify p-5">{h("strong")}</p>
            </div>
            <div className="col-span-1 flex items-center flex-col gap-3 shadow-lg p-5 py-9  bg-white hover:shadow-2xl ">
              <div className="text-6xl text-green-600">
                <GrSecure />
              </div>
              <h2 className=" text-lg font-semibold">Secure</h2>
              <p className="text-justify p-5">{h("secure")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background py-14">
        <div className="container">
          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
            <div className="col-span-1">
              <div>
                <h1 className="pb-3  text-3xl font-semibold text-green-600 ">
                  SkyNext Soft
                </h1>
                <h2 className=" pb-5 text-lg font-light italic">
                  {h("bring")}
                </h2>
                <ul className=" ps-10 mb-5">
                  <li
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="border-b mb-2 w-2/4 cursor-pointer hover:text-neutral-300"
                  >
                    <Link href={`/${locale}/service/#thiet-ke-website`}>
                      {h("website")}
                    </Link>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="border-b mb-2 cursor-pointer w-2/4 hover:text-neutral-300"
                  >
                    <Link href={`/${locale}/service/#thiet-ke-he-thong`}>
                      {h("system")}
                    </Link>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="border-b mb-2 cursor-pointer w-2/4 hover:text-neutral-300"
                  >
                    <Link href={`/${locale}/service/#giai-phap-cntt`}>
                      {h("solutions")}
                    </Link>
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-delay="400"
                    className="border-b mb-2 cursor-pointer w-2/4 hover:text-neutral-300"
                  >
                    <Link href={`/${locale}/service/#thiet-ke-app-mobile`}>
                      {h("mobile")}
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                href={`/${locale}/service`}
                className="px-5 py-3 font-semibold text-white bg-green-600 rounded-3xl border block w-48 hover:opacity-90"
              >
                {h("more")}
              </Link>
            </div>
            <div className="col-span-1" data-aos="fade-left">
              <div>
                <Image
                  src="/software.avif"
                  alt=""
                  width={1000}
                  height={1000}
                  className="imagebgg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
