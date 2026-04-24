import { SectionHeading } from "./SectionHeading";

export const About = () => (
  <section id="sobre" className="relative py-28 md:py-40">
    <div className="container">
      <SectionHeading
        eyebrow="Sobre"
        title="Experiência Sensorial de Alto Padrão"
        description="Transformamos celebrações exclusivas em memórias inesquecíveis através da convergência perfeita entre tecnologia de ponta e curadoria artística. Nosso compromisso é entregar uma estética impecável e uma sonoridade cristalina, desenhadas sob medida para o público mais exigente."
      />

      <div className="mt-20 grid gap-px bg-border md:grid-cols-3 border border-border">
        {[
          { k: "01", t: "Sonorização", d: "RCF Italy" },
          { k: "02", t: "Iluminação", d: "Cênica & Arquitetural" },
          { k: "03", t: "LED Fine Pitch", d: "Cinema Quality" },
        ].map((i) => (
          <div key={i.k} className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500">
            <div className="text-gold/40 font-display text-xs tracking-[0.4em]">{i.k}</div>
            <h3 className="mt-4 heading-section text-2xl text-foreground group-hover:text-gold transition-colors">{i.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground font-body tracking-wider">{i.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
