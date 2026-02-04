import AnimatedSection from "@/components/ui/AnimatedSection";

const StruggleSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
            Most brands struggle not because channels fail, but because{" "}
            <span className="gradient-text font-semibold">disconnected marketing efforts</span>{" "}
            create confusion, wasted spend, and unpredictable growth.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StruggleSection;
