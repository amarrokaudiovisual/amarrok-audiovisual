import { MapPin, MessageCircle, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const Location = () => (
  <section id="contato" className="relative py-28 md:py-40">
    <div className="container">
      <SectionHeading
        eyebrow="Contato"
        title="Onde a experiência começa"
      />

      <div className="mt-20 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="glass p-10 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <MapPin className="h-6 w-6 text-gold" strokeWidth={1.2} />
          <h3 className="mt-6 heading-section text-xl text-foreground">Localização</h3>
          <div className="mt-6 h-px w-12 bg-primary shadow-[0_0_8px_hsl(var(--red)/0.6)]" />
          <p className="mt-6 text-foreground/90 text-base leading-relaxed font-body">
            Av. Paulo Provenza Sobrinho, 888
          </p>
          <p className="text-muted-foreground text-base leading-relaxed font-body">
            Jardim Campos Eliseos
            <br />
            Campinas — SP
          </p>
        </div>

        <div className="glass p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_10px_hsl(var(--red)/0.5)]" />
          <MessageCircle className="h-6 w-6 text-gold" strokeWidth={1.2} />
          <h3 className="mt-6 heading-section text-xl text-foreground">Fale Conosco</h3>
          <div className="mt-6 h-px w-12 bg-primary shadow-[0_0_8px_hsl(var(--red)/0.6)]" />
          <p className="mt-6 text-muted-foreground text-sm font-body">
            Atendimento personalizado para projetos exclusivos.
          </p>
          <a
            href="https://wa.me/5519982846842?text=Ol%C3%A1%20Amarrok%2C%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-primary bg-background text-xs uppercase tracking-[0.3em] font-heading text-foreground transition-all duration-500 hover:shadow-laser hover:bg-primary/10"
          >
            <MessageCircle className="h-4 w-4" />
            <span>(19) 98284-6842</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);
