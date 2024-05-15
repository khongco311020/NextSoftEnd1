import { useTranslations } from "next-intl";
import styles from "./about.module.css";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import Googlemap from "./Googlemap";

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
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{t("companyName")}</h1>
          <p className={styles.desc}>{t("companyDescription")}</p>
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
        <div className={styles.wrap}>
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
        </div>

        <div className={styles.achive}>
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
        </div>

        <div className={styles.itemmap}>
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>{t("findUsTitle")}</h2>
            <div className={styles.textAddress}>
              <IoLocationOutline />
              <p>{t("address")}</p>
            </div>
          </div>
          <div className={styles.imgContainer}>{<Googlemap />}</div>
        </div>
      </div>
    </div>
  );
}
