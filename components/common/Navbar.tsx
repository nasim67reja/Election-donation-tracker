"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

let linksO: {
  title: string;
  link: string;
}[];

linksO = [
  { title: "Home", link: "#" },
  { title: "About", link: "#about-us" },
  { title: "Service", link: "#" },
  { title: "Growth Plan", link: "#" },
  { title: "Case Studies", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Contact", link: "#" },
];

const Navbar = () => {
  const pathname = usePathname();
  const splitPath = `/${pathname.split("/")[1]}`;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    if (!isOpen) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  };
  return (
    <header className="fixed w-full bg-[#fff] z-50 top-0 left-0 ">
      {/* Mobile */}

      <nav className="container justify-between gap-12 py-[1.8rem] flex md:hidden">
        <Link href="/">
          <Image
            src="https://shadhinlab.com/wp-content/uploads/2023/09/logo-shadhinlab-2.png.webp"
            alt="shadhin-logo"
            width={400}
            height={150}
            className="w-[8rem] h-[55px]"
            priority
          />
        </Link>
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={`75vw`}
      >
        <nav className=" px-[2rem] flex flex-col gap-12 py-[1.8rem] relative">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="https://shadhinlab.com/wp-content/uploads/2023/09/logo-shadhinlab-2.png.webp"
                alt="shadhin-logo"
                width={400}
                height={150}
                className="w-[8rem] h-[55px]"
                priority
              />
            </Link>
            <button onClick={toggleDrawer}>
              <GrFormClose size={30} className=" h-[20px]" />
            </button>
          </div>

          <div>
            <ul className="  md:px-[2rem] flex flex-col md:gap-[2.6rem]">
              {linksO.map((el: { title: string; link: string }, i: number) => (
                <li
                  className={`text-link border-t-[0.5px] border-[rgba(0,0,0,0.16)] py-4 text-center ${
                    splitPath === el.link
                      ? "active !text-primary font-bold"
                      : ""
                  }`}
                  key={i}
                  onClick={toggleDrawer}
                >
                  <Link href={`${el.link}`}>{el.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="center gap-[1.5rem]">
            <button className="btn text-link">Portfolio</button>
          </div> */}
        </nav>
      </Drawer>

      {/* Desktop */}

      <nav className="container  justify-between items-center py-[1rem] hidden md:flex">
        <div>
          <Link href="/">
            <Image
              src="https://shadhinlab.com/wp-content/uploads/2023/09/logo-shadhinlab-2.png.webp"
              alt="shadhin-logo"
              width={366}
              height={106}
              className="lg:w-[10.6rem] w-[8rem] h-auto"
              priority
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-[1.5rem] lg:gap-[2.6rem]">
            {linksO.map((el: { title: string; link: string }, i: number) => (
              <li
                className={`text-link ${
                  splitPath === el.link ? "active !text-primary" : ""
                }`}
                key={i}
              >
                <Link
                  href={`${el.link}`}
                  className={`font-semibold hover:border-b-2  ${
                    splitPath === el.link
                      ? "hover:border-orange-700"
                      : "hover:border-blue-gray-500"
                  }`}
                >
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="center gap-[1.5rem]">
          <button className="btn text-link">Portfolio</button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
