import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Pzf } from "@/components/site/Pzf";
import { Process } from "@/components/site/Process";
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
        <Pzf />

        <ServiceShowcase
          id="led"
          eyebrow="Visual"
          title="Painéis de LED Fine Pitch para Plenárias"
          description="Telões de alta resolução para palcos corporativos, plenárias, lançamentos de produtos e eventos híbridos. Cada projeto inclui layout técnico, simulação 3D e operação dedicada."
          image={ledImg}
          features={[
            { title: "Resolução de Cinema", description: "Pixel pitch reduzido com leitura nítida em curta distância, ideal para palestras e apresentações de marca." },
            { title: "Engenharia de Palco", description: "Estruturas modulares projetadas em 3D, integradas à cenografia e ao branding do cliente." },
            { title: "Operação Híbrida", description: "Switching, captação e transmissão simultânea para audiências presenciais e remotas." },
          ]}
        />

        <ServiceShowcase
          id="som"
          eyebrow="Áudio"
          title="Sonorização Corporativa RCF Italy"
          description="Inteligibilidade absoluta para a palavra falada e fidelidade musical de referência. Sistemas RCF dimensionados por engenharia acústica, com redundância total de mesa, processamento e cabeamento."
          image={soundImg}
          features={[
            { title: "Inteligibilidade Garantida", description: "Cobertura calculada por software para que cada palavra chegue com clareza a todos os pontos do salão." },
            { title: "Redundância Total", description: "Mesas, processadores e amplificadores em backup ativo. Se algo falhar, ninguém percebe." },
          ]}
          reverse
        />

        <ServiceShowcase
          id="luz"
          eyebrow="Atmosfera"
          title="Iluminação Cênica, Arquitetural e Corporativa"
          description="Desenho de luz para keynotes, painéis, premiações e ativações de marca. Programação que conduz a narrativa do evento e valoriza câmeras de captação e transmissão."
          image={lightImg}
          features={[
            { title: "Luz para Câmera", description: "Temperatura e intensidade calibradas para captação broadcast e transmissão híbrida." },
            { title: "Montagem Invisível", description: "Rigging limpo, cabeamento embutido e operação discreta, preservando a estética da marca." },
          ]}
        />

        <ServiceShowcase
          id="dj"
          eyebrow="Performance"
          title="Curadoria Musical para Marcas e Anfitriões"
          description="Trilha sonora desenhada para a identidade do evento corporativo: do welcome coffee ao after, com leitura precisa de público e repertório alinhado ao posicionamento da marca."
          image={djImg}
          features={[
            { title: "Leitura de Audiência", description: "Análise em tempo real para conduzir a energia do ambiente em cada momento do evento." },
            { title: "Repertório Sob Medida", description: "Curadoria internacional alinhada ao briefing da marca, do público e dos anfitriões." },
          ]}
          reverse
        />

        <Process />
        <Blog />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
