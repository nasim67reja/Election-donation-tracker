"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

// "use client";
// import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// export default function Accordions({ arr }: any) {
//   const [open, setOpen] = useState(0);

//   const handleOpen = (value: any) => {
//     setOpen(open === value ? 0 : value);
//   };

//   return (
//     <Fragment>
//       {arr.map((el: any, i: number) => (
//         <div key={el} className="mb-8">
//           <Accordion
//             open={open === i + 1}
//             icon={<Icon id={1 + i} open={open} />}
//           >
//             <div
//               className={`px-8  ${
//                 open === i + 1 ? "bg-primary" : " bg-bgPrimary"
//               }`}
//             >
//               <AccordionHeader
//                 className="border-b-0"
//                 onClick={() => handleOpen(i + 1)}
//               >
//                 <div
//                   className={`text-base ${open === i + 1 ? "!text-white" : ""}`}
//                 >
//                   {el.heading}
//                 </div>
//               </AccordionHeader>
//             </div>
//             <AccordionBody>
//               <div className="px-8 py-4 border rounded-sm">
//                 <div className=" text-small">{el.description}</div>
//               </div>
//             </AccordionBody>
//           </Accordion>
//         </div>
//       ))}
//     </Fragment>
//   );
// }

// function Icon({ id, open }: any) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`${
//         id === open ? "rotate-180 text-white" : ""
//       } h-6 w-6 transition-transform`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={4}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );
// }
