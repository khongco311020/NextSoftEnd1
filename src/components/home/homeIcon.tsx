"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useLocale } from "next-intl";
const HomeIconn = () => {
    const locale = useLocale();
    const [isIcon, setIcon] = useState(false);

    useEffect(() => {
        const handleIcon = () => {
          const scrollTop = window.scrollY;
    
          if (scrollTop > 1500) {
            setIcon(true);
          } else {
            setIcon(false);
          }
        };
    
        window.addEventListener("scroll", handleIcon);
    
        return () => {
          window.removeEventListener("scroll", handleIcon);
        };
      }, []);
  return (
    <div className="fixed right-1.5 bottom-1/4">
      <div>
        <Link href={`/${locale}/about`}>
          <div className={`p-4 rounded-full bg-green-500 ${isIcon ? "" : "hidden"} `}>
            <AiOutlineHome className="text-white text-3xl"/>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HomeIconn;
