import { useLocale, useTranslations } from "next-intl";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneLike } from "react-icons/ai";
import { GiMightySpanner } from "react-icons/gi";
import { SiEsotericsoftware } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
export default function Home() {
  const t = useTranslations("IndexPage");
  const locale = useLocale();
  

  return (
    <div className={styles.wrap}>
      <Image
        src="/bg.png"
        alt=""
        width={1200}
        height={500}
        className="relative w-full imagebg h-auto "
      />
      <div className=" pb-5 absolute top-40 left-40" data-aos="fade-down">
        <p className="text-center text-sky-600 text-4xl pb-5">
          CODING THE FUTURE
        </p>
        <h1 className="text-green-500 font-bold text-center text-5xl">
          SMART - SPEED - STRONG - SECURE
        </h1>
      </div>
      <div className={styles.wrapNoneFlex}>
        <div className={styles.containerCl}>
          <Link href={`${locale}/about`}>
            <div className={styles.tag}>
              <p>Smart</p>
              <div className={styles.icon}>
                <AiTwotoneLike />
              </div>
            </div>
          </Link>
          <Link href={`${locale}/about`}>
            <div className={styles.tag}>
              <p>Speed</p>
              <div className={styles.icon}>
                <GiMightySpanner />
              </div>
            </div>
          </Link>
          <Link href={`${locale}/about`}>
            <div className={styles.tag}>
              <p>Strong</p>
              <div className={styles.icon}>
                <SiEsotericsoftware />
              </div>
            </div>
          </Link>
          <Link href={`${locale}/about`}>
            <div className={styles.tag}>
              <p>Secure</p>
              <div className={styles.icon}>
                <FaComputer />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
