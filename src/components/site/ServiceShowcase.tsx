import { cn } from "@/lib/utils";

interface Feature { title: string; description: string; }
interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  features: Feature[];
  reverse?: boolean;
}

export const ServiceShowcase = ({ id, eyebrow, title, description, image, features, reverse }: Props) => (
  <section id={id} className="relative py-24 md:py-36">
    <div className="container">
      <div className={cn("grid gap-12 md:gap-16 items-center md:grid-cols-2", reverse && "md:[&>div:first-child]:order-2")}>
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
          <div className="relative overflow-hidden border border-gold/15">
            <img
              src={image}
              alt={title}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px laser-line opacity-70" />
          </div>
        </div>

        <div>
          <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-5 font-heading">{eyebrow}</p>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl leading-tight">{title}</h2>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
          <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed font-body">{description}</p>

          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.title} className="group/item flex gap-5 pb-6 border-b border-border last:border-0">
                <span className="mt-2 h-px w-8 bg-primary shadow-[0_0_8px_hsl(var(--red)/0.8)] flex-shrink-0 transition-all duration-500 group-hover/item:w-12" />
                <div>
                  <h3 className="heading-section text-base text-gold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
