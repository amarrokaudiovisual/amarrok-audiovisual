import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { blogPosts } from "@/data/blogPosts";

export const Blog = () => (
  <section id="blog" className="relative py-28 md:py-40 bg-card/30">
    <div className="container">
      <SectionHeading
        eyebrow="Blog"
        title="Notas do Estúdio"
        description="Insights, bastidores e referências sobre o universo audiovisual de alto padrão."
      />

      <div className="mt-20 grid gap-px bg-border border border-border md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500 cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700 shadow-[0_0_8px_hsl(var(--red)/0.8)]" />
            <div className="flex items-center justify-between text-[0.65rem] tracking-[0.3em] uppercase font-heading text-muted-foreground">
              <span className="text-gold">{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="mt-8 heading-section text-xl text-foreground leading-snug group-hover:text-gold transition-colors min-h-[5rem]">
              {post.title}
            </h3>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase font-heading text-muted-foreground">
                {post.date}
              </span>
              <span className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.25em] font-heading">
                Ler
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-muted-foreground tracking-[0.3em] uppercase font-heading">
        Novos artigos em breve
      </p>
    </div>
  </section>
);
