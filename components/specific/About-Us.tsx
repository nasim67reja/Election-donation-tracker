import React from "react";
import SectionLayout from "../common/SectionLayout";
// import Accordions from "./Accordions";
// import { Accordions } from "./Accordions";
import Progress from "../common/Progress";
import Accordions from "./Accordions";
import SectionHeader from "../common/SectionHeader";

let faq: {
  heading: String;
  description: String;
}[];

faq = [
  {
    heading: ` How it work?`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam`,
  },
  {
    heading: `Do I can use video chat?`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam`,
  },
  {
    heading: `Do I can use tutorail?`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel volutpat felis, eu condimentum massa. Pellentesque mollis eros vel mattis tempor. Aliquam`,
  },
];

const About = () => {
  return (
    <div id="about">
      <SectionLayout bg="">
        <SectionHeader
          heading="Who We Are"
          text="We are an organisation that unites people from all political parties,
          and none, into one effective anti-EU ground campaign, which is working
          towards winning."
        />
        <div className="grid md:grid-cols-2 gap-24 mt-16">
          <div className=" pt-6">
            {/* <Accordions arr={faq} /> */}
            <Accordions />
            faq accordion build but facing some issues on production
          </div>

          <div className="">
            <h3 className="heading-tertiary">Where It All Began</h3>
            <p className="text-small">
              Amnesty International is a global movement of more than 7 million
              people who take injustice personally. We are campaigning for a
              world where human rights are enjoyed by all.
            </p>

            <div className="mt-6">
              <Progress
                title="Serving"
                bg="bg-primary"
                border="border-primary"
                percentage="w-[95%]"
                percentageVal="95%"
              />

              <Progress
                title="Conviction"
                bg="bg-primary"
                border="border-primary"
                percentage="w-[85%]"
                percentageVal="85%"
              />

              <Progress
                title="Courage"
                bg="bg-primary"
                border="border-primary"
                percentage="w-[90%]"
                percentageVal="90%"
              />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default About;
