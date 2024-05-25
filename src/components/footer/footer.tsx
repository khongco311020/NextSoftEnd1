import { useTranslations } from "next-intl";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import FooterSocials from "./FooterSocials";
import styles from "./footer.module.css";
import { MdOutlineSettingsPhone } from "react-icons/md";
import HomeIconn from "../home/homeIcon";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className={styles.footerdistributed}>
      
      <div className={styles.footerLeft}>
        <h3>SkyNext Soft</h3>
        <FooterSocials />
        <p className={styles.footerCompanyName}>
          © SkyNext Soft, JSC 2024. All rights reserved.
        </p>
      </div>
      <div className={styles.footerCenter}>
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <IoLocationOutline />
          </div>
          <p>{t("address")}</p>
        </div>
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <MdOutlineSettingsPhone />
          </div>
          <p>+84 366 888 666</p>
        </div>
        <a href="mailto:skynextsoft@gmail.com">
        <div className="flex items-center">
          <div className={styles.iconReact}>
            <CgMail />
          </div>
          <p>skynextsoft@gmail.com</p>
        </div>
        </a>
        
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
