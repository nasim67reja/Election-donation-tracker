import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({ className = "", children, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className={` text-[13px]  py-3 lg:py-5 px-10 lg:px-14 flex items-center  w-max  rounded-sm duration-200 ${className}`}
    >
      {/* {text} */}
      {children}
    </button>
  );
};

export default Button;
