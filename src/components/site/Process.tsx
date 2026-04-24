import { SectionHeading } from "./SectionHeading";
import { Compass, Box, Users, PlayCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Briefing Consultivo",
    description: "Imersão no objetivo do evento, KPIs de marca e expectativa de audiência. Tradução estratégica em rider técnico.",
  },
  {
    n: "02",
    icon: Box,
    title: "Projeto Técnico em 3D",
    description: "Layout de palco, posicionamento de PA, mapa de luz e simulação do ambiente entregues como render antes da execução.",
  },
  {
    n: "03",
    icon: Users,
    title: "Matilha em Operação",
    description: "Equipe especializada por função, coordenada por um produtor técnico dedicado. Estratégia, hierarquia e disciplina.",
  },
  {
    n: "04",
    icon: PlayCircle,
    title: "Show Call & Pós-Evento",
    description: "Operação ao vivo sob script de showcall, debrief técnico e relatório de entrega para o cliente corporativo.",
  },
];

export const Process = () => (
  <section id="processo" className="relative py-28 md:py-36">
    <div className="container">
      <SectionHeading
        eyebrow="Processo"
        title="A Matilha por trás de cada evento"
        description="Não somos uma locadora de equipamentos. Operamos como uma engenharia industrial com entrega de luxo: cada projeto passa por quatro etapas de disciplina técnica, do briefing ao showcall."
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
          Todo projeto corporativo Amarrok inclui desenho técnico prévio,
          simulação 3D do palco e ART de responsabilidade técnica quando aplicável.
          Você aprova o evento antes dele acontecer.
        </p>
      </div>
    </div>
  </section>
);