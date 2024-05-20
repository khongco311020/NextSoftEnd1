import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./footer.module.css";
const FooterSocials = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  return (
    <div className={styles.footerLinks}>
      <Link href={`/`}>{t("home")}</Link>|
      <Link href={`/${locale}/about`}>{t("about")}</Link>|
      <Link href={`/${locale}/activities`}>{t("activities")}</Link>|
      <Link href={`/${locale}/service`}>{t("service")}</Link>
    </div>
  );
};

export default FooterSocials;
