import AnimatedSection from "@/components/ui/AnimatedSection";

const DesireSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Imagine knowing exactly where your growth comes from — and how to scale it confidently.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed">
            No guesswork. No wasted spend. Just{" "}
            <span className="gradient-text font-semibold">clarity, control, and predictable revenue growth</span>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DesireSection;
