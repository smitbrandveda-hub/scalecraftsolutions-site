import AnimatedSection from "@/components/ui/AnimatedSection";
import { Search, Lightbulb, Rocket, BarChart3, FileText, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Deep Discovery", description: "We analyze your business, competitors and market to identify growth opportunities." },
  { icon: Lightbulb, title: "Strategy Blueprint", description: "We design a custom growth strategy aligned with your business goals." },
  { icon: Rocket, title: "Launch & Execution", description: "We implement campaigns with precision, speed and full transparency." },
  { icon: BarChart3, title: "Optimize & Scale", description: "Continuous optimization based on data to maximize your ROI." },
  { icon: FileText, title: "Reporting & Iterate", description: "Regular reports and iterations to keep improving results." },
  { icon: TrendingUp, title: "Scale Profitably", description: "Once optimized, we scale your campaigns to drive exponential growth." },
];

const FrameworkSection = () => {
  return (
    <section id="framework" className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Growth Methodology</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={step.title} 
              delay={index * 0.1}
              className="card-premium p-6 relative group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
