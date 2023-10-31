// "use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import Button from "./Button";
import { FaTwitterSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

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
  { title: "Home", link: "#" },
  { title: "About", link: "#about-us" },
  { title: "Events", link: "#events" },
  { title: "Timeline", link: "#timeline" },
  { title: "Contact Us", link: "#contact-us" },
  { title: "News", link: "#news" },
  { title: "Campaign", link: "#" },
];

const Col = ({ text, links }: any) => {
  return (
    <div className="flex-1  ">
      <h4 className="mb-10 heading-four text-center md:text-start ">{text}</h4>
      <ul className="flex flex-col gap-2 items-center md:items-start">
        {links.map((el: any, i: number) => {
          if (text === "Service") {
            if (i < links.length / 2) {
              return (
                <li className="text-small" key={i}>
                  {typeof el === "string" ? <>{el}</> : <>{el.title}</>}
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
                  <Link
                    className="hover:opacity-80 transition-all hover:border-b-2 border-primary"
                    href={`${el.link}`}
                  >
                    {el.title}
                  </Link>
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
    <footer data-aos="fade-up">
      <SectionLayout bg="bg-[#f0f7fb]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[31%_15%_15%_35%] xl:grid-cols-4 justify-items-center gap-[3rem] md:gap-8">
          <div className="">
            <div className="center md:block">
              <Image
                src="https://shadhinlab.com/wp-content/uploads/2023/09/logo-shadhinlab-2.png.webp"
                alt="shadhin-logo"
                width={366}
                height={106}
                className="lg:w-[10.6rem] w-[8rem] h-auto mb-8"
                priority
              />
            </div>
            <p className="text-small text-center md:text-start  leading-[1.3] px-[2vw]  sm:px-0 ">
              {text}
            </p>
            <div className="mt-[4rem] flex items-center gap-6">
              <Link href={"#"}>
                <BsLinkedin className="w-[2rem] lg:w-[2.4rem] h-auto text-primary hover:opacity-80" />
              </Link>
              <Link href={"#"}>
                <GrFacebook className="w-[1.8rem] lg:w-[2.3rem] h-auto text-primary hover:opacity-80" />
              </Link>
              <Link href={"#"}>
                <FaTwitterSquare className="w-[1.8rem] lg:w-[2.6rem] h-auto text-primary hover:opacity-80" />
              </Link>
            </div>
          </div>

          <Col text="Service" links={service} />
          {/* <Col text="More Service" links={service} /> */}
          <Col text="Quick links" links={quickLinks} />

          <div className="flex-1  ">
            <h4 className="mb-10 heading-four text-center md:text-start ">
              By subscribing we inform about
            </h4>
            <p className="text-small mb-4">
              Be the first to know about campaign milestones, events, and
              impactful stories. Join us in shaping a better future!
            </p>
            <div className="flex flex-col items-center md:items-start gap-y-6">
              <input
                className=" py-[0.8rem] px-6 rounded-sm text-[1.3rem] focus:outline-primary w-full"
                type="email"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                className="text-white hover:opacity-80 bg-primary !py-[8px] !px-6 "
              >
                Get a proposal
              </Button>
            </div>
          </div>
          {/*  */}
        </div>
      </SectionLayout>
      <div className="w-full  h-[1px] bg-[#DBDBDB]"></div>
      <div className="bg-[#f0f7fb]">
        <div className="max-w-[1300px]  mx-auto px-[30px] py-8">
          <p className="text-small text-center ">
            Copyright © 2023 All Rights Reserved by Shadhin Lab LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const text: string = `We deliver quality projects, focus on client satisfaction and customized solutions. Our track record prides best-in-industry expertise and reliability. We have proudly and successfully served over 20+ amazing clients, launched 50+ websites. `;
