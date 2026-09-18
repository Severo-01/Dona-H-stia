import React from 'react';
import cookerKitchenImg from '../assets/images/pressure_cooker_kitchen_1789434221609.jpg';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export const FeaturedProduct: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="bg-[#F5F0E8] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#071A2B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Editorial Product Photograph */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-4/3 sm:aspect-16/11 rounded-xs overflow-hidden shadow-xl border border-[#071A2B]/10 bg-white">
              <img
                src={cookerKitchenImg}
                alt="Panela de Pressão Elétrica Digital 5 Litros Preta em cozinha contemporânea"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating editorial caption badge */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 bg-white p-5 border border-[#C89A4B]/30 shadow-lg max-w-xs rounded-xs">
              <span className="text-[9px] font-sans tracking-[0.24em] uppercase text-[#C89A4B] block mb-1 font-semibold">
                DESTAQUE EXCLUSIVO
              </span>
              <p className="font-serif text-sm text-[#071A2B] leading-snug">
                Capacidade de 5L, acabamento preto premium e controle digital touch.
              </p>
            </div>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C89A4B]" />
              <span className="text-[10px] font-sans tracking-[0.26em] uppercase text-[#8A6726] font-medium">
                LINHA COZINHA DONA HÉSTIA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#071A2B] font-light leading-[1.12] mb-4">
              PANELA DE PRESSÃO ELÉTRICA <br />
              <span className="italic font-normal text-[#8A6726]">DIGITAL 5L PRETA</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#1C242B]/80 font-light leading-relaxed mb-6">
              A combinação perfeita entre rapidez, segurança multifásica e design elegante para transformar a sua rotina culinária com receitas no ponto exato.
            </p>

            {/* Features bullet points */}
            <div className="space-y-3 mb-6 border-y border-[#071A2B]/10 py-5">
              <div className="flex items-center gap-3 text-xs font-sans text-[#071A2B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89A4B]" />
                <span>Painel digital inteligente com funções pré-programadas</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans text-[#071A2B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89A4B]" />
                <span>Capacidade de 5 Litros com cuba antiaderente removível</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-sans text-[#071A2B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89A4B]" />
                <span>Múltiplas travas e dispositivos automáticos de segurança</span>
              </div>
            </div>

            {/* Approximate Price Callout */}
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#8A6726]">
                Preço aproximado:
              </span>
              <span className="font-sans text-xl sm:text-2xl font-semibold text-[#071A2B] tracking-tight">
                R$ 299,00 a R$ 349,00
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => navigateTo('/produto/panela-de-pressao-eletrica-digital-5-litros-preta')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#071A2B] hover:bg-[#C89A4B] text-[#F5F0E8] hover:text-[#071A2B] text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-200 rounded-xs shadow-md border border-[#C89A4B]/30 group"
              >
                <span>Ver Produto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
