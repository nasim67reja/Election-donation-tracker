import { BsBookmarkFill } from "react-icons/bs";

const Divider = () => {
  return (
    <div className="translate-x-8 flex items-center max-w-[318px] mx-auto gap-4 mb-[2rem]">
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
      <h2 className="heading-secondary">{heading}</h2>
      <Divider />
      <p className="text-small max-w-[518px] mx-auto text-center">{text}</p>
    </div>
  );
};

export default SectionHeader;
