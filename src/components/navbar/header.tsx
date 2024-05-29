import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "../local-switcher";
import ClientHeader from "./clientHeader";
import NavLink from "./navLink";
import MenuNavbar from "../menu/menureact";

import navbarDropDown from "./navbarDropdown";
import ButtonNN from "../Button/button";
import { Children } from "react";
import DropDown from "./navbarDropdown";

export default function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <ClientHeader>
      <div className="  ">
        <div className="flex justify-end gap-5  items-center ">
          <DropDown />
          <div className="flex justify-between items-center gap-10  navbar">
            <NavLink path="/" title={t("home")} />
            <NavLink path={`/${locale}/about`} title={t("about")} />
            {/* <NavLink path={`/${locale}/blog`} title={t("blog")} /> */}
            <NavLink path={`/${locale}/activities`} title={t("activities")} />
            <NavLink path={`/${locale}/service`} title={t("service") }>
              <MenuNavbar />
            </NavLink>{" "}
          </div>
          <LocalSwitcher />
        </div>
      </div>
    </ClientHeader>
  );
}
