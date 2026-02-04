import AnimatedSection from "@/components/ui/AnimatedSection";

const EmpathySection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Scaling a business today isn't easy. You invest in ads, content, or SEO — yet results often feel inconsistent or unclear.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            Most brands don't fail because marketing doesn't work, but because there's no system connecting strategy, execution, and results.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EmpathySection;
