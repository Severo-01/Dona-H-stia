import React, { useState, useMemo, useEffect } from 'react';
import { Product, SortOption } from '../types';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductGrid } from '../components/ProductGrid';
import { useNavigation } from '../context/NavigationContext';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter, searchQuery, setSearchQuery } = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    selectedCategoryFilter || 'all'
  );
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedProductType, setSelectedProductType] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync if navigation context changes category
  useEffect(() => {
    if (selectedCategoryFilter) {
      setSelectedCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  // Unique product types and brands
  const productTypes = useMemo(() => {
    const types = new Set<string>();
    PRODUCTS.forEach((p) => types.add(p.productType));
    return Array.from(types);
  }, []);

  const brands = useMemo(() => {
    const b = new Set<string>();
    PRODUCTS.forEach((p) => b.add(p.brand));
    return Array.from(b);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      list = list.filter((p) => p.brand.includes(selectedBrand));
    }

    // Product type filter
    if (selectedProductType !== 'all') {
      list = list.filter((p) => p.productType === selectedProductType);
    }

    // Price range filter
    if (selectedPriceRange === 'under-1000') {
      list = list.filter((p) => p.price < 1000);
    } else if (selectedPriceRange === '1000-3000') {
      list = list.filter((p) => p.price >= 1000 && p.price <= 3000);
    } else if (selectedPriceRange === '3000-6000') {
      list = list.filter((p) => p.price > 3000 && p.price <= 6000);
    } else if (selectedPriceRange === 'above-6000') {
      list = list.filter((p) => p.price > 6000);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      list.reverse();
    }

    return list;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedProductType,
    selectedPriceRange,
    sortBy,
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedCategoryFilter(null);
    setSelectedBrand('all');
    setSelectedProductType('all');
    setSelectedPriceRange('all');
    setSearchQuery('');
    setSortBy('relevance');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedBrand !== 'all' ||
    selectedProductType !== 'all' ||
    selectedPriceRange !== 'all' ||
    searchQuery.trim().length > 0;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="border-b border-[#071A2B]/10 pb-10 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C89A4B]" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726]">
              CATÁLOGO EXCLUSIVO
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#071A2B] font-light tracking-tight mb-3">
            PRODUTOS PARA O SEU LAR
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 font-light leading-relaxed max-w-2xl">
            Tecnologia, praticidade e design para diferentes momentos da sua casa.
          </p>

          {/* Search indicator if searching */}
          {searchQuery && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#C89A4B]/30 rounded-xs text-xs font-sans text-[#071A2B]">
              <span>Resultados para: “{searchQuery}”</span>
              <button
                onClick={() => setSearchQuery('')}
                className="hover:text-red-700"
                aria-label="Remover busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 border border-[#071A2B]/10 rounded-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Mobile Filter Toggle Button */}
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.16em] text-[#071A2B] font-medium"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C89A4B]" />
              <span>Filtros ({filteredProducts.length} itens)</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-sans text-[#8A6726] hover:underline"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Desktop Filter Row */}
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <span className="text-xs font-sans uppercase tracking-wider text-[#1C242B]/60 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-[#C89A4B]" />
              Filtros:
            </span>

            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedCategoryFilter(e.target.value === 'all' ? null : e.target.value);
              }}
              className="text-xs font-sans px-3 py-2 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] rounded-xs focus:outline-hidden focus:border-[#C89A4B]"
            >
              <option value="all">Todas as Categorias</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Brand Select */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="text-xs font-sans px-3 py-2 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] rounded-xs focus:outline-hidden focus:border-[#C89A4B]"
            >
              <option value="all">Todas as Linhas</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="text-xs font-sans px-3 py-2 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] rounded-xs focus:outline-hidden focus:border-[#C89A4B]"
            >
              <option value="all">Todas as Faixas de Preço</option>
              <option value="under-1000">Até R$ 1.000</option>
              <option value="1000-3000">R$ 1.000 a R$ 3.000</option>
              <option value="3000-6000">R$ 3.000 a R$ 6.000</option>
              <option value="above-6000">Acima de R$ 6.000</option>
            </select>

            {/* Product Type */}
            <select
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="text-xs font-sans px-3 py-2 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] rounded-xs focus:outline-hidden focus:border-[#C89A4B]"
            >
              <option value="all">Todos os Tipos</option>
              {productTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-sans text-[#8A6726] hover:underline px-2 py-1"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Right: Sorting Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-sans text-[#1C242B]/60 shrink-0">
              Ordenar por:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="text-xs font-sans px-3 py-2 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] rounded-xs focus:outline-hidden focus:border-[#C89A4B]"
            >
              <option value="relevance">Mais relevantes</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="newest">Mais recentes</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters Dropdown Container */}
        {mobileFilterOpen && (
          <div className="md:hidden bg-white p-5 border border-[#071A2B]/10 rounded-xs mb-6 space-y-4 shadow-xs">
            <div>
              <label className="text-xs font-sans text-[#1C242B]/70 block mb-1">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedCategoryFilter(e.target.value === 'all' ? null : e.target.value);
                }}
                className="w-full text-xs font-sans p-2.5 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B]"
              >
                <option value="all">Todas as Categorias</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-sans text-[#1C242B]/70 block mb-1">
                Linha
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full text-xs font-sans p-2.5 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B]"
              >
                <option value="all">Todas as Linhas</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-sans text-[#1C242B]/70 block mb-1">
                Faixa de Preço
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full text-xs font-sans p-2.5 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B]"
              >
                <option value="all">Todas as Faixas de Preço</option>
                <option value="under-1000">Até R$ 1.000</option>
                <option value="1000-3000">R$ 1.000 a R$ 3.000</option>
                <option value="3000-6000">R$ 3.000 a R$ 6.000</option>
                <option value="above-6000">Acima de R$ 6.000</option>
              </select>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#8A6726] underline"
              >
                Limpar todos
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="px-4 py-1.5 bg-[#071A2B] text-white text-xs font-sans uppercase tracking-wider"
              >
                Aplicar
              </button>
            </div>
          </div>
        )}

        {/* Count Summary */}
        <div className="mb-6 flex justify-between items-center text-xs font-sans text-[#1C242B]/60">
          <span>Mostrando {filteredProducts.length} de {PRODUCTS.length} {PRODUCTS.length === 1 ? 'produto' : 'produtos'}</span>
          <span className="text-[11px] text-[#8A6726]">Catálogo oficial Dona Héstia</span>
        </div>

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="Nenhum eletrodoméstico coincide com os filtros selecionados. Tente ajustar os termos ou restaurar a seleção padrão."
        />
      </div>
    </div>
  );
};
