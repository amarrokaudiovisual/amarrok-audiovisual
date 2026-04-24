import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { ServiceShowcase } from "@/components/site/ServiceShowcase";
import { Blog } from "@/components/site/Blog";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

import ledImg from "@/assets/service-led.jpg";
import soundImg from "@/assets/service-sound.jpg";
import lightImg from "@/assets/service-light.jpg";
import djImg from "@/assets/service-dj.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />

        <ServiceShowcase
          id="led"
          eyebrow="Visual"
          title="Painéis de LED Fine Pitch"
          description="Nossos painéis funcionam como elementos cenográficos que elevam a narrativa visual do evento."
          image={ledImg}
          features={[
            { title: "Qualidade de Cinema", description: "Telas de alta definição com pixel pitch reduzido, garantindo imagens nítidas mesmo em curta distância." },
            { title: "Design Versátil", description: "Montagens personalizadas que se integram harmonicamente à arquitetura e decoração do espaço." },
            { title: "Conteúdo Curado", description: "Suporte para VJs e brilho calibrado para manter a elegância e o conforto visual." },
          ]}
        />

        <ServiceShowcase
          id="som"
          eyebrow="Áudio"
          title="Sonorização Signature com RCF Italy"
          description="A fidelidade sonora é inegociável. Operamos exclusivamente com sistemas RCF, referência mundial em engenharia italiana, garantindo uma experiência auditiva rica e envolvente."
          image={soundImg}
          features={[
            { title: "Clareza Absoluta", description: "Tecnologia digital que garante definição máxima, dos brindes à alta performance na pista." },
            { title: "Design Discreto", description: "Equipamentos de alta performance que respeitam o minimalismo visual do ambiente." },
          ]}
          reverse
        />

        <ServiceShowcase
          id="luz"
          eyebrow="Atmosfera"
          title="Iluminação Cênica e Arquitetural"
          description="A luz define a atmosfera de cada momento, valorizando a decoração e guiando as emoções."
          image={lightImg}
          features={[
            { title: "Transições Fluídas", description: "Programação inteligente que evolui do clima intimista do jantar para a energia da festa." },
            { title: "Montagem Clean", description: "Foco total na estética, com infraestrutura organizada e cabeamento embutido." },
          ]}
        />

        <ServiceShowcase
          id="dj"
          eyebrow="Performance"
          title="Curadoria Musical & DJ"
          description="Nossos DJs realizam a leitura de pista em tempo real, conectando-se ao perfil dos anfitriões através de um repertório cosmopolita, técnico e altamente sofisticado."
          image={djImg}
          features={[
            { title: "Leitura de Pista", description: "Análise contínua do público para guiar transições e criar momentos de pico inesquecíveis." },
            { title: "Repertório Cosmopolita", description: "Curadoria internacional que dialoga com a identidade dos anfitriões e dos convidados." },
          ]}
          reverse
        />

        <Blog />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
