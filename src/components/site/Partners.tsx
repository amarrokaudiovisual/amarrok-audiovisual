import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "Banda Barbie Kills",
    role: "Parceira Musical — Casamentos e Eventos Corporativos",
    description:
      "14 anos de estrada, mais de 600 shows realizados e uma presença de palco que transforma qualquer festa em espetáculo. A Barbie Kills é a parceira musical da Amarrok para casamentos premium e eventos corporativos de alto padrão em Campinas e SP. Enquanto a Amarrok cuida do som, da luz e do LED, a Barbie Kills ocupa o palco com energia e repertório sob medida.",
    href: "https://www.bandabarbiekills.com.br/cidade/banda-casamento-campinas",
    label: "bandabarbiekills.com.br",
  },
  {
    name: "DJ Alexandre AS",
    role: "Parceiro Musical — Trilha Sonora e Pós-Show",
    description:
      "DJ com leitura de público apurada e curadoria de repertório construída para cada evento. Alexandre AS integra o ecossistema Amarrok para cobrir a trilha sonora do recepcionar ao after, com transições fluidas e energia constante do começo ao fim.",
    href: "https://www.djalexandreas.com.br",
    label: "djalexandreas.com.br",
  },
];

export const Partners = () => (
  <section id="parceiros" className="relative py-28 md:py-36 border-y border-border bg-background">
    <div className="container">
      <SectionHeading
        eyebrow="Ecossistema"
        title="Parceiros que completam o evento."
        description="Audiovisual impecável é metade da equação. A outra metade é quem está no palco e na cabine. A Amarrok trabalha com parceiros musicais selecionados para garantir que cada evento seja completo do começo ao fim."
      />

      <div className="mt-20 grid gap-px bg-border border border-border md:grid-cols-2">
        {partners.map((p) => (
          <div
            key={p.name}
            className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_8px_hsl(var(--red)/0.8)]" />

            <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading">
              {p.role}
            </p>

            <h3 className="mt-4 heading-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors leading-tight">
              {p.name}
            </h3>

            <div className="mt-5 h-px w-14 bg-primary/70" />

            <p className="mt-6 text-muted-foreground text-base leading-relaxed font-body">
              {p.description}
            </p>

            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-xs text-gold uppercase tracking-[0.25em] font-heading hover:opacity-70 transition-opacity"
            >
              {p.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
