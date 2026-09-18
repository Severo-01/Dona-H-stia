import React from 'react';
import crestImage from '../assets/images/dona_hestia_crest_1789431489037.jpg';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'dark' = for dark backgrounds (white/gold text), 'light' = for light backgrounds (navy text)
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const isDarkBg = variant === 'dark';

  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.2em]',
    md: 'text-base sm:text-lg tracking-[0.24em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.26em]',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.26em]',
    lg: 'text-xs tracking-[0.3em]',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      role="banner"
      aria-label="Dona Héstia - O Coração do Seu Lar"
    >
      {/* Official Medallion Emblem */}
      <div className={`relative ${emblemSizes[size]} rounded-full overflow-hidden shrink-0 border border-[#C89A4B]/60 shadow-xs transition-transform duration-300 group-hover:scale-105`}>
        <img
          src={crestImage}
          alt="Emblema Dona Héstia"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle gold sheen overlay */}
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#C89A4B]/30 pointer-events-none" />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-semibold uppercase leading-none transition-colors duration-200 ${
            isDarkBg
              ? 'text-[#F5F0E8] group-hover:text-[#E0B866]'
              : 'text-[#071A2B] group-hover:text-[#C89A4B]'
          } ${titleSizes[size]}`}
        >
          DONA HÉSTIA
        </span>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`h-[1px] w-3 ${isDarkBg ? 'bg-[#C89A4B]/50' : 'bg-[#C89A4B]/60'}`}
            />
            <span
              className={`font-sans font-medium uppercase leading-none tracking-widest ${
                isDarkBg ? 'text-[#C89A4B]' : 'text-[#8A6726]'
              } ${subtitleSizes[size]}`}
            >
              O CORAÇÃO DO SEU LAR
            </span>
            <span
              className={`h-[1px] w-3 ${isDarkBg ? 'bg-[#C89A4B]/50' : 'bg-[#C89A4B]/60'}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
