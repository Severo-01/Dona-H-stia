import React from 'react';
import { CategoryInfo } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { navigateTo } = useNavigation();

  return (
    <div
      onClick={() => navigateTo('/produtos', { category: category.slug })}
      className="group relative h-96 sm:h-[420px] rounded-xs overflow-hidden cursor-pointer bg-[#071A2B] border border-[#071A2B]/10 shadow-xs"
    >
      {/* Background Image with Gentle Zoom */}
      <img
        src={category.imageUrl}
        alt={`Ambiente e eletrodomésticos para ${category.name}`}
        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-[0.95]"
        referrerPolicy="no-referrer"
      />

      {/* Subtle Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/90 via-[#071A2B]/40 to-transparent transition-opacity duration-300" />
      <div className="absolute inset-0 border border-[#C89A4B]/0 group-hover:border-[#C89A4B]/40 transition-colors duration-500 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
        <span className="text-[10px] font-sans font-medium tracking-[0.26em] uppercase text-[#E0B866] mb-1.5 block">
          {category.productCount} ITENS SELECIONADOS
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8] font-light tracking-wide mb-2">
          {category.name}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#F5F0E8]/80 line-clamp-2 leading-relaxed mb-4 font-light">
          {category.description}
        </p>

        {/* Discreet Explore Link */}
        <div className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#E0B866] group-hover:text-white transition-colors duration-200">
          <span>Explorar</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
