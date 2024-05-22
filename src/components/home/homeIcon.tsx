"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { FaIdCard } from "react-icons/fa6";
const HomeIconn = () => {
  const locale = useLocale();
  const [isIcon, setIcon] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const handleMouseEnter = () => {
    setIsShow(true);
  };
  const handleMouseLeave = () => {
    setIsShow(false);
  };

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
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link href={`/${locale}/about`}>
          <div
            className={`p-4 rounded-full bg-green-500 ${
              isIcon ? "" : "hidden"
            } `}
          >
            <FaIdCard className="text-white text-3xl" />
          </div>
        </Link>
      </div>
      {isShow && (
        <div className="bg-white p-3 absolute -top-14 right-1 w-32 rounded-lg shadow-lg  before:content-[''] before:block before:absolute before:top-12 before:left-24 before:border-x-transparent before:border-b-transparent before:border-t-white before:border-4">
          Về chúng tôi
        </div>
      )}
    </div>
  );
};
export default HomeIconn;
