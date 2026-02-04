import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection = () => {
  return null;
};

export const FinalCTASection = ({ onOpenModal }: CTASectionProps) => {
  return (
    <section className="py-12 md:py-16 relative" id="contact">
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at center, hsl(174 100% 50% / 0.1) 0%, transparent 60%)" }}
      />
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Scale Your Business</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a free growth audit and discover how we can help you build predictable, scalable revenue.
          </p>
          <Button 
            onClick={onOpenModal}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-lg"
          >
            Get Started Today
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
