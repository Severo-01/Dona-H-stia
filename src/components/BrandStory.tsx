import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export const BrandStory: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#071A2B]/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Subtle Stylized Flame Emblem */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F5F0E8] border border-[#C89A4B]/40 mb-6 shadow-xs">
            <svg
              className="w-6 h-6 text-[#C89A4B]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.5 7 8 10 9 14C9.8 17.2 12.5 19 14.5 16C15.8 14 15.6 11.5 14.5 9.5C14 8.5 13.8 6.5 14.2 4.5C13.2 3.5 12.5 2.7 12 2Z" />
              <path
                d="M10 16C10 19 12 21 14 21C16 21 17.5 19.5 17 17C16.5 14.5 14.5 13 14 11.5C13.2 13 12.2 14.5 10 16Z"
                fill="#E0B866"
              />
            </svg>
          </div>

          <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726] block mb-3">
            CONCEITO &amp; ESSÊNCIA
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#071A2B] font-light tracking-tight leading-tight">
            O CORAÇÃO DO SEU LAR
          </h2>
        </div>

        {/* Narrative Paragraphs with Architectural Editorial Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-[#1C242B]/85 font-sans font-light leading-relaxed text-sm sm:text-base border-t border-[#071A2B]/10 pt-10">
          <div>
            <p className="mb-6">
              Na <strong className="font-medium text-[#071A2B]">Dona Héstia</strong>, acreditamos que uma casa é mais do que um espaço. É onde a vida acontece.
            </p>
            <p>
              Da cozinha onde uma família se reúne ao redor do aroma do almoço de domingo, até o aparelho silencioso que simplifica uma tarefa cotidiana, entendemos que pequenos detalhes transformam a rotina em momentos de verdadeiro aconchego.
            </p>
          </div>

          <div>
            <p className="mb-6">
              Inspirada no simbolismo nobre da deusa grega <span className="text-[#8A6726] font-medium">Héstia</span> — protetora da chama sagrada do lar, da hospitalidade afetuosa e do centro acolhedor da morada —, a nossa marca nasceu para unir tecnologia de ponta e sensação de pertencimento.
            </p>
            <p className="text-xs text-[#1C242B]/60 italic font-serif text-base leading-relaxed">
              “Não criamos apenas eletrodomésticos funcionais; selecionamos instrumentos de conforto que participam com dignidade da história da sua família.”
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('/sobre')}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#071A2B] hover:text-[#C89A4B] transition-colors duration-200 border-b border-[#C89A4B] pb-1 font-medium"
          >
            <span>Conheça a história e os princípios da Dona Héstia</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
