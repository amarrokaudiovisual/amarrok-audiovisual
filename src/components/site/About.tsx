export const About = () => (
  <section id="sobre" className="relative py-28 md:py-40">
    <div className="container">

      {/* Eyebrow */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">Sobre</p>
        <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl leading-tight">
          Mais de 15 anos construindo experiências audiovisuais
        </h2>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
      </div>

      {/* Stats bar */}
      <div className="mt-16 grid gap-px bg-border border border-border md:grid-cols-3">
        {[
          { number: "+1.600", label: "Eventos realizados" },
          { number: "2011", label: "Início das atividades" },
          { number: "Campinas", label: "e interior de São Paulo" },
        ].map((s) => (
          <div key={s.label} className="bg-background p-8 md:p-10 text-center">
            <p className="heading-display text-3xl md:text-4xl text-gold">{s.number}</p>
            <p className="mt-2 text-xs text-muted-foreground tracking-[0.3em] uppercase font-heading">{s.label}</p>
          </div>
        ))}
      </div>

      {/* História */}
      <div className="mt-20 grid gap-16 md:grid-cols-2 items-start max-w-5xl mx-auto">
        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">A história</p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-body">
            A Amarrok nasceu muito antes da formalização da empresa. O fundador Lucas Amarrok cresceu num ambiente onde sonorização e iluminação eram parte do dia a dia — influência direta de seu pai, que mantinha o hobby mesmo atuando como mecânico.
          </p>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed font-body">
            Em 2011, Lucas começou a atuar como DJ — conhecido no mercado como DJ Lucas Amarrok — realizando pequenos eventos para amigos e festas de bairro em Campinas. Com o tempo, o trabalho ganhou reconhecimento e surgiram oportunidades em aniversários, bodas, casamentos e eventos corporativos. A cada novo projeto, o investimento em estrutura, conhecimento e profissionalização crescia junto.
          </p>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed font-body">
            Em 2021, nasceu oficialmente a Amarrok Audiovisual Experience, consolidando uma trajetória de dez anos construída evento a evento. Desde então, a empresa atende eventos sociais e corporativos de diversos portes em Campinas e no interior de São Paulo — com clientes como Sicredi e Bradesco entre os projetos corporativos realizados.
          </p>
        </div>

        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">O que entregamos</p>
          <div className="space-y-px bg-border border border-border">
            {[
              { k: "01", t: "Engenharia Sonora", d: "Sistemas RCF Italy com redundância ativa. Cobertura total e clareza vocal em qualquer ponto do espaço." },
              { k: "02", t: "Design de Iluminação", d: "Iluminação cênica, arquitetural e corporativa calibrada para fotografia, vídeo e transmissão." },
              { k: "03", t: "Painéis de LED Fine Pitch", d: "Telões de ultra definição para plenárias, palcos e cenografia. Imagem nítida mesmo de perto." },
              { k: "04", t: "DJ para Eventos Premium", d: "Curadoria de repertório sob medida. Leitura de público em tempo real do início ao fim." },
            ].map((i) => (
              <div key={i.k} className="bg-background p-6 md:p-8 group hover:bg-card transition-colors duration-500">
                <div className="text-gold/40 font-display text-xs tracking-[0.4em]">{i.k}</div>
                <h3 className="mt-3 heading-section text-lg text-foreground group-hover:text-gold transition-colors">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fundador */}
      <div className="mt-20 max-w-5xl mx-auto border border-border bg-card/20 p-10 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-background">
              <span className="text-gold font-heading text-lg tracking-widest">LA</span>
            </div>
          </div>
          <div>
            <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading">Fundador</p>
            <h3 className="mt-2 heading-section text-xl text-foreground">Lucas Amarrok</h3>
            <p className="mt-1 text-xs text-muted-foreground tracking-[0.3em] uppercase font-heading">DJ · Produtor · Engenheiro de Eventos</p>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-body max-w-2xl">
              Com mais de 15 anos no mercado de eventos — iniciando como DJ Lucas Amarrok em 2011 — Lucas lidera a Amarrok com visão técnica e sensibilidade artística. Do projeto em 3D à operação ao vivo, cada evento recebe atenção direta de quem construiu a empresa do zero.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);
