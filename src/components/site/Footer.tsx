import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="relative border-t border-border py-16">
    <div className="container">
      <div className="flex flex-col items-center text-center">
        <Logo withTagline />
        <div className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <p className="mt-8 text-xs text-muted-foreground tracking-[0.3em] uppercase font-heading">
          Campinas · São Paulo · Brasil
        </p>
        <p className="mt-4 text-xs text-muted-foreground/60 tracking-wider font-body">
          © {new Date().getFullYear()} Amarrok Audiovisual Experience. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);
