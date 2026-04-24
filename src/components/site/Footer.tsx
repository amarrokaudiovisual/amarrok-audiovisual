import { Logo } from "./Logo";

const servicedAreas = [
  "Campinas", "São Paulo", "Alphaville", "Barueri", "Holambra", "Itu",
  "Jundiaí", "Indaiatuba", "Vinhedo", "Valinhos", "Sorocaba", "Paulínia",
  "Piracicaba", "Americana", "Louveira", "Jaguariúna", "Atibaia",
  "Bragança Paulista", "São Caetano do Sul", "Limeira", "Santana de Parnaíba",
];

export const Footer = () => (
  <footer className="relative border-t border-border py-16">
    <div className="container">
      <div className="flex flex-col items-center text-center">
        <Logo withTagline />
        <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <p className="mt-10 text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading">
          — Áreas Atendidas —
        </p>
        <ul className="mt-6 max-w-3xl flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground tracking-[0.15em] uppercase font-heading">
          {servicedAreas.map((area, i) => (
            <li key={area} className="flex items-center gap-3">
              <span>{area}</span>
              {i < servicedAreas.length - 1 && (
                <span aria-hidden="true" className="text-gold/40">•</span>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-xs text-muted-foreground/60 tracking-wider font-body">
          © {new Date().getFullYear()} Amarrok Audiovisual Experience. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);
