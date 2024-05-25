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

  return (
    <div>
      <Button className="dropdown text-2xl hidden" onClick={toggleDropdown}>
        ☰
      </Button>
      {isOpen && (
        
          
            <nav className="left-0 top-0 max-lg:w-80 h-screen bg-slate-50 z-50 fixed sidebar">
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
          
        
      )}
    </div>
  );
};
export default ButtonNN;
