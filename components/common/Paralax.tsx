"use client";
import { BsBookmarkFill } from "react-icons/bs";
import { Parallax, Background } from "react-parallax";
import SectionLayout from "./SectionLayout";

const Paralax = ({ imgUrl, heading }: any) => {
  return (
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Background>

      <div className="text-white h-[50vh]  relative">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-[rgba(0,0,0,0.7)]"></div>

        <div className="absolute top-0 left-0 z-20 h-full w-full py-[5rem]">
          <h2 className="max-w-[780px] px-[1rem]  heading-secondary mx-auto !text-white ">
            {heading}
          </h2>

          <div className=" flex items-center max-w-[318px] mx-auto gap-4 mb-[2rem]">
            <span className="h-[1px] bg-white w-[40%]"></span>
            <span>
              <BsBookmarkFill className="text-white" />
            </span>
            <span className="h-[1px] bg-white w-[40%]"></span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <Price quantity="$100" />
            <Price quantity="$200" />
            <Price quantity="$300" />
            <Price quantity="$400" />
            <Price quantity="$500" />
          </div>
          <div className="flex items-center justify-center mt-20">
            <button
              type="submit"
              className="bg-primary text-[15px] font-bold py-5 px-14 flex items-center gap-8 w-max text-white hover:bg-white hover:text-[#333] rounded-sm duration-200"
            >
              <span>DONATE NOW</span>
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Paralax;

const Price = ({ quantity }: any) => {
  return (
    <button className="mt-[4rem] rounded-[5px] py-3 px-8 md:py-4 gap-6 md:px-16 !text-[#fff] text-[14px] md:text-[18px] border border-whtie duration-200 hover:bg-primary   hover:border-primary flex justify-between items-center  font-bold">
      <span>{quantity}</span>
    </button>
  );
};
