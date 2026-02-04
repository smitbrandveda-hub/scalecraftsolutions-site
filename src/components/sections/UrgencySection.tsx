import AnimatedSection from "@/components/ui/AnimatedSection";
import { Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-secondary" />
            <span className="text-secondary font-semibold">Limited Availability</span>
          </div>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            To maintain performance quality, we work with a limited number of brands at a time.
          </p>
          <p className="text-muted-foreground mt-2">
            Once onboarding slots are filled, new growth audits are paused.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default UrgencySection;
