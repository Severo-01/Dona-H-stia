import React from 'react';
import { Award, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  const pillars = [
    {
      title: 'QUALIDADE',
      description: 'Produtos selecionados para o seu lar.',
      subtext: 'Materiais nobres como aço escovado, vidro temperado e componentes certificados.',
      icon: Award,
    },
    {
      title: 'PRATICIDADE',
      description: 'Soluções para facilitar sua rotina.',
      subtext: 'Controles intuitivos e silêncio operacional para um dia a dia descomplicado.',
      icon: Sparkles,
    },
    {
      title: 'DESIGN',
      description: 'Tecnologia que também valoriza seus espaços.',
      subtext: 'Linhas contemporâneas pensadas em sintonia com a arquitetura e decoração.',
      icon: Compass,
    },
    {
      title: 'CONFIANÇA',
      description: 'Informações claras para você escolher melhor.',
      subtext: 'Transparência em dimensões, consumo energético e suporte dedicado.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#F5F0E8] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#071A2B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-6 bg-white/70 border border-[#071A2B]/5 rounded-xs hover:border-[#C89A4B]/40 transition-colors duration-300"
              >
                {/* Linear Gold Icon */}
                <div className="w-12 h-12 rounded-full bg-[#071A2B]/5 border border-[#C89A4B]/30 flex items-center justify-center text-[#C89A4B] mb-5">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-lg font-semibold tracking-wider text-[#071A2B] uppercase mb-2">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm font-medium text-[#071A2B]/90 mb-2">
                  {pillar.description}
                </p>

                <p className="font-sans text-xs text-[#1C242B]/60 leading-relaxed font-light">
                  {pillar.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
