import AnimatedSection from "@/components/ui/AnimatedSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import preetPhoto from "@/assets/founders/preet-malvi.jpg";
import vishalPhoto from "@/assets/founders/vishal-chavda.png";
import smitPhoto from "@/assets/founders/smit-gohel.jpg";

const founders = [
  {
    name: "Preet Malvi",
    initials: "PM",
    photo: preetPhoto,
  },
  {
    name: "Vishal Chavda",
    initials: "VC",
    photo: vishalPhoto,
  },
  {
    name: "Smit Gohel",
    initials: "SG",
    photo: smitPhoto,
  },
];

const FoundersSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none" 
        style={{ background: "var(--gradient-glow-purple)" }} 
      />
      <div 
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" 
        style={{ background: "var(--gradient-glow-cyan)" }} 
      />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the Founders Behind <span className="gradient-text">ScaleCraftSolutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ScaleCraftSolutions is led by founders who combine strategy, performance marketing, and execution to help brands scale with measurable ROI.
          </p>
        </AnimatedSection>
        
        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <AnimatedSection 
              key={founder.name}
              className={`stagger-${index + 1}`}
            >
              <div className="card-premium p-8 h-full flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300">
                {/* Avatar with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-300"
                       style={{ background: "var(--gradient-glow-cyan)" }} />
                  <Avatar className="w-28 h-28 border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300 relative z-10">
                    <AvatarImage src={founder.photo} alt={founder.name} className="object-cover" />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                      {founder.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Name & Role */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  Co-Founder
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Trust Line */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "We work closely with clients as growth partners, not just service providers."
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FoundersSection;
