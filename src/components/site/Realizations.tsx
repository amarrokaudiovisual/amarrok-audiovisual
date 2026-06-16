import { SectionHeading } from "./SectionHeading";
import { Building2, Sparkles } from "lucide-react";

const fronts = [
  {
    icon: Building2,
    eyebrow: "Corporate & Business",
    title: "Eventos Corporativos",
    description:
      "Convenções, plenárias, lançamentos de produtos e painéis corporativos que exigem transmissão cristalina, telas de LED de alto impacto e pontualidade britânica.",
    items: [
      "Convenções e plenárias",
      "Lançamentos de produto",
      "Painéis e premiações",
      "Eventos híbridos com transmissão",
    ],
  },
  {
    icon: Sparkles,
    eyebrow: "Social & Celebration",
    title: "Grandes Celebrações Sociais",
    description:
      "Casamentos premium, aniversários de 15 anos e festas de gala onde a pista de dança precisa de energia máxima, iluminação cenográfica que valoriza a decoração e DJs com leitura de público em tempo real.",
    items: [
      "Casamentos premium",
      "Aniversários de 15 anos",
      "Festas de gala e formaturas",
      "Aniversários e confraternizações",
    ],
  },
];

export const Realizations = () => (
  <section id="realizacoes" className="relative py-28 md:py-36 border-y border-border bg-card/10">
    <div className="container">
      <SectionHeading
        eyebrow="O que realizamos"
        title="Duas frentes. Um mesmo padrão de excelência."
        description="Cada evento é único, mas o cuidado é sempre o mesmo: tecnologia de ponta, estrutura impecável e uma equipe que assume a responsabilidade do começo ao fim."
      />

      <div className="mt-20 grid gap-px bg-border border border-border md:grid-cols-2">
        {fronts.map((f) => (
          <div
            key={f.title}
            className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_8px_hsl(var(--red)/0.8)]" />
            <f.icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
            <p className="mt-6 text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading">
              {f.eyebrow}
            </p>
            <h3 className="mt-4 heading-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors leading-tight">
              {f.title}
            </h3>
            <div className="mt-5 h-px w-14 bg-primary/70" />
            <p className="mt-6 text-muted-foreground text-base leading-relaxed font-body">
              {f.title === "Grandes Celebrações Sociais" ? (
                <>
                  <a
                    href="https://www.bandabarbiekills.com.br/casamentos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline underline-offset-4 transition-colors"
                  >
                    Casamentos premium
                  </a>
                  , aniversários de 15 anos e festas de gala onde a pista de dança precisa de energia máxima, iluminação cenográfica que valoriza a decoração e DJs com leitura de público em tempo real.
                </>
              ) : (
                f.description
              )}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {f.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-xs uppercase tracking-[0.18em] font-heading text-foreground/80">
                  <span className="mt-2 h-px w-4 bg-gold flex-shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);