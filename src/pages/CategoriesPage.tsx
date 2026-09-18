import React from 'react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="border-b border-[#071A2B]/10 pb-10 mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C89A4B]" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726]">
              LINHAS &amp; ESPAÇOS
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#071A2B] font-light tracking-tight mb-4">
            CATEGORIAS DE ELETRODOMÉSTICOS
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 font-light leading-relaxed max-w-2xl">
            Soluções integradas desenhadas para cada cômodo do seu refúgio, unindo beleza perene e alta performance.
          </p>
        </div>

        {/* Detailed Category Sections */}
        <div className="space-y-16 sm:space-y-24">
          {CATEGORIES.map((category, index) => {
            const isEven = index % 2 === 0;
            const categoryProducts = PRODUCTS.filter((p) => p.category === category.slug).slice(0, 3);

            return (
              <div
                key={category.id}
                className="bg-white border border-[#071A2B]/10 rounded-xs overflow-hidden shadow-xs"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Category Hero Image */}
                  <div className={`lg:col-span-6 relative aspect-16/10 sm:aspect-16/9 lg:aspect-auto lg:h-[450px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-[9px] font-sans tracking-[0.28em] uppercase text-[#E0B866] block">
                        CURADORIA
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-light">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Category Details and Featured Products */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-[10px] font-sans font-medium uppercase tracking-[0.26em] text-[#8A6726] block mb-2">
                        {category.productCount} {category.productCount === 1 ? 'PRODUTO' : 'PRODUTOS'} NESSA CATEGORIA
                      </span>

                      <h2 className="font-serif text-2xl sm:text-3xl text-[#071A2B] font-light mb-3">
                        {category.tagline}
                      </h2>

                      <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 leading-relaxed font-light mb-6">
                        {category.description}
                      </p>

                      {/* Mini preview of products */}
                      <div className="border-t border-slate-100 pt-5 mb-6">
                        <span className="text-[11px] font-sans uppercase tracking-wider text-[#1C242B]/60 block mb-3">
                          Exemplos em destaque:
                        </span>
                        <div className="space-y-2">
                          {categoryProducts.map((p) => (
                            <div
                              key={p.id}
                              onClick={() => navigateTo(`/produto/${p.slug}`)}
                              className="flex items-center justify-between p-2 rounded-xs hover:bg-[#F5F0E8] cursor-pointer transition-colors"
                            >
                              <span className="font-serif text-sm text-[#071A2B] hover:text-[#C89A4B]">
                                {p.name}
                              </span>
                              <span className="font-sans text-xs font-semibold text-[#071A2B]">
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.price)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => navigateTo('/produtos', { category: category.slug })}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#071A2B] hover:bg-[#0D263D] text-[#F5F0E8] text-xs font-sans tracking-[0.2em] uppercase font-medium rounded-xs transition-colors"
                      >
                        <span>Explorar {category.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
