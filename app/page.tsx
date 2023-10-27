import SectionLayout from "@/components/common/SectionLayout";
import Link from "next/link";
import Contact from "@/components/specific/Contact";
import About from "@/components/specific/About-Us";
import CampaignUpcoming from "@/components/specific/CampaignUpcoming";
import Hero from "@/components/specific/Hero";
import Stat from "@/components/specific/Stat";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Stat />
      <CampaignUpcoming />
      <Contact />
    </>
  );
};

export default page;
