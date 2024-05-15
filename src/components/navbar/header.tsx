import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "../local-switcher";
import ClientHeader from "./clientHeader";
import MenuMavbar from "../menu/menureact";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <ClientHeader>
      <div className="flex justify-between w-2/5 items-center font-semibold">
        <Link href="/">{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/blog`}>{t("blog")}</Link>
        <Link href={`/${locale}/activities`}>{t("activities")}</Link>
        <Link href={`/${locale}/service`}><MenuMavbar/></Link>
        <LocalSwitcher />
      </div>
    </ClientHeader>
  );
}
