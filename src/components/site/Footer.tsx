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
          Áreas Atendidas
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

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/amarrok_producoes/"
            target="_blank"
            rel="noopener noreferrer external"
            aria-label="Instagram da Amarrok Audiovisual"
            className="text-muted-foreground/60 hover:text-gold transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wider font-body">
          © {new Date().getFullYear()} Amarrok Audiovisual Experience. Todos os direitos reservados.
        </p>
        <p className="mt-3 text-[0.7rem] text-muted-foreground/70 tracking-wider font-body">
          Parceiros:{" "}
          <a
            href="https://www.bandabarbiekills.com.br"
            target="_blank"
            rel="noopener noreferrer external"
            className="text-muted-foreground/80 hover:text-gold transition-colors underline-offset-4 hover:underline"
          >
            Banda Barbie Kills
          </a>
          <span className="mx-2 text-muted-foreground/40" aria-hidden="true">|</span>
          <a
            href="https://www.djalexandreas.com.br"
            target="_blank"
            rel="noopener noreferrer external"
            className="text-muted-foreground/80 hover:text-gold transition-colors underline-offset-4 hover:underline"
          >
            DJ Alexandre AS
          </a>
        </p>
      </div>
    </div>
  </footer>
);
