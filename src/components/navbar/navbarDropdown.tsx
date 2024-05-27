import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "../local-switcher";
import ButtonNN from "../Button/button";
import NavLink from "./navLink";
import MenuNavbar from "../menu/menureact";
import ClientHeader from "./clientHeader";

export default function DropDown() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <ButtonNN>
      <div className="">
        <div className="">
          <div className="text-black px-5 pt-2">
            <NavLink path="/" title={t("home")} />
            <NavLink path={`/${locale}/about`} title={t("about")} />
            {/* <NavLink path={`/${locale}/blog`} title={t("blog")} /> */}
            <NavLink path={`/${locale}/activities`} title={t("activities")} />
            
              <NavLink path={`/${locale}/service`} title={t("service")}/>
              
            
            
           
          </div>
          
        </div>
      </div>
    </ButtonNN>
  );
}
