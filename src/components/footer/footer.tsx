import { useTranslations } from "next-intl";
import { MdOutlineAddLocation } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterSocials from "./FooterSocials";
import styles from "./footer.module.css";
import { MdOutlineSettingsPhone } from "react-icons/md";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className={styles.footerdistributed}>
      <div className={styles.footerLeft}>
        <h3>SkyNextSoft</h3>
        <FooterSocials />
        <p className={styles.footerCompanyName}>
          © SkyNextSoft, JSC 2024. All rights reserved.
        </p>
      </div>
      <div className={styles.footerCenter}>
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <MdOutlineAddLocation />
          </div>
          <p>
            <span>7/2/651 Minh khai P.Thanh lương Q.Hai Bà Trưng,</span>TP.Hà
            Nội{" "}
          </p>
        </div>
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <MdOutlineSettingsPhone />
          </div>
          <p>+84 366 888 666</p>
        </div>
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <CgMail />
          </div>
          <p>skynextsoft@gmail.com</p>
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.textRight}>
          <span>{t("Aboutthecompany")}</span>
          <strong>{t("companyDescription")}</strong>
        </div>
        <div className="flex justify-around mt-1">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
}
