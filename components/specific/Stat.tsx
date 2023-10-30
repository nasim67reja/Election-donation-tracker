import React from "react";
import Count from "../common/Count";
import SectionLayout from "../common/SectionLayout";

const El = ({ imglink, num, text }: any) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center mb-8 md:mb-0">
      <div className="flex flex-col items-center gap-2">
        <img src={imglink} alt="" className="w-[10rem] lg:w-[15rem] h-auto" />
        <p className="text-[13px] md:text-[15px] font-medium uppercase">
          {text}
        </p>
      </div>

      <p className="text-[35px] md:text-[40px] lg:text-[50px] font-medium  lora !mb-0">
        <Count num={num} duration={3} />
      </p>
    </div>
  );
};

const Stat = () => {
  return (
    <>
      <SectionLayout bg="bg-bgPrimary">
        <div className="lg:px-8 lg:py-[5rem] grid grid-cols-2 md:grid-cols-4 gap-[3rem] md:gap-[5rem] lg:gap-[8rem] justify-items-center justify-center">
          <El
            imglink="https://th.bing.com/th/id/OIG.kuavBTXtCW4aEod8lwTl?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            num={390}
            text="Donations"
          />
          <El
            imglink="https://th.bing.com/th/id/OIG.UpGU.c1HuGZNBMEBZBJG?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            num={338}
            text="MEMBERS"
          />
          <El
            imglink="https://th.bing.com/th/id/OIG.Si4.uIb.arm5GL9cULJo?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            num={249}
            text="POLITICAL SPEECH"
          />
          <El
            imglink="https://th.bing.com/th/id/OIG.v0kYmvxBTvzuPWf678pP?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            num={175}
            text="CAMPAIGN"
          />
        </div>
      </SectionLayout>
    </>
  );
};

export default Stat;
