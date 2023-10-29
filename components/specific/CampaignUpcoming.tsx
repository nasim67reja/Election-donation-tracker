"use client";
import React from "react";
import SectionLayout from "../common/SectionLayout";

import SectionHeader from "../common/SectionHeader";
import ResponsiveSlider from "../common/ResponsiveSlider";
import { GrFormClock } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from "../common/Button";

const CampaignUpcoming = () => {
  return (
    <div id="events">
      <SectionLayout bg="">
        <SectionHeader
          heading="Upcoming Events"
          text="We are pleased to announce the following events our movement’s
          representatives are  going to participate in."
        />
        <div data-aos="fade-up" className="  mt-8">
          <ResponsiveSlider />
        </div>
        <div className="flex justify-center items-center mt-16">
          <Button
            type="submit"
            className="text-white  hover:bg-primary bg-black font-bold uppercase gap-4"
          >
            <span>Load More</span>
            <AiOutlineClockCircle className="!text-white" />
          </Button>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CampaignUpcoming;
