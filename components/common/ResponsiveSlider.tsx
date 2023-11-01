import Image from "next/image";
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="custom-next-arrow border-[1px] border-[#aaa] hover:border-primary hover:text-white hover:bg-primary rounded-full text-[#aaa] text-[18px] h-[42px] px-[11px] absolute top-1/2 translate-y-1/2 2xl:right-[-30px] right-[-10px]"
  >
    <AiOutlineRight />
  </button>
);
const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="custom-prev-arrow custom-next-arrow border-[1px] border-[#aaa] rounded-full hover:border-primary hover:text-white hover:bg-primary  text-[#aaa] text-[18px] h-[42px] px-[11px] absolute top-1/2 translate-y-1/2 2xl:left-[-42px] left-[-20px] md:left-[-10px] z-10"
  >
    <AiOutlineLeft />
  </button>
);

const Card = () => {
  return (
    <div className="border max-w-[370px] card overflow-hidden group cursor-pointer hover:shadow-xl">
      {/* <Image src=""/> */}
      <div className=" overflow-hidden">
        <img
          src="https://htmldemo.net/polite/polite/img/event/1.jpg"
          alt="women-speaking-on-mic"
          className="duration-300 group-hover:scale-125"
        />
      </div>
      <div className="py-4 2xl:py-8 px-4 2xl:px-8">
        <div className="flex gap-4 !text-secondary text-small font-semibold items-center">
          <span>
            <AiOutlineClockCircle />
          </span>
          <span>01d : 11h : 22m : 42s</span>
        </div>
        <h4 className="heading-four my-4">Presidential Elections 2017</h4>
        <div className="flex gap-6 text-small">
          <div className="flex gap-4 items-center">
            <span>
              <BsCalendar3 className="text-secondary" />
            </span>
            <span>4 May, 2017</span>
          </div>
          <div>|</div>
          <div className="flex gap-4 items-center">
            <span>
              <AiOutlineComment className="text-secondary" />
            </span>
            <span>02 Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResponsiveSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="">
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

export default ResponsiveSlider;
