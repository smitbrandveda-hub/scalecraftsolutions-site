import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/* -------------------- VALIDATION -------------------- */

const contactSchema = z.object({
  name: z.string().trim().min(2),
  businessName: z.string().trim().min(2),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(15)
    .regex(/^[+]?[\d\s-]+$/),
  primaryGoal: z.string().min(1),
});

type FormErrors = {
  name?: string;
  businessName?: string;
  phone?: string;
  primaryGoal?: string;
};

/* -------------------- WEBHOOK -------------------- */

const N8N_WEBHOOK_URL = "https://n8n.scalecraftsolution.in/webhook-test/65a4cde6-c32b-4f99-b6fd-ef4d6fa27b3c";

/* -------------------- GOAL LABELS -------------------- */

const goalLabelMap: Record<string, string> = {
  "lead-generation": "Lead Generation",
  "brand-awareness": "Brand Awareness",
  "sales-growth": "Sales Growth",
  "seo-rankings": "SEO Rankings",
  "social-media": "Social Media Growth",
  other: "Other",
};

/* -------------------- COMPONENT -------------------- */

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({
      name,
      businessName,
      phone,
      primaryGoal,
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof FormErrors] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      /* -------- SEND TO n8n -------- */

      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          business_name: businessName.trim(),
          phone: phone.trim(),
          primary_goal: goalLabelMap[primaryGoal],
          source: "Lovable Landing Page",
          submitted_at: new Date().toISOString(),
        }),
      });

      /* -------- WHATSAPP ALERT -------- */

      const whatsappNumber = "919909290923";
      const message = `*New Lead Alert!*

*Name:* ${name}
*Business Name:* ${businessName}
*Phone:* ${phone}
*Primary Goal:* ${goalLabelMap[primaryGoal]}
*Submitted:* ${new Date().toLocaleString()}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

      /* -------- RESET -------- */

      setName("");
      setBusinessName("");
      setPhone("");
      setPrimaryGoal("");

      onOpenChange(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogContent className="sm:max-w-md border-border/50 bg-card/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  Let's Plan Your <span className="gradient-text">Business Growth</span>
                </DialogTitle>
                <DialogDescription className="text-center text-sm mt-2">
                  Share your details and our team will reach out within 24 hours.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <Label>Name</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                  <Label>Business Name</Label>
                  <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                  <Label>Primary Goal</Label>
                  <Select value={primaryGoal} onValueChange={setPrimaryGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lead-generation">Lead Generation</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="sales-growth">Sales Growth</SelectItem>
                      <SelectItem value="seo-rankings">SEO Rankings</SelectItem>
                      <SelectItem value="social-media">Social Media Growth</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full py-6" disabled={isSubmitting}>
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
