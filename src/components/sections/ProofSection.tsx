import AnimatedSection from "@/components/ui/AnimatedSection";

const ProofSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Real growth is measurable — improved ROAS, higher conversion rates, and scalable revenue systems{" "}
            <span className="gradient-text font-semibold">backed by data, not claims</span>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProofSection;
