import { LayoutProps } from "@/types/LayoutProps";

const SectionLayout = ({ children, bg }: LayoutProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container py-[3.5rem] ">{children}</div>
    </section>
  );
};

export default SectionLayout;
