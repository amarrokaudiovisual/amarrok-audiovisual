import { SectionHeading } from "./SectionHeading";

export const About = () => (
  <section id="sobre" className="relative py-28 md:py-40">
    <div className="container">
      <SectionHeading
        eyebrow="Sobre"
        title="Engenharia de Experiências Audiovisuais"
        description="Somos parceiros de quem não aceita improviso: do lançamento corporativo ao casamento dos sonhos, do palco da convenção à pista do aniversário de 15 anos. Cuidamos de cada detalhe técnico nos bastidores para que, na frente, só restem aplausos, fotos perfeitas e a certeza de que tudo saiu como você sonhou."
      />

      <div className="mt-20 grid gap-px bg-border md:grid-cols-3 border border-border">
        {[
          { k: "01", t: "Engenharia Sonora", d: "Sistemas RCF Italy com redundância" },
          { k: "02", t: "Design de Iluminação", d: "Cênica, arquitetural e corporativa" },
          { k: "03", t: "LED Fine Pitch", d: "Plenárias, palcos e cenografia" },
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
