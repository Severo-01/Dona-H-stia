import React from 'react';
import { Product } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateTo } = useNavigation();

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.originalPrice)
    : null;

  return (
    <div
      onClick={() => navigateTo(`/produto/${product.slug}`)}
      className="group flex flex-col bg-white border border-[#071A2B]/10 hover:border-[#C89A4B]/50 transition-all duration-300 rounded-xs overflow-hidden cursor-pointer shadow-xs hover:shadow-md max-w-md mx-auto w-full"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square bg-[#F5F0E8]/50 overflow-hidden flex items-center justify-center p-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transform transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Optional Subtle Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 bg-[#071A2B] text-[#E0B866] text-[9px] font-sans font-medium uppercase tracking-[0.2em] rounded-xs border border-[#C89A4B]/30">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Brand */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#C89A4B]">
              {product.categoryLabel}
            </span>
            <span className="text-[10px] font-sans text-[#1C242B]/50 truncate">
              {product.brand}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-base sm:text-lg text-[#071A2B] font-medium leading-snug group-hover:text-[#C89A4B] transition-colors duration-200 line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="font-sans text-xs text-[#1C242B]/65 line-clamp-2 leading-relaxed mb-4 font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-4 border-t border-[#071A2B]/5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            {product.priceRangeLabel ? (
              <>
                <span className="block text-[10px] font-sans font-medium uppercase tracking-wider text-[#8A6726]">
                  Preço aproximado
                </span>
                <span className="font-sans text-base sm:text-lg font-semibold text-[#071A2B] tracking-tight">
                  {product.priceRangeLabel}
                </span>
              </>
            ) : (
              <>
                {formattedOriginalPrice && (
                  <span className="block text-[11px] font-sans text-[#1C242B]/40 line-through">
                    {formattedOriginalPrice}
                  </span>
                )}
                <span className="font-sans text-lg sm:text-xl font-semibold text-[#071A2B] tracking-tight">
                  {formattedPrice}
                </span>
              </>
            )}
            <span className="block text-[10px] font-sans text-[#1C242B]/50 font-normal">
              Valor promocional com cupons do dia
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigateTo(`/produto/${product.slug}`);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#071A2B] group-hover:bg-[#C89A4B] text-[#F5F0E8] group-hover:text-[#071A2B] text-xs font-sans tracking-[0.16em] uppercase rounded-xs transition-colors duration-200 font-medium shadow-xs"
            >
              <span>Ver Produto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
