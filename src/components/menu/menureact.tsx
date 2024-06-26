"use client";
import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ClientHeader from "../navbar/clientHeader";


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuNavbar() {


  const locale = useLocale();
  const menuWebsite = locale === "vi" ? "Thiết kế Website" : "Website design";
  const menuSystem = locale === "vi" ? "Thiết kế hệ thống" : "System desig";
  const menusolutions = locale === "vi" ? "Giải pháp CNTT" : "IT solutions";
  const menuMobile =
    locale === "vi" ? "Thiết kế App Mobile" : "Mobile App Design";

    



  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center space-x-1 pt-2">
          <ChevronDownIcon
            className=" w-5 text-inherit h-4 "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/${locale}/service/#thiet-ke-website`}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm border-b"
                  )}
                  
                  
                >
                  {menuWebsite}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/${locale}/service/#thiet-ke-he-thong`}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm border-b"
                  )}
                >
                  {menuSystem}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/${locale}/service/#giai-phap-cntt`}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm border-b"
                  )}
                >
                  {menusolutions}
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`/${locale}/service/#thiet-ke-app-mobile`}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm border-b"
                    )}
                  >
                    {menuMobile}
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
