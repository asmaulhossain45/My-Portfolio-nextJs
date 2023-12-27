"use client";
import Link from "next/link";
import { useState } from "react";

import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";

const Navbar = () => {
  const [isActive, setActive] = useState("Home");

  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      icon: <HiHome />,
    },
    {
      name: "About",
      path: "/#about",
      icon: <HiUser />,
    },
    {
      name: "Services",
      path: "/#services",
      icon: <MdDesignServices />,
    },
    {
      name: "Projects",
      path: "/#projects",
      icon: <HiViewColumns />,
    },
    {
      name: "Testimonials",
      path: "/#testimonials",
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: "Contact",
      path: "/#contact",
      icon: <HiEnvelope />,
    },
  ];

  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-4 mt-auto lg:right-4 z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      {/* ---- inner ---- */}
      <div className="flex lg:flex-col items-center justify-between lg:justify-center gap-x-5 md:gap-x-8 lg:gap-y-6 px-6 md:px-10 lg:px-4 py-3 md:py-4 lg:py-7 bg-white/10 backdrop-blur-sm text-2xl md:text-3xl lg:text-xl rounded-full">
        {navLinks.map(({ name, icon, path }, idx) => {
          return (
            <Link
              key={idx}
              href={path}
              onClick={() => setActive(name)}
              className={`${
                isActive === name && "text-primary"
              } relative flex items-center group hover:text-primary transition-all duration-300`}
            >
              {/* ---- Tooltip ---- */}
              <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                <div className="relative bg-white flex items-center p-[6px] rounded-[3px]">
                  <div className="text-sm leading-none font-semibold capitalize">
                    {name}
                  </div>
                  {/* ---- Triangle ---- */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* ---- Icon ---- */}
              <div>{icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
