import { BsBookmarkFill } from "react-icons/bs";

const Divider = () => {
  return (
    <div className="translate-x-8 flex items-center max-w-[318px] mx-auto gap-4 my-[1.8rem]">
      <span className="h-[1px] bg-[rgba(221,221,221,0.62)] w-[40%]"></span>
      <span>
        <BsBookmarkFill className="text-[rgba(221,221,221,0.62)]" />
      </span>
      <span className="h-[1px] bg-[rgba(221,221,221,0.62)] w-[40%]"></span>
    </div>
  );
};

const SectionHeader = ({ heading, text }: any) => {
  return (
    <div className="mb-[36px]">
      {" "}
      <h2
        data-aos="zoom-in-down"
        className="heading-secondary raleway max-w-[518px] mx-auto"
      >
        {heading}
      </h2>
      <Divider />
      <p
        data-aos="fade-up"
        className="text-small max-w-[518px] mx-auto text-center raleway"
      >
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
