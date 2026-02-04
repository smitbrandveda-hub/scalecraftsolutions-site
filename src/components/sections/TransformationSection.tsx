import AnimatedSection from "@/components/ui/AnimatedSection";

const TransformationSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at center, hsl(270 100% 70% / 0.08) 0%, transparent 60%)" }}
      />
      <div className="section-container relative z-10">
        <AnimatedSection direction="scale" className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            We transform{" "}
            <span className="gradient-text">fragmented marketing activities</span>{" "}
            into a unified growth engine — designed to compound results over time and scale efficiently.
          </h2>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TransformationSection;
