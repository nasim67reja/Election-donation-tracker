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
        title="What sets Shadhin Lab apart from others?"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Shadhin Lab stands out for its commitment to transparency,
        accessibility, and community engagement. We prioritize creating a
        political landscape where every candidate can be heard and supported.
      </Accordion>
      <Accordion
        title="How can I get involved with Shadhin Lab?"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        You can get involved by exploring campaigns, supporting candidates, or
        even considering running for office. Connect with us on social media,
        attend campaign events, and be a part of the movement to shape a better
        future.
      </Accordion>
      <Accordion
        title="What kind of candidates use Shadhin Lab?"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        Shadhin Lab welcomes candidates from various backgrounds, affiliations,
        and levels of experience. Whether you're a seasoned politician or a
        newcomer, our platform is designed to support candidates who are
        passionate about making a positive impact
      </Accordion>
    </div>
  );
};

export default App;
