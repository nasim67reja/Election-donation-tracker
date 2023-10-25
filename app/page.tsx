import SectionLayout from "@/components/common/SectionLayout";
import Link from "next/link";
import Contact from "@/components/specific/Contact";

const page = () => {
  return (
    <>
      <div className="backG min-h-[60vh] xl:min-h-[80vh] flex justify-center items-center">
        <SectionLayout bg="">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="heading-primary text-[#fff]">
              Empower Your Campaign with Shadhin Lab LLC
            </h1>
            <p className="text-base text-center !text-[#fff]">
              A dedicated platform for election candidates to fund their
              campaigns and make a lasting impact.
            </p>
            <button className="mt-[4rem]">
              <Link
                href="#"
                className="bg-primary  rounded-[10px] px-[5rem] py-[1.2rem] !text-[#fff] text-base"
              >
                Learn More
              </Link>
            </button>
          </div>
        </SectionLayout>
      </div>
      <Contact />
      <SectionLayout bg="">page</SectionLayout>
    </>
  );
};

export default page;
