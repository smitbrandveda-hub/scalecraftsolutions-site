import { useState, useEffect } from "react";
import { Calendar, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/9d9z5t2eongcospriftngpdwvhszo84d";

const goalLabelMap: Record<string, string> = {
  "lead-generation": "Lead Generation",
  "brand-awareness": "Brand Awareness",
  "sales-growth": "Sales Growth",
  "seo-rankings": "SEO Rankings",
  "social-media": "Social Media Growth",
  "other": "Other",
};

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  businessName: z
    .string()
    .trim()
    .min(2, "Business name must be at least 2 characters")
    .max(100, "Business name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must be less than 15 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  primaryGoal: z.string().min(1, "Please select your primary goal"),
});

type FormErrors = {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  primaryGoal?: string;
};

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRedirectScreen, setShowRedirectScreen] = useState(false);
  const [savedFormData, setSavedFormData] = useState({ name: "", email: "" });

  const validateField = (field: keyof FormErrors, value: string) => {
    try {
      contactSchema.shape[field].parse(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ name, businessName, email, phone, primaryGoal });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Send lead data to Make.com webhook
      const webhookPayload = {
        name: name.trim(),
        business_name: businessName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        primary_goal: goalLabelMap[primaryGoal] || primaryGoal,
        source: "ScaleCraftSolutions Landing Page",
        submitted_at: new Date().toISOString(),
      };

      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });
    } catch (error) {
      console.error("Webhook error:", error);
      // Continue with WhatsApp notification even if webhook fails
    }

    // Save form data before resetting
    setSavedFormData({ name: name.trim(), email: email.trim() });
    
    // Reset form fields
    setName("");
    setBusinessName("");
    setEmail("");
    setPhone("");
    setPrimaryGoal("");
    setIsSubmitting(false);
    
    // Show redirect screen with animation
    setShowRedirectScreen(true);
  };

  // Handle redirect after showing animation
  useEffect(() => {
    if (showRedirectScreen) {
      const timer = setTimeout(() => {
        const calendlyUrl = new URL("https://calendly.com/scalecraftsolution/30min");
        calendlyUrl.searchParams.set("name", savedFormData.name);
        calendlyUrl.searchParams.set("email", savedFormData.email);
        window.location.href = calendlyUrl.toString();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showRedirectScreen, savedFormData]);
  return (
    <Dialog open={open || showRedirectScreen} onOpenChange={(newOpen) => {
      if (!showRedirectScreen) {
        onOpenChange(newOpen);
      }
    }}>
      <AnimatePresence mode="wait">
        {showRedirectScreen ? (
          <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-xl">
            <motion.div
              key="redirect"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2 className="w-10 h-10 text-primary" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Taking you to <span className="gradient-text">Calendly</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  Book your free strategy call now...
                </p>
              </motion.div>
              
              <motion.div
                className="mt-6 flex gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </DialogContent>
        ) : open && (
          <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-xl">
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  Let's Plan Your <span className="gradient-text">Business Growth</span>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-center text-sm mt-2">
                  Share your details and our team will reach out within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateField("name", e.target.value);
                    }}
                    className={`bg-muted/50 border-border/50 focus:border-primary ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    placeholder="Your business name"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                      validateField("businessName", e.target.value);
                    }}
                    className={`bg-muted/50 border-border/50 focus:border-primary ${errors.businessName ? "border-destructive" : ""}`}
                  />
                  {errors.businessName && <p className="text-destructive text-xs">{errors.businessName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateField("email", e.target.value);
                    }}
                    className={`bg-muted/50 border-border/50 focus:border-primary ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validateField("phone", e.target.value);
                    }}
                    className={`bg-muted/50 border-border/50 focus:border-primary ${errors.phone ? "border-destructive" : ""}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryGoal">Primary Goal</Label>
                  <Select
                    value={primaryGoal}
                    onValueChange={(value) => {
                      setPrimaryGoal(value);
                      validateField("primaryGoal", value);
                    }}
                  >
                    <SelectTrigger
                      className={`bg-muted/50 border-border/50 focus:border-primary ${errors.primaryGoal ? "border-destructive" : ""}`}
                    >
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border/50">
                      <SelectItem value="lead-generation">Lead Generation</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="sales-growth">Sales Growth</SelectItem>
                      <SelectItem value="seo-rankings">SEO Rankings</SelectItem>
                      <SelectItem value="social-media">Social Media Growth</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.primaryGoal && <p className="text-destructive text-xs">{errors.primaryGoal}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default ContactFormModal;
