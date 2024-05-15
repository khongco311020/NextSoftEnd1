import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "../local-switcher";
import ClientHeader from "./clientHeader";
import NavLink from "./navLink";
import MenuNavbar from "../menu/menureact";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <ClientHeader>
      <div className="flex justify-between w-2/5 items-center">
        <NavLink path="/" title={t("home")} />
        {/* <NavLink path={`/${locale}/about`} title={t("about")} /> */}
        <NavLink path={`/${locale}/blog`} title={t("blog")} />
        <NavLink path={`/${locale}/activities`} title={t("activities")} />
        <NavLink path={`/${locale}/service`} title={t("service")}>
          <MenuNavbar />
        </NavLink>
        <LocalSwitcher />
      </div>
    </ClientHeader>
  );
}
