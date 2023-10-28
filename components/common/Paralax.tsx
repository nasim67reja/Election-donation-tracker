"use client";
import { Parallax, Background } from "react-parallax";

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

      <div className="text-white h-[40vh]  relative">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute top-0 left-0 z-20 h-full w-full flex justify-center items-center">
          <h2 className="max-w-[780px] px-[1rem] text-[34px] md:text-[44px] x-md:[58] lg:text-[70px] xl:text-[90px] text-center leading-[1]">
            {heading}
          </h2>
        </div>
      </div>
    </Parallax>
  );
};

export default Paralax;
