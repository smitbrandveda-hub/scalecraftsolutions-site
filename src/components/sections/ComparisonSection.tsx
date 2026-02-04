import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, X } from "lucide-react";

const scaleFeatures = [
  "Data-driven strategies with real-time tracking",
  "High-intent audience targeting (Google & Meta Ads)",
  "Flexible budgets & scalable campaigns",
  "Fast execution & continuous optimization",
  "Two-way engagement via ads, WhatsApp & forms",
  "Pan-India & global reach",
  "Performance-focused ROI approach"
];

const traditionalFeatures = [
  "Limited performance tracking",
  "Mass marketing with low targeting precision",
  "High fixed costs & long contracts",
  "Slow campaign execution",
  "One-way communication only",
  "Mostly local or regional reach",
  "Static campaigns with low adaptability"
];

const ComparisonSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">ScaleCraftSolutions</span> vs Traditional Agencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why modern, growth-focused brands choose ScaleCraftSolutions over outdated marketing models.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* ScaleCraftSolutions */}
          <AnimatedSection direction="left" className="card-premium p-8 group">
            <h3 className="text-xl font-semibold mb-6 gradient-text">ScaleCraftSolutions</h3>
            <ul className="space-y-3">
              {scaleFeatures.map((feature, index) => (
                <AnimatedSection 
                  key={feature} 
                  delay={0.1 + index * 0.05}
                  direction="left"
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* Traditional Agencies */}
          <AnimatedSection direction="right" className="card-premium p-8 opacity-75 group">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Traditional Agencies</h3>
            <ul className="space-y-3">
              {traditionalFeatures.map((feature, index) => (
                <AnimatedSection 
                  key={feature} 
                  delay={0.1 + index * 0.05}
                  direction="right"
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 text-destructive/70 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
