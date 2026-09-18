import React from 'react';
import { Hero } from '../components/Hero';
import { ManifestoSection } from '../components/ManifestoSection';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { FeaturedProduct } from '../components/FeaturedProduct';
import { BrandStory } from '../components/BrandStory';
import { Benefits } from '../components/Benefits';
import { SecondQuoteSection } from '../components/SecondQuoteSection';
import { Newsletter } from '../components/Newsletter';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { useNavigation } from '../context/NavigationContext';

export const HomePage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Bloco Manifesto */}
      <ManifestoSection />

      {/* 3. Categorias ("CATEGORIA EM DESTAQUE") */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#071A2B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726] block mb-3">
              AMBIENTES &amp; MOMENTOS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#071A2B] font-light tracking-tight mb-4">
              COZINHA DONA HÉSTIA
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#1C242B]/70 font-light leading-relaxed max-w-2xl mx-auto">
              Soluções inteligentes para transformar a sua rotina gastronômica com sofisticação, tecnologia e máxima eficiência.
            </p>
          </div>

          {/* Categories Presentation */}
          <div className="max-w-xl mx-auto">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigateTo('/categorias')}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#071A2B] hover:text-[#C89A4B] transition-colors border-b border-[#071A2B] pb-1 font-medium"
            >
              <span>Ver categoria em detalhe</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Produtos em Destaque ("PRODUTO EM DESTAQUE") */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] border-b border-[#071A2B]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726] block mb-2">
                CURADORIA EXCLUSIVA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#071A2B] font-light tracking-tight">
                ESCOLHA PARA O SEU LAR
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#1C242B]/70 font-light leading-relaxed mt-2 max-w-xl">
                Cozimento rápido, silencioso e com tecnologia digital para receitas saborosas e seguras todos os dias.
              </p>
            </div>

            <button
              onClick={() => navigateTo('/produtos')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#071A2B] hover:bg-[#0D263D] text-[#F5F0E8] text-xs font-sans tracking-[0.18em] uppercase rounded-xs transition-colors self-start md:self-auto font-medium"
            >
              <span>VER NO CATÁLOGO</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Produto em Destaque Editorial */}
      <FeaturedProduct />

      {/* 6. Conceito da Marca ("O CORAÇÃO DO SEU LAR") */}
      <BrandStory />

      {/* 7. Benefícios (4 Pilares com ícones dourados) */}
      <Benefits />

      {/* 8. Segunda Frase de Marca */}
      <SecondQuoteSection />

      {/* 9. Newsletter ("INSPIRAÇÃO PARA O SEU LAR") */}
      <Newsletter />
    </div>
  );
};
