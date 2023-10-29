import React from "react";
import Count from "../common/Count";
import SectionLayout from "../common/SectionLayout";

const El = ({ num, text }: any) => {
  return (
    <div className="flex flex-col gap-2 md:gap-8 items-center mb-8 md:mb-0">
      <p className="text-[35px] md:text-[40px] lg:text-[50px] font-medium  lora !mb-0">
        <Count num={num} duration={3} />
      </p>
      <p className="text-[13px] md:text-[16px] font-semibold uppercase">
        {text}
      </p>
    </div>
  );
};

const Stat = () => {
  return (
    <>
      <SectionLayout bg="bg-bgPrimary">
        <div className="lg:px-8 lg:py-[5rem] grid grid-cols-2 md:grid-cols-4 gap-[3rem] md:gap-[5rem] lg:gap-[8rem] justify-items-center justify-center">
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
