import AnimatedSection from "@/components/ui/AnimatedSection";

const USPSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, hsl(174 100% 50% / 0.08) 0%, transparent 60%)" }}
      />
      <div className="section-container relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            We don't sell marketing services.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 leading-relaxed">
            We build{" "}
            <span className="gradient-text font-semibold">revenue-focused growth systems</span>{" "}
            where every channel works toward measurable business outcomes.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default USPSection;
