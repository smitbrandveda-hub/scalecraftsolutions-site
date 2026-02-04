import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      {/* Subtle Background Effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(190 85% 75% / 0.3) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(270 80% 80% / 0.25) 0%, transparent 70%)" }}
      />

      <div className="section-container relative z-10 text-center py-20">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-gray-900">
            We Build <span className="gradient-text">Revenue-Focused</span>
            <br />
            Growth Systems for <span className="gradient-text">Ambitious</span>
            <br />
            <span className="gradient-text">Brands</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            ScaleCraftSolutions is a full-stack digital growth agency helping startups, D2C brands, enterprises and
            global businesses scale through performance marketing, SEO, e-commerce & conversion-focused execution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onOpenModal} variant="gradient" size="lg" className="font-semibold px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button asChild variant="gradient" size="lg" className="font-semibold px-8 py-6 text-lg">
              <a
                href="https://api.whatsapp.com/send?phone=919909290923&text=Hello%21%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20share%20the%20details.%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Us
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
