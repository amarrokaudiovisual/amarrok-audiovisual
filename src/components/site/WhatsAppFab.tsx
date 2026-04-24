import { MessageCircle } from "lucide-react";

const PHONE = "5519982846842";
const MESSAGE = "Olá Amarrok, gostaria de um orçamento para um evento.";

export const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition-all animate-laser-pulse" />
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-background text-gold shadow-laser transition-all duration-500 hover:scale-110 hover:border-gold hover:text-primary-foreground hover:bg-primary">
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
    </span>
    <span className="sr-only">WhatsApp 19 98284-6842</span>
  </a>
);
