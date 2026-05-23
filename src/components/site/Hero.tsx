import heroImg from "@/assets/hero-stage.jpg";
import logo from "@/assets/amarrok-logo.png";

export const Hero = () => (
  <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
    {/* Background fog image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover opacity-70 animate-fog-drift"
      />
      <div className="absolute inset-0 bg-gradient-fog" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
    </div>

    {/* Content */}
    <div className="relative z-10 container text-center animate-fade-in-up">
      <p className="text-gold/80 text-[0.65rem] md:text-xs tracking-[0.5em] uppercase mb-8 font-heading">
        Engenharia de Experiências Audiovisuais
      </p>
      <h1 className="flex justify-center">
        <img
          src={logo}
          alt="Amarrok"
          style={{
            mixBlendMode: "screen",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, #000 55%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 60% 70% at 50% 50%, #000 55%, transparent 100%)",
          }}
          className="h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96 w-auto object-contain drop-shadow-[0_0_60px_hsl(var(--gold)/0.25)]"
        />
      </h1>
      <div className="mt-10 mx-auto max-w-md">
        <div className="laser-line animate-laser-pulse" />
      </div>
      <p className="mt-12 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed font-body">
        Tecnologia de ponta, estrutura impecável e curadoria artística para
        transformar eventos corporativos e grandes celebrações sociais em
        memórias inesquecíveis.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
        <a
          href="#contato"
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-primary bg-background text-xs uppercase tracking-[0.3em] font-heading text-foreground transition-all duration-500 hover:shadow-laser hover:bg-gradient-to-r hover:from-background hover:to-primary/20"
        >
          <span>Planejar meu evento</span>
          <span className="h-px w-6 bg-primary transition-all group-hover:w-10" />
        </a>
        <a
          href="#pzf"
          className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-heading text-gold border border-gold/30 px-8 py-4 hover:bg-gold/5 hover:border-gold transition-all duration-300"
        >
          Protocolo Zero Falha
        </a>
      </div>
    </div>

    {/* Bottom laser line */}
    <div className="absolute bottom-0 inset-x-0 h-px laser-line animate-laser-pulse" />
  </section>
);
