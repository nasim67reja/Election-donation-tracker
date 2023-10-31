import React from "react";
import SectionLayout from "../common/SectionLayout";
import Progress from "../common/Progress";
import SectionHeader from "../common/SectionHeader";
import App from "./Accordions";

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
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-24 mt-16">
          <div className=" pt-6">
            <App />
          </div>

          <div className="">
            <h3 className="heading-tertiary text-center md:text-start mb-4">
              Where It All Began
            </h3>
            <p className="text-small text-center md:text-start ">
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
