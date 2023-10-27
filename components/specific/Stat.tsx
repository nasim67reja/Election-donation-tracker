import React from "react";
import Count from "../common/Count";
import SectionLayout from "../common/SectionLayout";

const El = ({ num, text }: any) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-[4rem] font-medium text-[#343] lora">
        <Count num={num} duration={3} />
      </p>
      <p className="text-base font-semibold uppercase">{text}</p>
    </div>
  );
};

const Stat = () => {
  return (
    <>
      <SectionLayout bg="bg-bgPrimary">
        <div className="lg:px-8 flex justify-center items-center gap-[6rem]">
          <El num={390} text="Donations" />
          <El num={338} text="MEMBERS" />
          <El num={249} text="POLITICAL SPEECH" />
          <El num={175} text="CAMPAIGN" />
        </div>
      </SectionLayout>
    </>
  );
};

export default Stat;
