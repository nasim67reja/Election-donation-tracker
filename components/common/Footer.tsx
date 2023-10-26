// "use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";

let service: {
  title: string;
  link: string;
}[];

service = [
  { title: "Website Design", link: "#" },
  { title: "Mobile App", link: "#" },
  { title: "SEO", link: "#" },
  { title: "UI/UX Design", link: "#" },
  { title: "Paid Advertising", link: "#" },
  {
    title: "Social Media Marketing",
    link: "#",
  },
  { title: "Email Marketing", link: "#" },
  { title: "Marketing Automation", link: "#" },
  { title: "Content Marketing", link: "#" },
  { title: "Content Writing", link: "#" },
  { title: "Digital PR", link: "#" },
  { title: "Graphic Design", link: "#" },
  { title: "Motion Graphic", link: "#" },
  { title: "Video Production", link: "#" },
  { title: "Influencer Marketing", link: "#" },
];

let quickLinks: {
  title: string;
  link: string;
}[];

quickLinks = [
  { title: "Appointment", link: "#contact" },
  { title: "Career", link: "#about" },
  { title: "Refer Client", link: "#refer-client" },
  { title: "FAQs", link: "#faq" },
  // { title: "Industries We Serve", link: "/industries-we-serve" },
  { title: "Privacy Policy", link: "#privacy-policy" },
  { title: "Terms & Conditions", link: "#terms-conditions" },
];

const Col = ({ text, links }: any) => {
  return (
    <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%] ">
      <h4 className="mb-10 heading-four text-center md:text-start ">{text}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((el: any, i: number) => {
          if (text === "Service") {
            if (i < links.length / 2) {
              return (
                <li className="text-small" key={i}>
                  {typeof el === "string" ? (
                    <>{el}</>
                  ) : (
                    <Link href={`${el.link}`}>{el.title}</Link>
                  )}
                </li>
              );
            }
          } else if (text === "More Service") {
            if (i > links.length / 2) {
              return (
                <li className="text-small " key={i}>
                  {typeof el === "string" ? (
                    <>{el}</>
                  ) : (
                    <Link href={`${el.link}`}>{el.title}</Link>
                  )}
                </li>
              );
            }
          } else {
            return (
              <li className="text-small " key={i}>
                {typeof el === "string" ? (
                  <>{el}</>
                ) : (
                  <Link href={`${el.link}`}>{el.title}</Link>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <SectionLayout bg="bg-[#f0f7fb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-[3rem] md:gap-8">
          <div className="">
            <div className="center md:block">
              <Image
                src="https://shadhinlab.com/wp-content/uploads/2023/09/logo-shadhinlab-2.png.webp"
                alt="shadhin-logo"
                width={366}
                height={106}
                className="lg:w-[10.6rem] w-[8rem] h-auto"
                priority
              />
            </div>
            <p className="text-small  leading-[1.3] px-[2vw]  sm:px-0 ">
              {text}
            </p>
          </div>
          <Col text="Service" links={service} />
          {/* <Col text="More Service" links={service} /> */}
          <Col text="Quick links" links={quickLinks} />

          <div className="flex-1 md:translate-x-[20%] lg:translate-x-[30%] ">
            <h4 className="mb-10 heading-four text-center md:text-start ">
              By subscribing we inform about
            </h4>
            <div className="flex flex-col items-center gap-y-4">
              <input
                className="bg-[#eae7e7] py-[0.8rem] px-2 rounded-xl text-[1.3rem] placeholder-center focus:outline-none w-full"
                type="text"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn text-small !py-3 flex items-center gap-8 w-max !text-white"
              >
                <span>Get a Proposal</span>
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="w-full mt-6 h-[1px] bg-[#DBDBDB]"></div>
        <div className="flex flex-wrap justify-center md:justify-between items-center   ">
          <p className="text-small mt-8 ">
            Copyright © 2023 All Rights Reserved by Shadhin Lab LLC.
          </p>
          <div className=" flex flex-col items-center  gap-6 pl-8 ">
            <div className="center mt-8 gap-4 ">
              <Link href={"#"}>
                <BsFacebook className=" w-[2rem] lg:w-[2.45rem] h-auto  hover:text-[#3b5998] " />
              </Link>
              <Link href={"#"}>
                <AiFillInstagram className="w-[2.6rem] lg:w-[2.9rem] h-auto hover:text-[#bb3380]" />
              </Link>
              <Link href={"#"}>
                <BsLinkedin className="w-[2rem] lg:w-[2.4rem] h-auto hover:text-[#007bb6]" />
              </Link>
              <Link href={"#"}>
                <AiFillTwitterCircle className="w-[2.6rem] lg:w-[2.8rem] h-auto hover:text-[#00aced] hover:fill-blue-500   " />
              </Link>
              <Link href={"#"}>
                <SiYoutubemusic className="w-[2.5rem] lg:w-[2.5rem] h-auto hover:text-[#FF0000]" />
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
    </footer>
  );
};

export default Footer;

const text: string = `We deliver quality projects, focus on client satisfaction and customized solutions. Our track record prides best-in-industry expertise and reliability. We have proudly and successfully served over 20+ amazing clients, launched 50+ websites. `;
