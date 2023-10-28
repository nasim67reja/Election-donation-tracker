import React from "react";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import SectionLayout from "../common/SectionLayout";
import SectionHeader from "../common/SectionHeader";

const Card = () => {
  return (
    <div className="border max-w-[370px] overflow-hidden group cursor-pointer">
      {/* <Image src=""/> */}
      <div className="h-[260px] overflow-hidden">
        <img
          src="https://htmldemo.net/polite/polite/img/blog/4.jpg"
          alt="women-speaking-on-mic"
          className="duration-300 group-hover:scale-125"
        />
      </div>
      <div className="py-6 ">
        <div className="px-12 border-b pb-6">
          <h4 className="heading-four mb-4">Lorem Ipsum is simply dummy</h4>
          <p className="text-base">
            This year, in this election, we are called to reaffirm our values
            and our commitments, to hold them against a hard reality and see how
            we are .......
          </p>
        </div>

        <div className="flex gap-6 text-small justify-between px-12 pt-6">
          <div className="flex gap-4 items-center ">
            <span>
              <BsCalendar3 />
            </span>
            <span>14 May, 2017</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>
              <AiOutlineComment />
            </span>
            <span>03 Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div id="news">
      <SectionLayout bg="">
        <SectionHeader
          heading="Latest Campaign News"
          text="The latest news and headlines from the world of politics. Get news and
          in-
          depth coverage with videos and photos."
        />

        <div className=" flex justify-center gap-8 mt-8">
          <Card />
          <Card />
          <Card />
        </div>
      </SectionLayout>
    </div>
  );
};

export default News;
