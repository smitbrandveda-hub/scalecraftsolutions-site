import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Target, Users, Briefcase, RefreshCw } from "lucide-react";

const stats = [
  { icon: Target, value: 500, suffix: "+", label: "Growth campaigns executed" },
  { icon: Briefcase, value: 30, suffix: "+", label: "Industries served" },
  { icon: Users, value: 150, suffix: "+", label: "Revenue systems built" },
  { icon: RefreshCw, value: 1000, suffix: "+", label: "Optimization cycles completed" },
];

const CountUpNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const steps = 80;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.3,
    },
  },
};

const AuthoritySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative" id="results" ref={sectionRef}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, hsl(174 100% 50% / 0.1) 0%, transparent 60%)" }}
      />
      
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{ background: "radial-gradient(circle at center, hsl(174 100% 50% / 0.15) 0%, transparent 50%)" }}
        animate={isInView ? { opacity: [0, 0.5, 0.2] } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={cardVariants}
              className="card-premium p-6 text-center"
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <CountUpNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <motion.p 
                className="text-muted-foreground text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
