import React from 'react';
import heroImage from '../assets/images/dona_hestia_hero_1789431461850.jpg';
import { useNavigation } from '../context/NavigationContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-start overflow-hidden pt-24 pb-16">
      {/* Background Image with Cinematic Editorial Framing */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ambiente residencial sofisticado com eletrodomésticos integrados Dona Héstia"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Gradients: soft lighting from left and bottom for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/85 via-[#071A2B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/75 via-transparent to-[#071A2B]/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-12 sm:py-16">
          {/* Eyebrow / Small Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 h-[1px] bg-[#C89A4B]" />
            <p className="font-sans text-[10px] sm:text-xs tracking-[0.28em] text-[#E0B866] uppercase font-medium">
              ELETRODOMÉSTICOS PARA O SEU LAR
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-[1.08] tracking-tight mb-6 sm:mb-8">
            TRANSFORME <br />
            <span className="italic font-normal text-[#E0B866]">O SEU LAR.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base lg:text-lg text-[#F5F0E8]/85 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
            Tecnologia, praticidade e design para tornar o seu dia a dia mais confortável.
          </p>

          {/* Discreet Luxury CTA */}
          <div>
            <button
              onClick={() => navigateTo('/produtos')}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#C89A4B] text-[#F5F0E8] hover:bg-[#C89A4B] hover:text-[#071A2B] transition-all duration-300 rounded-xs font-sans text-xs tracking-[0.22em] uppercase font-medium"
            >
              <span>EXPLORAR PRODUTOS</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom subtle indicator line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans">Deslize</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C89A4B] to-transparent" />
      </div>
    </section>
  );
};
