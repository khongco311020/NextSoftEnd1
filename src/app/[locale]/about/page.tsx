import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { MdOutlineSettingsPhone } from "react-icons/md";
import Googlemap from "./Googlemap";
import Carousel from "@/components/news/newsCarousel";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <Image
        src="/bg.jpg"
        alt=""
        width={1200}
        height={250}
        className="relative w-full  h-auto "
      />
      <div className="py-14 flex flex-col gap-5">
        <div className="container">
          <h1 className="text-center text-3xl font-semibold text-green-600 mb-8">
            {t("companyName")}
          </h1>
          <p className="text-center w-3/6 m-auto pb-10">
            {t("companyDescription")}
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/quymo.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("workplace")}</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/Japan.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("scale")}</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/edit-curves.svg" alt="" height={40} width={40} />
              </div>
              <p>{t("training")}</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.wrap}>
          <div className={styles.wrapcontainer}>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/TamNhin.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>{t("visionTitle")}</h2>
                <p className={styles.wrapp}>{t("visionDescription")}</p>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/SuMenh.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>{t("missionTitle")}</h2>
                <div className={styles.wrapp}>
                  <p>{t("missionDescription")}</p>
                </div>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image
                  src="/GiaTriCotLoi.jpg"
                  alt=""
                  width={334}
                  height={175}
                />
                <h2 className={styles.wraph2}>{t("coreValuesTitle")}</h2>
                <div className={styles.wrapp}>
                  <p>{t("coreValuesDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className={styles.achive}>
          <div className={styles.achivecontainer}>
            <div className={styles.achivecol}>
              <Image
                src="/ChungChi.jpg"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={styles.achivecol}>
              <div className={styles.achivecontent}>
                <h2>{t("achievementTitle")}</h2>
                <p>{t("achievementDescription")}</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container pt-10">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="">
                <h2 className=" text-green-600 text-2xl pb-5">
                  {t("findUsTitle")}
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <IoLocationOutline className="text-green-600 text-xl" />
                    <p>{t("address")}</p>
                  </div>
                  <a
                    href="tel:038 865 6026"
                    className="flex items-center gap-3"
                  >
                    <MdOutlineSettingsPhone className="text-green-600 text-xl" />
                    <p>+84 366 888 666</p>
                  </a>
                  <a
                    href="mailto:nguyenthien252025@gmail.com"
                    className="flex items-center gap-3"
                  >
                    <CgMail className="text-green-600 text-xl" />
                    <p>skynextsoft@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="">{<Googlemap />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
