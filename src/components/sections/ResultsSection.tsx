import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrendingUp, ShoppingCart, Search } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    title: "D2C Brand Scaling",
    description: "Reduced CPA by 42% and scaled monthly revenue 3.1× using Meta Ads + CRO-focused landing pages."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketplace Growth",
    description: "Amazon & Flipkart account optimization led to 2.7× sales growth within 90 days."
  },
  {
    icon: Search,
    title: "Service Lead Generation",
    description: "Generated consistent inbound leads with SEO + Google Ads, cutting acquisition cost by 35%."
  }
];

const ResultsSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real <span className="gradient-text">Growth Transformations</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <AnimatedSection 
              key={result.title} 
              delay={index * 0.15}
              className="card-premium p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <result.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{result.title}</h3>
              <p className="text-muted-foreground text-sm">{result.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
