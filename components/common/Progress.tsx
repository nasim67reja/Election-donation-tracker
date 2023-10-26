"use client";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
// starts

interface progress {
  title: string;
  bg: string;
  border: string;
  percentage: string;
  percentageVal: string;
}
const Progress = ({
  title,
  bg,
  border,
  percentage,
  percentageVal,
}: progress) => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleVisibilityChange = (isVisible: any) => {
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
    }
  };
  return (
    <VisibilitySensor onChange={handleVisibilityChange} delayedCall>
      <div className="mb-4">
        <div className="flex justify-between">
          <h5 className="text-small  mb-3">{title}</h5>
          <p className="text-small">{percentageVal}</p>
        </div>
        <div
          className={`h-[0.6rem] rounded-[10px] w-full border-2 ${border} relative`}
        >
          <div
            className={`absolute ${
              hasPlayed ? percentage : "w-0"
            } rounded-[4px] h-full ${bg} top-0 left-0 transition-all duration-1000`}
          ></div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Progress;
