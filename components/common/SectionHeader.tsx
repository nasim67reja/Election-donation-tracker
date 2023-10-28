import React from "react";

const SectionHeader = ({ heading, text }: any) => {
  return (
    <div className="mb-[36px]">
      {" "}
      <h2 className="heading-secondary">{heading}</h2>
      <p className="text-small max-w-[518px] mx-auto text-center">{text}</p>
    </div>
  );
};

export default SectionHeader;
