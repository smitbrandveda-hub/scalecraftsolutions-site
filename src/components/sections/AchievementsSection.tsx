import AnimatedSection from "@/components/ui/AnimatedSection";
import { Users, TrendingUp, Globe } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Consistent Lead Flow",
    description: "We design acquisition systems that bring predictable, high-intent leads instead of random traffic spikes."
  },
  {
    icon: TrendingUp,
    title: "Scalable Revenue Growth",
    description: "Every campaign is optimized for ROI, CAC reduction and long-term revenue scalability."
  },
  {
    icon: Globe,
    title: "Global Market Reach",
    description: "We help brands expand beyond local boundaries and acquire customers across India & international markets."
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-12 md:py-16 relative" id="achievements">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Help You <span className="gradient-text">Achieve</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <AnimatedSection 
              key={item.title} 
              delay={index * 0.15}
              className="card-premium p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
