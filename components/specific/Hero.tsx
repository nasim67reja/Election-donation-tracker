import React from "react";
import SectionLayout from "../common/SectionLayout";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="backG min-h-[60vh] xl:min-h-[80vh] flex justify-center items-center">
      <SectionLayout bg="">
        <div className=" flex flex-col justify-center items-center">
          <h1 data-aos="zoom-in" className="heading-primary text-[#fff] lora ">
            Empower Your Campaign with <br /> Shadhin Lab LLC
          </h1>
          <p
            data-aos="fade-up"
            className="text-[16px] md:text-[18px] 2xl:text-[22px] text-center !text-[#fff] lora"
          >
            A dedicated platform for election candidates to fund their campaigns
            and make a lasting impact.
          </p>
          <button data-aos="fade-up" className="mt-[4rem]">
            <Link
              href="#about"
              className="rounded-[5px] py-3 px-8 lg:py-6 gap-6 lg:px-12 !text-[#fff] text-[14px] border border-whtie duration-200 hover:bg-primary   hover:border-primary flex justify-between items-center  font-bold"
            >
              <span>Learn More</span>
              <FiChevronDown className="h-[24px] w-[24px] animate-bounce" />
            </Link>
          </button>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Hero;
