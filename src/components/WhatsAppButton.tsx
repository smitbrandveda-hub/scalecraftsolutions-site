import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=919909290923&text=Hello%21%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.%20Please%20share%20the%20details.%20Thank%20you%21";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
