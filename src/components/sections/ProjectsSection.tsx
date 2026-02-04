import AnimatedSection from "@/components/ui/AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "The Ally",
    industry: "E-commerce (D2C)",
    website: "https://www.theally.shop",
    services: ["Google Ads", "Meta Ads", "SEO", "Website", "Social Media", "Full Growth"],
    challenge: "Scaling online sales while maintaining ROAS and building a strong digital brand.",
    solution: "Built a full-funnel paid ads strategy, optimized the website for conversions, strengthened organic visibility through SEO, and implemented a consistent social media growth system.",
    outcomes: ["Improved sales consistency", "Better ad efficiency", "Stronger brand visibility across channels"]
  },
  {
    name: "Shree Shakti Turning Works",
    industry: "Manufacturing",
    services: ["Google Ads", "Meta Ads", "Social Media", "Full Growth"],
    challenge: "Generating consistent, high-quality B2B enquiries in a competitive manufacturing market.",
    solution: "Designed high-intent Google Ads campaigns, supported with Meta awareness and remarketing, and improved enquiry flow through social media.",
    outcomes: ["Consistent inbound enquiries", "Improved lead quality from business buyers"]
  },
  {
    name: "Uttam Manufactures",
    industry: "Manufacturing",
    services: ["Google Ads", "Meta Ads", "Social Media", "Full Growth"],
    challenge: "Low digital visibility and inconsistent lead flow.",
    solution: "Implemented performance-driven paid campaigns and structured a scalable growth strategy across platforms.",
    outcomes: ["Increased enquiry volume", "Improved visibility among industrial buyers"]
  },
  {
    name: "7H Appliances",
    industry: "Manufacturing",
    services: ["Google Ads", "Meta Ads", "Social Media", "Full Growth"],
    challenge: "Limited online presence and low lead volume.",
    solution: "Built a paid media and visibility framework focused on reach, targeting, and enquiry generation.",
    outcomes: ["Improved brand visibility", "Higher lead volume"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none" 
           style={{ background: "var(--gradient-glow-cyan)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" 
           style={{ background: "var(--gradient-glow-purple)" }} />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projects We've Helped <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've partnered with brands across e-commerce and manufacturing to build full-funnel growth systems that deliver measurable leads, sales, and long-term visibility.
          </p>
        </AnimatedSection>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.name}
              className={`stagger-${index + 1}`}
            >
              <div className="card-premium p-6 lg:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {project.name}
                    </h3>
                    {project.website && (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors shrink-0"
                        aria-label={`Visit ${project.name} website`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.industry}
                  </span>
                </div>
                
                {/* Services */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span 
                        key={service}
                        className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-1">Challenge:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                
                {/* Solution */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-1">What we did:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                
                {/* Outcomes */}
                <div className="mt-auto pt-4 border-t border-border/30">
                  <p className="text-sm font-semibold text-foreground mb-3">Outcome Highlights:</p>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span className="text-primary font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Disclaimer */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-sm text-muted-foreground/70 italic max-w-2xl mx-auto">
            Some client data and results are summarized to respect confidentiality agreements. All outcomes shown are achieved using ScaleCraftSolutions' growth frameworks.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
