import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you guarantee results?",
    answer: "We don't promise fake numbers. We commit to clear KPIs, transparent reporting and performance-driven execution."
  },
  {
    question: "Do you work with global clients?",
    answer: "Yes. We serve businesses across India and international markets with scalable growth strategies."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No rigid lock-ins. Our clients stay because of results, not contracts."
  },
  {
    question: "Which platforms do you specialize in?",
    answer: "Meta Ads, Google Ads, SEO, Amazon, Flipkart, Meesho and conversion-focused websites."
  }
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-16 relative" id="faq">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="card-premium border border-border/50 px-6 rounded-xl"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
