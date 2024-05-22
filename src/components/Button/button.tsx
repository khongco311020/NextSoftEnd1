"use client";
import { useState } from "react";
import { Button } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import navbarDropDown from "../navbar/navbarDropdown";
const ButtonNN = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setClick] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const clickScreen = () => {};
  return (
    <div>
      <Button className="text-2xl hidden dropdown z-50                                                                                                                                                                                  " onClick={toggleDropdown}>
        ☰
      </Button>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="absolute w-full h-full  bg-color">
          <nav className="left-0 top-0 w-1/3 h-screen bg-slate-50 z-50 fixed sidebar">
            <Link
              href="/"
              className="flex items-center flex-wrap text-2xl h-20 border-b"
            >
              <Image
                src="/logo-removebg - Copy.png"
                alt=""
                width={30}
                height={40}
                className="imglogo"
              />
              <h2 className=" font-semibold text-green-600">SkyNext Soft</h2>
            </Link>
            <div>{children}</div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default ButtonNN;
