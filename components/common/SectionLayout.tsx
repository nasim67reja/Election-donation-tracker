import { LayoutProps } from "@/types/LayoutProps";

const SectionLayout = ({ children, bg }: LayoutProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container py-[7rem] ">{children}</div>
    </section>
  );
};

export default SectionLayout;
