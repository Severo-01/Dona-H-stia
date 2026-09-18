import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'Nenhum produto encontrado para esta seleção.',
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white/60 border border-[#071A2B]/10 rounded-xs">
        <p className="font-serif text-xl text-[#071A2B] mb-2">
          Nenhum produto encontrado
        </p>
        <p className="font-sans text-xs text-[#1C242B]/60 max-w-md mx-auto">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
