import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, navigateTo } = useNavigation();
  const [term, setTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!term.trim()) return [];
    const lower = term.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.categoryLabel.toLowerCase().includes(lower) ||
        p.productType.toLowerCase().includes(lower) ||
        p.shortDescription.toLowerCase().includes(lower)
    ).slice(0, 6);
  }, [term]);

  if (!isSearchOpen) return null;

  const handleSelectProduct = (slug: string) => {
    closeSearch();
    setTerm('');
    navigateTo(`/produto/${slug}`);
  };

  const handleSearchAll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim()) return;
    closeSearch();
    navigateTo('/produtos', { query: term });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div
        onClick={closeSearch}
        className="fixed inset-0 bg-[#071A2B]/75 backdrop-blur-xs transition-opacity"
      />

      <div className="relative min-h-screen flex items-start justify-center pt-20 px-4 sm:px-6">
        <div className="w-full max-w-2xl bg-[#F5F0E8] border border-[#C89A4B]/30 shadow-2xl p-6 sm:p-8 rounded-sm relative">
          <div className="flex items-center justify-between pb-4 border-b border-[#071A2B]/10">
            <span className="text-[10px] tracking-[0.25em] font-sans text-[#C89A4B] font-semibold uppercase">
              PESQUISA DONA HÉSTIA
            </span>
            <button
              onClick={closeSearch}
              className="p-1 text-[#071A2B]/60 hover:text-[#071A2B] transition-colors"
              aria-label="Fechar busca"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSearchAll} className="mt-4">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#C89A4B] absolute left-3 pointer-events-none" />
              <input
                type="text"
                autoFocus
                placeholder="Busque por produto, categoria ou ambiente..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#071A2B]/15 text-[#071A2B] placeholder:text-[#1C242B]/40 text-sm font-sans focus:outline-hidden focus:border-[#C89A4B] transition-colors"
              />
            </div>
          </form>

          {/* Suggested keywords */}
          {!term && (
            <div className="mt-6">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#1C242B]/60 block mb-2.5">
                Buscas Frequentes:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Panela de Pressão Elétrica', 'Sanduicheira Grill', 'Antiaderente', 'Cozinha', 'Dona Héstia'].map(
                  (s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setTerm(s);
                      }}
                      className="text-xs font-sans px-3 py-1.5 bg-white border border-[#071A2B]/10 text-[#071A2B]/80 hover:border-[#C89A4B] hover:text-[#071A2B] transition-colors"
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Results list */}
          {term && (
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans text-[#1C242B]/70">
                  {filteredProducts.length} produto(s) encontrado(s)
                </span>
                {filteredProducts.length > 0 && (
                  <button
                    onClick={handleSearchAll}
                    className="text-xs font-sans text-[#C89A4B] hover:underline flex items-center gap-1"
                  >
                    <span>Ver todos no catálogo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="divide-y divide-[#071A2B]/10 max-h-80 overflow-y-auto">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p.slug)}
                    className="py-3 flex items-center gap-4 hover:bg-white/60 p-2 cursor-pointer transition-colors"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-14 h-14 object-cover rounded-xs border border-[#071A2B]/10 shrink-0 bg-white"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] uppercase font-sans tracking-widest text-[#C89A4B]">
                        {p.categoryLabel}
                      </span>
                      <h4 className="font-serif text-sm text-[#071A2B] truncate">
                        {p.name}
                      </h4>
                      <p className="text-[11px] font-sans text-[#1C242B]/60 truncate">
                        {p.shortDescription}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-sans font-semibold text-[#071A2B]">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
