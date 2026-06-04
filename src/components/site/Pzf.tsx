import { ShieldCheck, Layers, Wrench } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Som com Plano B Ativo",
    description: "Mesa principal e reserva sincronizadas. Se algo falhar, a troca acontece em milissegundos e ninguém percebe.",
  },
  {
    icon: Layers,
    title: "LED e Luz Duplicados",
    description: "Equipamentos críticos de luz e imagem com reserva pronta para assumir, sem interromper o evento.",
  },
  {
    icon: Wrench,
    title: "Equipe Reserva no Local",
    description: "Técnicos especialistas posicionados durante todo o evento, prontos para resolver qualquer imprevisto em segundos.",
  },
];

export const Pzf = () => (
  <section id="pzf" className="relative py-24 md:py-32 border-y border-border bg-card/20">
    <div className="container">
      <div className="grid gap-14 md:grid-cols-12 items-center">
        {/* Selo */}
        <div className="md:col-span-4 flex md:justify-start justify-center">
          <div className="relative w-60 h-60 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-gold/30" />
            <div className="absolute inset-3 rounded-full border border-gold/15" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-gold/5 blur-2xl" />
            <div className="relative text-center">
              <ShieldCheck className="mx-auto h-9 w-9 text-gold" strokeWidth={1.2} />
              <p className="mt-4 text-[0.6rem] tracking-[0.45em] uppercase font-heading text-gold/80">
                Protocolo
              </p>
              <p className="mt-1 heading-display text-2xl text-foreground leading-tight">
                Zero Falha
              </p>
              <div className="mx-auto mt-3 h-px w-10 bg-primary shadow-[0_0_8px_hsl(var(--red)/0.8)]" />
              <p className="mt-3 text-[0.55rem] tracking-[0.4em] uppercase font-heading text-muted-foreground">
                PZF · Amarrok
              </p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-8">
          <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">
            Garantia Operacional
          </p>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl leading-tight">
            Seu evento não pode parar. E não vai.
          </h2>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed font-body max-w-2xl">
            Seu evento é único e não tem ensaio. Por isso, trabalhamos com
            sistemas de backup ativos em som, luz e painéis de LED. Se o plano A
            falhar, o plano B assume em milissegundos, sem que seus convidados
            percebam nada.
          </p>
        </div>
      </div>

      {/* Faixa compacta de pilares */}
      <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="bg-background p-6 md:p-7 group hover:bg-card transition-colors duration-500">
            <p.icon className="h-5 w-5 text-gold" strokeWidth={1.3} />
            <h3 className="mt-4 heading-section text-sm text-foreground group-hover:text-gold transition-colors">
              {p.title}
            </h3>
            <p className="mt-3 text-xs text-muted-foreground font-body leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);