import AnimatedSection from "@/components/ui/AnimatedSection";
import { X, Check, AlertTriangle, TrendingUp, DollarSign, BarChart3, Target, LineChart, RefreshCw, Brain } from "lucide-react";

const beforeItems = [
  { icon: AlertTriangle, text: "Marketing in silos" },
  { icon: DollarSign, text: "Unclear ROI" },
  { icon: BarChart3, text: "Traffic without conversions" },
  { icon: RefreshCw, text: "Guesswork-based decisions" },
];

const afterItems = [
  { icon: Target, text: "Structured growth systems" },
  { icon: LineChart, text: "Clear funnel visibility" },
  { icon: TrendingUp, text: "Optimized ROAS & conversions" },
  { icon: Brain, text: "Data-driven revenue decisions" },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">Transformation</span> Gap
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Column */}
          <AnimatedSection direction="left" className="card-premium p-8 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center group-hover:bg-destructive/30 transition-colors">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Before Working With Us</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <AnimatedSection 
                  key={item.text} 
                  delay={0.1 + index * 0.1}
                  direction="left"
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <item.icon className="w-5 h-5 text-destructive/70" />
                  <span>{item.text}</span>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
          
          {/* After Column */}
          <AnimatedSection direction="right" className="card-premium p-8 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">After Partnering With Us</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <AnimatedSection 
                  key={item.text} 
                  delay={0.1 + index * 0.1}
                  direction="right"
                  className="flex items-center gap-3 text-foreground"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span>{item.text}</span>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
