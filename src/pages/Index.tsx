import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Pzf } from "@/components/site/Pzf";
import { Realizations } from "@/components/site/Realizations";
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
        <Realizations />
        <Pzf />

        <ServiceShowcase
          id="led"
          eyebrow="Visual"
          title="Painéis de LED de Ultra Definição"
          description="Telões com qualidade de cinema para palcos corporativos, casamentos, plenárias e celebrações. A imagem fica nítida mesmo de pertinho, sem aqueles quadradinhos aparecendo nas fotos e vídeos do seu evento."
          image={ledImg}
          features={[
            { title: "Qualidade de Cinema", description: "Imagem ultra definida que mantém nitidez mesmo de perto, garantindo fotos e vídeos impecáveis para o seu álbum e suas redes." },
            { title: "Integração à Decoração", description: "Painéis desenhados em projeto 3D para conversar com a cenografia, a identidade do evento e o trabalho da sua decoradora." },
            { title: "Transmissão ao Vivo", description: "Captação e transmissão simultânea para convidados a distância, com qualidade broadcast e imagem estável." },
          ]}
        />

        <ServiceShowcase
          id="som"
          eyebrow="Áudio"
          title="Som Inteligente com RCF Italy"
          description="Operamos com engenharia italiana de som (sistemas RCF), garantindo clareza absoluta da primeira fileira de cadeiras até a pista de dança. Seus convidados conseguem conversar confortavelmente sem o som agredir o ambiente."
          image={soundImg}
          features={[
            { title: "Cada Palavra Compreendida", description: "Cobertura calculada para que o discurso dos noivos, a homenagem ou o keynote chegue com clareza a todos os cantos do salão." },
            { title: "Tudo com Backup Ativo", description: "Equipamentos duplicados e prontos para assumir em milissegundos. Se algo falhar, ninguém percebe e a festa não para." },
          ]}
          reverse
        />

        <ServiceShowcase
          id="luz"
          eyebrow="Atmosfera"
          title="Iluminação que Valoriza o Evento Inteiro"
          description="Desenho de luz para casamentos, debutantes, premiações e ativações de marca. Programação que conduz a emoção de cada momento e valoriza a decoração, o vestido da noiva e a captação de fotos e vídeos."
          image={lightImg}
          features={[
            { title: "Luz que Favorece as Fotos", description: "Temperatura e intensidade calibradas para que a fotografia, o vídeo e a transmissão fiquem impecáveis em qualquer momento da noite." },
            { title: "Estruturas Limpas e Seguras", description: "Estruturas suspensas e palcos com segurança certificada, cabeamento embutido e estética clean que não polui os registros fotográficos." },
          ]}
        />

        <ServiceShowcase
          id="dj"
          eyebrow="Performance"
          title="DJs com Leitura de Público em Tempo Real"
          description="Trilha sonora desenhada para a identidade do seu evento, do recepcionar dos convidados ao after. DJs experientes que leem a pista em tempo real e mantêm a energia máxima do começo ao fim."
          image={djImg}
          features={[
            { title: "Pista Sempre Cheia", description: "Leitura precisa do público para conduzir a energia do ambiente em cada momento, sem deixar a pista esfriar." },
            { title: "Repertório Sob Medida", description: "Curadoria construída junto com os anfitriões, respeitando o estilo, a história e o público do evento." },
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
