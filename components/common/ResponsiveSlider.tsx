import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineComment } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  return (
    <div className="border max-w-[370px] card overflow-hidden group cursor-pointer">
      {/* <Image src=""/> */}
      <div className=" overflow-hidden">
        <img
          src="https://htmldemo.net/polite/polite/img/event/1.jpg"
          alt="women-speaking-on-mic"
          className="duration-300 group-hover:scale-125"
        />
      </div>
      <div className="py-3 2xl:py-6 px-6 2xl:px-12">
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

const ResponsiveSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
