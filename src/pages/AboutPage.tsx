import React from 'react';
import heroImage from '../assets/images/dona_hestia_hero_1789431461850.jpg';
import crestImage from '../assets/images/dona_hestia_crest_1789431489037.jpg';
import { useNavigation } from '../context/NavigationContext';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header Label */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C89A4B]" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726]">
              MANIFESTO INSTITUCIONAL
            </span>
            <span className="w-6 h-[1px] bg-[#C89A4B]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#071A2B] font-light tracking-tight leading-tight mb-6">
            MAIS DO QUE UMA CASA. <br />
            <span className="italic font-normal text-[#8A6726]">UM LUGAR PARA VIVER.</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 leading-relaxed font-light max-w-xl mx-auto">
            A Dona Héstia nasceu de uma ideia simples: os produtos que fazem parte da nossa casa também participam da nossa história.
          </p>
        </div>

        {/* Feature Visual */}
        <div className="relative aspect-16/9 rounded-xs overflow-hidden shadow-xl mb-16 border border-[#071A2B]/10">
          <img
            src={heroImage}
            alt="Interior residencial caloroso e acolhedor Dona Héstia"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-md">
            <span className="text-[10px] font-sans tracking-[0.28em] uppercase text-[#E0B866] block mb-1">
              O EQUILÍBRIO DO LAR
            </span>
            <p className="font-serif text-xl sm:text-2xl font-light">
              Onde a tecnologia discreta serve ao aconchego e à convivência familiar.
            </p>
          </div>
        </div>

        {/* Story Text */}
        <div className="bg-white p-8 sm:p-14 border border-[#071A2B]/10 rounded-xs shadow-xs space-y-8 text-sm sm:text-base font-sans font-light leading-relaxed text-[#1C242B]/85 mb-16">
          <p>
            Da cozinha onde uma família se reúne ao eletrodoméstico que facilita uma tarefa cotidiana, pequenos detalhes podem transformar a experiência de viver em casa.
          </p>

          <p>
            Inspirada no simbolismo de <strong className="font-medium text-[#071A2B]">Héstia</strong>, associada ao lar, à hospitalidade e à chama doméstica, a Dona Héstia busca unir tecnologia, praticidade e conforto em escolhas que façam sentido para cada lar.
          </p>

          <div className="my-10 p-8 bg-[#071A2B] text-[#F5F0E8] rounded-xs relative overflow-hidden border border-[#C89A4B]/30 text-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C89A4B]/50 mx-auto mb-4 shadow-sm">
              <img src={crestImage} alt="Emblema Dona Héstia" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-light text-[#E0B866] leading-snug">
              “O conforto começa em uma boa escolha.”
            </p>
            <p className="font-sans text-xs tracking-[0.24em] text-[#F5F0E8]/60 uppercase mt-4">
              DONA HÉSTIA &bull; O CORAÇÃO DO SEU LAR
            </p>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#071A2B] font-light pt-4">
            A Deusa Héstia &amp; o Nosso Olhar Contemporâneo
          </h2>

          <p>
            Na tradição mitológica clássica, o templo de Héstia não era uma fortaleza distante: era a chama acesa no centro de cada casa grega, o fogo que nunca se apagava e que simbolizava a acolhida aos hóspedes e o alimento compartilhado.
          </p>

          <p>
            Reinterpretamos esse legado sem clichês arqueológicos. Para nós, a chama moderna é a iluminação quente ao entardecer, o café fresco preparado em instantes, o refrigerador que preserva os alimentos com carinho e o forno que reúne os que amamos ao redor da mesa.
          </p>
        </div>

        {/* 4 Pillars Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-white border border-[#071A2B]/10 rounded-xs">
            <span className="text-xs font-semibold text-[#8A6726] tracking-wider uppercase font-sans block mb-2">
              01 &bull; LUXO E SOBRIEDADE
            </span>
            <p className="font-sans text-xs text-[#1C242B]/75 leading-relaxed font-light">
              Design que valoriza os espaços sem excessos. Superfícies puras, metais nobres e paleta atemporal que complementa projetos de arquitetura refinados.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071A2B]/10 rounded-xs">
            <span className="text-xs font-semibold text-[#8A6726] tracking-wider uppercase font-sans block mb-2">
              02 &bull; TECNOLOGIA TRANQUILA
            </span>
            <p className="font-sans text-xs text-[#1C242B]/75 leading-relaxed font-light">
              Recursos inteligentes criados para simplificar o cotidiano, com motores silenciosos e controles intuitivos que respeitam a serenidade da moradia.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071A2B]/10 rounded-xs">
            <span className="text-xs font-semibold text-[#8A6726] tracking-wider uppercase font-sans block mb-2">
              03 &bull; HOSPITALIDADE &amp; ACONCHEGO
            </span>
            <p className="font-sans text-xs text-[#1C242B]/75 leading-relaxed font-light">
              O lar como um refúgio acolhedor. Equipamentos projetados para tornar cada encontro gastronômico e momento de descanso verdadeiramente memorável.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#071A2B]/10 rounded-xs">
            <span className="text-xs font-semibold text-[#8A6726] tracking-wider uppercase font-sans block mb-2">
              04 &bull; TRANSPARÊNCIA E CONFIANÇA
            </span>
            <p className="font-sans text-xs text-[#1C242B]/75 leading-relaxed font-light">
              Informações técnicas precisas, eficiência energética comprovada e atendimento humanizado para orientar a melhor decisão para cada família.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('/produtos')}
            className="px-8 py-3.5 bg-[#071A2B] hover:bg-[#0D263D] text-[#F5F0E8] text-xs font-sans tracking-[0.2em] uppercase font-medium rounded-xs transition-colors duration-200 shadow-xs"
          >
            Conhecer Nossa Coleção de Eletrodomésticos
          </button>
        </div>
      </div>
    </div>
  );
};
