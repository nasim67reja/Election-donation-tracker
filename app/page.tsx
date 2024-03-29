import SectionLayout from "@/components/common/SectionLayout";
import Link from "next/link";
import Contact from "@/components/specific/Contact";
import About from "@/components/specific/About-Us";
import CampaignUpcoming from "@/components/specific/CampaignUpcoming";
import Hero from "@/components/specific/Hero";
import Stat from "@/components/specific/Stat";
import News from "@/components/specific/News";
import Timeline from "@/components/specific/Timeline";
import Donate from "@/components/specific/Donate";
import Clients from "@/components/specific/Our-clients";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Stat />
      <CampaignUpcoming />
      <Timeline />
      <Clients />
      <Donate />
      {/* <Contact /> */}
      <News />
    </>
  );
};

export default page;
