import React from 'react';

export const SecondQuoteSection: React.FC = () => {
  return (
    <section className="bg-[#071A2B] text-[#F5F0E8] py-24 sm:py-32 px-6 border-y border-[#C89A4B]/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtle decorative golden point */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#C89A4B] mx-auto mb-8" />

        {/* Central Quote */}
        <p className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F0E8] tracking-wide leading-tight mb-8">
          UM LAR BEM CUIDADO <br />
          <span className="italic text-[#E0B866] font-normal">COMEÇA NAS ESCOLHAS.</span>
        </p>

        {/* Brand signature */}
        <div className="flex flex-col items-center">
          <span className="font-serif text-lg sm:text-xl tracking-[0.24em] text-[#F5F0E8] uppercase">
            DONA HÉSTIA
          </span>
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-[#C89A4B] uppercase mt-1">
            O CORAÇÃO DO SEU LAR
          </span>
        </div>
      </div>
    </section>
  );
};
