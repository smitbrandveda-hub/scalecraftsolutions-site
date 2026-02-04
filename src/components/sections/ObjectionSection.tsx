import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objections = [
  {
    question: "Will this work for my business?",
    answer: "Our strategies are customized for each business. Whether you're a D2C brand, e-commerce seller, SaaS company, or service provider, we analyze your unique market, audience, and goals to build a growth system that fits your specific needs."
  },
  {
    question: "Is this just another agency?",
    answer: "We're not a traditional agency that focuses on vanity metrics. We build integrated growth systems focused on revenue outcomes. Our approach connects strategy, execution, and measurement into a unified system designed for scalable, profitable growth."
  },
  {
    question: "Do I need a large budget to start?",
    answer: "We work with businesses at various stages and budgets. Our approach is flexible and scalable — we help you start with what makes sense for your current stage and scale as you grow and see results."
  },
  {
    question: "How soon can I expect results?",
    answer: "Initial optimizations and improvements typically show within 4-8 weeks. Significant, sustainable growth builds over 3-6 months as we optimize and scale your campaigns based on data."
  },
  {
    question: "What investment is required?",
    answer: "Investment varies based on your goals, market, and growth stage. We offer flexible engagement models and will recommend an approach that fits your budget and objectives during our initial consultation."
  },
  {
    question: "Is this better than hiring in-house?",
    answer: "We provide the expertise of an entire growth team at a fraction of the cost of building one in-house. Plus, you get immediate access to proven systems, tools, and strategies without the learning curve."
  },
  {
    question: "Will this work in my industry?",
    answer: "We've worked across 30+ industries including D2C, e-commerce, SaaS, services, healthcare, education, and more. Our frameworks are adaptable while our execution is tailored to your specific market dynamics."
  }
];

const ObjectionSection = () => {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common <span className="gradient-text">Concerns</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`objection-${index}`}
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

export default ObjectionSection;
