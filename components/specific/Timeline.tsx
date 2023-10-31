import React from "react";
import SectionLayout from "../common/SectionLayout";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <p className="md:hidden block  text-[#727272] leading-[14px] text-[15px] font-semibold">
        Oct 2023
      </p>
      <div className="timelinecard grid grid-cols-[40%_57%] gap-[3%] border">
        <Link href="#" className="relative timeline-img w-full">
          <p className="hidden md:block absolute text-[#727272] leading-[14px] text-[15px] top-[86px] left-[-125px]">
            Oct 2023
          </p>
          <div className="hidden md:block h-4 w-4 rounded-full bg-white z-10 absolute top-[86px] left-[-41px] border border-[#727272]"></div>
          <img
            src="https://htmldemo.net/polite/polite/img/time-line/1.jpg"
            alt=""
            className="w-full h-auto"
          />
        </Link>
        <div className="flex flex-col md:items-start items-center px-3 py-2 md:px-8 md:py-6">
          <h4 className="heading-four mb-6 md:mb-[1.9rem]">
            Clinton's big worry
          </h4>
          <p className="text-small !text-[#727272] text-center md:text-justify mb-2 md:mb-[1.6rem]">
            However, he noted ISIS terrorists in Syria still have "the ability
            to appeal to troubled souls" online and said the number of open
          </p>
          <Link href="#" className="text-small hover:text-[#ea000d]">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

const CardRight = () => {
  return (
    <>
      <p className="md:hidden block  text-[#727272] leading-[14px] text-[15px] font-semibold">
        Oct 2023
      </p>
      <div className="timelinecard grid grid-cols-[57%_40%] gap-[3%] border">
        <div className="flex flex-col md:items-start items-center px-3 py-2 md:px-8 md:py-6 mt-6">
          <h4 className="heading-four mb-6 md:mb-[1.9rem]">
            Clinton's big worry
          </h4>
          <p className="text-small !text-[#727272] text-center md:text-justify mb-2 md:mb-[1.6rem]">
            However, he noted ISIS terrorists in Syria still have "the ability
            to appeal to troubled souls" online and said the number of open
          </p>
          <Link href="#" className="text-small hover:text-[#ea000d]">
            Read More
          </Link>
        </div>

        <Link href="#" className="relative timeline-img-right w-full">
          <p className=" hidden md:block absolute text-[#727272] leading-[14px] text-[15px] top-[86px] right-[-125px]">
            Oct 2023
          </p>
          <div className="hidden md:block h-4 w-4 rounded-full bg-white z-10 absolute top-[86px] right-[-41px] border border-[#727272]"></div>
          <img
            src="https://htmldemo.net/polite/polite/img/time-line/2.jpg"
            alt=""
            className="w-full h-auto"
          />
        </Link>
      </div>
    </>
  );
};

const Timeline = () => {
  return (
    <div data-aos="fade-up" id="timeline">
      <SectionLayout bg="bg-bgPrimary">
        <SectionHeader
          heading="Political Timeline
"
          text="Explore some of the key moments and events that have helped shape the course of New Zealand's political and constitutional development."
        />
        <div className="relative hidden md:grid grid-cols-2 gap-28 timeline-wraper">
          <div className="flex flex-col gap-14 items-end">
            <div className="opacity-0">
              <Card />
            </div>
            <CardRight />
          </div>
          <div className="flex flex-col gap-14">
            <Card />
            <div className="opacity-0">
              <Card />
            </div>
            <Card />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <Card />
          <CardRight />
          <Card />
        </div>
      </SectionLayout>
    </div>
  );
};

export default Timeline;
