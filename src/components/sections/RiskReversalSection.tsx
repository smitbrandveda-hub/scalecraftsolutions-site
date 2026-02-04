import AnimatedSection from "@/components/ui/AnimatedSection";
import { Shield } from "lucide-react";

const RiskReversalSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="card-premium p-8 border-primary/30 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ background: "linear-gradient(90deg, hsl(174 100% 50% / 0.1) 0%, hsl(270 100% 70% / 0.1) 100%)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Start with a <span className="gradient-text">Free Growth Audit</span>
              </h3>
              <p className="text-muted-foreground">
                No obligations. No pressure. No generic advice. If you don't gain actionable insights, you lose nothing.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RiskReversalSection;
