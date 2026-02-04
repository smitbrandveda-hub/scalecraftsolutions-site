import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface NavbarProps {
  onOpenModal: () => void;
}
const Navbar = ({
  onOpenModal
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    name: "Services",
    href: "#services"
  }, {
    name: "Our Growth Method",
    href: "#framework"
  }, {
    name: "Our Projects",
    href: "#projects"
  }, {
    name: "FAQ",
    href: "#faq"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="gradient-text border-0 border-none rounded-none opacity-100 text-3xl font-bold">
            ScaleCraftSolutions
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-base">
                {link.name}
              </a>)}
            <Button onClick={onOpenModal} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background border-b border-border/50">
            <div className="section-container py-4 space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </a>)}
              <Button onClick={() => {
            setIsOpen(false);
            onOpenModal();
          }} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Get Started
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};
export default Navbar;