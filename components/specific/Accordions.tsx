"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const Accordion = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: AccordionProps) => {
  const handleClick = () => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="border rounded-md">
      <button
        type="button"
        className={`w-full text-left px-8 py-3 focus:outline-none items-center flex gap-10 items-center1 ${
          activeIndex === index ? "bg-primary text-white" : "bg-bgPrimary"
        } `}
        onClick={handleClick}
      >
        <span className="p-2 rounded-full bg-white text-[#333]">
          {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
        <span className="text-[13px] xl:text-[15px] font-bold">{title}</span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          activeIndex === index ? "transition-active" : "transition"
        }`}
      >
        <div className="bg-white p-4 text-small">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className=" flex flex-col gap-8 xl:gap-10">
      <Accordion
        title="How it work?"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel
        mattis tempor. Aliquam
      </Accordion>
      <Accordion
        title="Do I can use tutorial?"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel
        mattis tempor. Aliquam
      </Accordion>
      <Accordion
        title="Do I can use video chat?"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel
        mattis tempor. Aliquam
      </Accordion>
    </div>
  );
};

export default App;
