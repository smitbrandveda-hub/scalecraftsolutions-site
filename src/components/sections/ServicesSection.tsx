import AnimatedSection from "@/components/ui/AnimatedSection";
import { Target, Search, Globe, ShoppingCart, Palette, Package } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "ROI-driven Meta Ads, Google Ads, PPC & media buying strategies built to scale profitably."
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    description: "Technical SEO, content marketing and authority building for long-term visibility and inbound leads."
  },
  {
    icon: Globe,
    title: "Website & Landing Pages",
    description: "High-speed, conversion-optimized websites designed to turn visitors into customers."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Management",
    description: "Complete Amazon, Flipkart & Meesho account setup, optimization, ads & full account management."
  },
  {
    icon: Palette,
    title: "Creative & Content",
    description: "Scroll-stopping creatives, copywriting, brand visuals and content built for performance."
  },
  {
    icon: Package,
    title: "Printing & Packaging",
    description: "Professional packaging designs, brand collaterals and print-ready marketing materials."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 relative" id="services">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our End-to-End <span className="gradient-text">Growth Services</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              delay={index * 0.1}
              className="card-premium p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
