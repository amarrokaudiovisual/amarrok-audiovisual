export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "led-fine-pitch-eventos-luxo",
    title: "Painéis de LED Fine Pitch: cenografia que conta histórias",
    excerpt: "Como telas de altíssima resolução transformaram a narrativa visual dos grandes eventos privados.",
    category: "Tecnologia",
    date: "12 Mar 2025",
    readTime: "5 min",
  },
  {
    slug: "rcf-italy-fidelidade-sonora",
    title: "RCF Italy: por que a engenharia italiana é referência em sonorização premium",
    excerpt: "Da curadoria de fala intimista à pista de dança: o que define um sistema de áudio realmente premium.",
    category: "Sonorização",
    date: "28 Fev 2025",
    readTime: "7 min",
  },
  {
    slug: "leitura-de-pista-dj-eventos",
    title: "Leitura de pista: a arte invisível por trás de um DJ sofisticado",
    excerpt: "Curadoria musical em tempo real, repertório cosmopolita e a conexão precisa com o perfil dos anfitriões.",
    category: "DJ & Música",
    date: "05 Fev 2025",
    readTime: "6 min",
  },
];
