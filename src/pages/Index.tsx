import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import EmpathySection from "@/components/sections/EmpathySection";
import StruggleSection from "@/components/sections/StruggleSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import USPSection from "@/components/sections/USPSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import TransformationSection from "@/components/sections/TransformationSection";
import DesireSection from "@/components/sections/DesireSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ProofSection from "@/components/sections/ProofSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import FoundersSection from "@/components/sections/FoundersSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ObjectionSection from "@/components/sections/ObjectionSection";
import FAQSection from "@/components/sections/FAQSection";

import { FinalCTASection } from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactFormModal from "@/components/ContactFormModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <Helmet>
        <title>ScaleCraftSolutions | Revenue-Focused Growth Systems for Ambitious Brands</title>
        <meta 
          name="description" 
          content="ScaleCraftSolutions is a full-stack digital growth agency helping startups, D2C brands, enterprises and global businesses scale through performance marketing, SEO, e-commerce & conversion-focused execution." 
        />
        <meta name="keywords" content="performance marketing, digital marketing agency, SEO, PPC, Meta Ads, Google Ads, e-commerce, growth agency, D2C marketing" />
        <link rel="canonical" href="https://scalecraftsolutions.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar onOpenModal={openModal} />
        
        {/* 1. HERO + ATTENTION */}
        <div className="section-divider">
          <HeroSection onOpenModal={openModal} />
        </div>
        
        {/* 3. EMPATHY - Connection */}
        <div className="section-divider">
          <EmpathySection />
        </div>
        
        {/* 4. STRUGGLE */}
        <div className="section-divider">
          <StruggleSection />
        </div>
        
        {/* 5. OPPORTUNITY VEHICLE - What We Help You Achieve */}
        <div className="section-divider">
          <AchievementsSection />
        </div>
        
        {/* 6. USP - Unique Selling Proposition */}
        <div className="section-divider">
          <USPSection />
        </div>
        
        {/* 7. BEFORE vs AFTER */}
        <div className="section-divider">
          <BeforeAfterSection />
        </div>
        
        {/* 8. INTEREST - Services */}
        <div className="section-divider">
          <ServicesSection />
        </div>
        
        {/* 9. FRAMEWORK */}
        <div className="section-divider">
          <FrameworkSection />
        </div>
        
        {/* 10. TRANSFORMATION */}
        <div className="section-divider">
          <TransformationSection />
        </div>
        
        {/* 11. DESIRE */}
        <div className="section-divider">
          <DesireSection />
        </div>
        
        {/* 12. COMPARISON */}
        <div className="section-divider">
          <ComparisonSection />
        </div>
        
        {/* 14. PROOF OF RESULT */}
        <div className="section-divider">
          <ProofSection />
        </div>
        
        {/* 15. PROJECTS SHOWCASE */}
        <div className="section-divider">
          <ProjectsSection />
        </div>
        
        {/* 16. FOUNDERS */}
        <div className="section-divider">
          <FoundersSection />
        </div>
        
        {/* Case Studies / Results */}
        <div className="section-divider">
          <ResultsSection />
        </div>
        
        {/* 16. OBJECTION HANDLING */}
        <div className="section-divider">
          <ObjectionSection />
        </div>
        
        {/* 17. FAQ */}
        <div className="section-divider">
          <FAQSection />
        </div>
        
        {/* 20. ACTION - Final CTA */}
        <FinalCTASection onOpenModal={openModal} />
        
        {/* 21. Footer with Disclaimer */}
        <Footer onOpenModal={openModal} />
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
        
        {/* Contact Form Modal */}
        <ContactFormModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </>
  );
};

export default Index;
