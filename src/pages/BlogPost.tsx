import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug } from "@/data/blogPosts";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import NotFound from "./NotFound";

const SITE_URL = "https://www.amarrokaudiovisual.com.br";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) return <NotFound />;

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:site_name" content="Amarrok Audiovisual Experience" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-32 pb-28">
        <div className="container max-w-3xl">

          {/* Breadcrumb */}
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.4em] uppercase font-heading text-muted-foreground hover:text-gold transition-colors mb-12"
          >
            <ArrowLeft className="h-3 w-3" />
            Blog
          </Link>

          {/* Header */}
          <header className="border-b border-border pb-12 mb-12">
            <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading mb-6">
              {post.category}
            </p>
            <h1 className="heading-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <div className="mt-8 flex items-center gap-6 text-[0.65rem] tracking-[0.3em] uppercase font-heading text-muted-foreground">
              <span>{post.date}</span>
              <span className="text-gold/40">•</span>
              <span>{post.readTime} de leitura</span>
            </div>
          </header>

          {/* Content */}
          <article className="prose-amarrok">
            {paragraphs.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="heading-section text-xl md:text-2xl text-foreground mt-14 mb-6 leading-snug">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p key={i} className="text-gold font-heading text-sm tracking-wider uppercase mt-8 mb-3">
                    {block.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(l => l.startsWith("- "));
                return (
                  <ul key={i} className="mt-6 mb-6 space-y-3">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground font-body text-base leading-relaxed">
                        <span className="text-gold mt-1 shrink-0">—</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-gold hover:opacity-70 transition-opacity underline-offset-4 underline">$1</a>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              // Regular paragraph with inline link support
              const html = block.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-gold hover:opacity-70 transition-opacity underline-offset-4 underline">$1</a>'
              );
              return (
                <p key={i} className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mt-6"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-20 border border-border bg-card/40 p-10 md:p-12 text-center">
            <p className="text-gold text-[0.65rem] tracking-[0.5em] uppercase font-heading mb-4">
              Amarrok Audiovisual Experience
            </p>
            <h3 className="heading-display text-2xl md:text-3xl text-foreground leading-tight">
              Vamos conversar sobre o seu evento.
            </h3>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto" />
            <a
              href="https://wa.me/5519984289330"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[0.7rem] tracking-[0.4em] uppercase font-heading hover:bg-primary/90 transition-colors"
            >
              Solicitar proposta
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
