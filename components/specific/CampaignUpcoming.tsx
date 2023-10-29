"use client";
import React from "react";
import SectionLayout from "../common/SectionLayout";
import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../common/SectionHeader";

const Card = () => {
  return (
    <div className="border max-w-[370px] overflow-hidden group cursor-pointer">
      {/* <Image src=""/> */}
      <div className="h-[260px] overflow-hidden">
        <img
          src="https://htmldemo.net/polite/polite/img/event/1.jpg"
          alt="women-speaking-on-mic"
          className="duration-300 group-hover:scale-125"
        />
      </div>
      <div className="py-6 px-12">
        <div className="flex gap-4 text-primary text-small font-semibold items-center">
          <span>
            <AiOutlineClockCircle />
          </span>
          <span>01d : 11h : 22m : 42s</span>
        </div>
        <h4 className="heading-tertiary">Presidential Elections 2017</h4>
        <div className="flex gap-6 text-small">
          <div className="flex gap-4 items-center">
            <span>
              <BsCalendar3 />
            </span>
            <span>4 May, 2017</span>
          </div>
          <div>|</div>
          <div className="flex gap-4 items-center">
            <span>
              <AiOutlineComment />
            </span>
            <span>02 Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const CampaignUpcoming = () => {
  return (
    <div id="about">
      <SectionLayout bg="">
        <SectionHeader
          heading="Upcoming Events"
          text="We are pleased to announce the following events our movement’s
          representatives are  going to participate in."
        />
        <div className="  mt-8">
          <Responsive />
        </div>
      </SectionLayout>
    </div>
  );
};

export default CampaignUpcoming;

const Responsive: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};
