import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#pzf", label: "Zero Falha" },
  { href: "#led", label: "LED" },
  { href: "#som", label: "Sonorização" },
  { href: "#luz", label: "Iluminação" },
  { href: "#dj", label: "DJ" },
  { href: "#processo", label: "Processo" },
  { href: "#blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        scrolled ? "glass py-3" : "bg-[#0a0a0a]/95 backdrop-blur-sm py-5 border-b border-white/5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" aria-label="Amarrok início">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lens-flare text-xs font-heading uppercase tracking-[0.25em] text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5519982846842"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[0.7rem] uppercase tracking-[0.3em] font-heading text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-gold-foreground transition-all duration-300"
        >
          Briefing
        </a>
      </div>
    </header>
  );
};
