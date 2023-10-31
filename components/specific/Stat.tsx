import React from "react";
import Count from "../common/Count";
import SectionLayout from "../common/SectionLayout";
import { lora } from "@/app/fonts";

const El = ({ imglink, num, text }: any) => {
  return (
    <div className="flex flex-col gap-2 md:gap-8 items-center mb-8 md:mb-0">
      <img src={imglink} alt="" className="w-[5rem]  h-auto" />
      <p className="text-[13px] md:text-[15px] font-medium uppercase">{text}</p>
      <p
        className={`text-[35px] tracking-[5px] md:text-[45px] lg:text-[60px] font-medium leading-[1]  ${lora.className} !mb-0`}
      >
        <Count num={num} duration={3} />
      </p>
    </div>
  );
};

const Stat = () => {
  return (
    <>
      <SectionLayout bg="bg-bgPrimary">
        <div className="lg:px-8  grid grid-cols-2 md:grid-cols-4 gap-[3rem] md:gap-[5rem] lg:gap-[8rem] justify-items-center justify-center">
          <El
            imglink="https://bayshorecommunication.vercel.app/_next/image?url=%2Fassets%2Ficons-for-web%2Fanalyze-and-Measure-Results.png&w=640&q=75"
            num={390}
            text="Donations"
          />
          <El
            imglink="https://bayshorecommunication.vercel.app/_next/image?url=%2Fassets%2Ficons-for-web%2Ftarget-audience.png&w=640&q=75"
            num={338}
            text="MEMBERS"
          />
          <El
            imglink="https://bayshorecommunication.vercel.app/assets/service/digital-pr.svg"
            num={249}
            text="POLITICAL SPEECH"
          />
          <El
            imglink="https://bayshorecommunication.vercel.app/_next/image?url=%2Fassets%2Ficons-for-web%2Fengage.png&w=640&q=75"
            num={175}
            text="CAMPAIGN"
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default Stat;
