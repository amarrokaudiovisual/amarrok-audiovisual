import { SectionHeading } from "./SectionHeading";
import { Compass, Box, Users, PlayCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Conversa de Imersão",
    description: "Entendemos o objetivo do evento, o público esperado e o sentimento que você quer despertar nos convidados.",
  },
  {
    n: "02",
    icon: Box,
    title: "Projeto Visual em 3D",
    description: "Você vê o palco, as luzes e os painéis em uma simulação realista antes do evento acontecer. Sem surpresas no dia.",
  },
  {
    n: "03",
    icon: Users,
    title: "Equipe Coordenada",
    description: "Equipe especialista por função, sob a coordenação de um produtor técnico dedicado ao seu evento do início ao fim.",
  },
  {
    n: "04",
    icon: PlayCircle,
    title: "Cronograma Milimétrico",
    description: "Operação ao vivo seguindo um cronograma minucioso, com entrega sem surpresas e acompanhamento pós-evento.",
  },
];

export const Process = () => (
  <section id="processo" className="relative py-28 md:py-36">
    <div className="container">
      <SectionHeading
        eyebrow="Processo"
        title="Como conduzimos cada evento"
        description="Não somos uma locadora de equipamentos. Somos parceiros do começo ao fim, com quatro etapas de cuidado para que o seu evento seja exatamente como você imaginou."
      />

      <div className="mt-20 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_8px_hsl(var(--red)/0.8)]" />
            <div className="flex items-center justify-between">
              <span className="text-gold/40 font-display text-xs tracking-[0.4em]">{s.n}</span>
              <s.icon className="h-5 w-5 text-gold" strokeWidth={1.3} />
            </div>
            <h3 className="mt-8 heading-section text-base text-foreground group-hover:text-gold transition-colors">
              {s.title}
            </h3>
            <div className="mt-4 h-px w-10 bg-primary/70" />
            <p className="mt-5 text-sm text-muted-foreground font-body leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-[0.65rem] tracking-[0.5em] uppercase font-heading text-gold/80">
          Entrega Consultiva
        </p>
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed font-body">
          Todo projeto Amarrok, corporativo ou social, inclui projeto prévio,
          simulação 3D do palco e segurança certificada nas estruturas.
          Você aprova o seu evento antes dele acontecer.
        </p>
      </div>
    </div>
  </section>
);