import React from "react";
import SectionLayout from "../common/SectionLayout";
import SectionHeader from "../common/SectionHeader";
import Link from "next/link";

const Card = () => {
  return (
    <div className="card flex border">
      <Link href="#" className="relative timeline-img">
        <img
          src="https://htmldemo.net/polite/polite/img/time-line/1.jpg"
          alt=""
          className="max-w-[220px] h-auto"
        />
      </Link>
      <div className="flex flex-col items-center px-8 py-6">
        <h4 className="heading-four mb-[1.9rem]">Clinton's big worry</h4>
        <p className="text-small !text-[#727272] text-center mb-[1.6rem]">
          However, he noted ISIS terrorists in Syria still have "the ability to
          appeal to troubled souls" online and said the number of open
        </p>
        <Link href="#" className="text-small hover:text-[#ea000d]">
          Read More
        </Link>
      </div>
    </div>
  );
};

const CardRight = () => {
  return (
    <div className="card flex border">
      <div className="flex flex-col items-center px-8 py-6">
        <h4 className="heading-four mb-[1.9rem]">Clinton's big worry</h4>
        <p className="text-small !text-[#727272] text-center mb-[1.6rem]">
          However, he noted ISIS terrorists in Syria still have "the ability to
          appeal to troubled souls" online and said the number of open
        </p>
        <Link href="#" className="text-small hover:text-[#ea000d]">
          Read More
        </Link>
      </div>

      <Link href="#" className="relative timeline-img-right">
        <img
          src="https://htmldemo.net/polite/polite/img/time-line/1.jpg"
          alt=""
          className="max-w-[220px] h-auto"
        />
      </Link>
    </div>
  );
};

const Timeline = () => {
  return (
    <div id="timeline">
      <SectionLayout bg="bg-bgPrimary">
        <SectionHeader
          heading="Political Timeline
"
          text="Explore some of the key moments and events that have helped shape the course of New Zealand's political and constitutional development."
        />
        <div className="relative  grid grid-cols-2 gap-28 timeline-wraper">
          <div className="flex flex-col gap-14">
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
      </SectionLayout>
    </div>
  );
};

export default Timeline;
