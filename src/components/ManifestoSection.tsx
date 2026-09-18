import React from 'react';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="bg-[#071A2B] text-[#F5F0E8] py-20 sm:py-28 px-6 relative overflow-hidden border-y border-[#C89A4B]/15">
      {/* Subtle background ambient grain & glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,154,75,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Subtle Decorative Top Finial */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10 opacity-75">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C89A4B]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C89A4B] bg-[#071A2B]" />
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C89A4B]" />
        </div>

        {/* Central Manifesto Phrase in Cormorant Garamond */}
        <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#E0B866] tracking-[0.06em] leading-snug sm:leading-tight max-w-3xl mx-auto">
          “O CONFORTO COMEÇA EM UMA BOA ESCOLHA.”
        </blockquote>

        {/* Brand Concept Note */}
        <p className="mt-6 font-sans text-xs sm:text-sm tracking-[0.24em] uppercase text-[#F5F0E8]/60 font-light">
          DONA HÉSTIA &bull; O CORAÇÃO DO SEU LAR
        </p>

        {/* Subtle Decorative Bottom Finial */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10 opacity-75">
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C89A4B]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C89A4B] bg-[#071A2B]" />
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C89A4B]" />
        </div>
      </div>
    </section>
  );
};
