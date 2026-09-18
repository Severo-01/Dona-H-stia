import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowLeft,
  Share2,
  ExternalLink,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const { navigateTo } = useNavigation();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  }, [slug]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVoltage, setSelectedVoltage] = useState('220V');
  const [isCopied, setIsCopied] = useState(false);

  // Related products from same category
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
  }, [product]);

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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Confira ${product.name} na Dona Héstia`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-[#071A2B]/10 text-xs font-sans text-[#1C242B]/70">
          <button
            onClick={() => navigateTo('/produtos')}
            className="inline-flex items-center gap-2 hover:text-[#071A2B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C89A4B]" />
            <span className="uppercase tracking-wider">Voltar ao catálogo</span>
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <span
              onClick={() => navigateTo('/')}
              className="cursor-pointer hover:underline"
            >
              Início
            </span>
            <span>/</span>
            <span
              onClick={() => navigateTo('/produtos', { category: product.category })}
              className="cursor-pointer hover:underline capitalize"
            >
              {product.categoryLabel}
            </span>
            <span>/</span>
            <span className="text-[#071A2B] font-medium truncate max-w-xs">
              {product.name}
            </span>
          </div>
        </div>

        {/* Curation & Safety Notice */}
        <div className="bg-white/90 border-l-2 border-[#C89A4B] p-3 sm:p-4 mb-8 rounded-xs flex items-center justify-between gap-4 text-xs font-sans text-[#071A2B]/80 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C89A4B]" />
            <span>
              <strong>Curadoria Dona Héstia:</strong> Seleção criteriosa com redirecionamento direto para a oferta verificada.
            </span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-[#8A6726] hover:text-[#071A2B] shrink-0 font-medium"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isCopied ? 'Link Copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start bg-white p-6 sm:p-10 border border-[#071A2B]/10 rounded-xs shadow-xs mb-16">
          {/* Gallery: Left (col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-4/3 sm:aspect-16/12 bg-[#F5F0E8]/40 border border-[#071A2B]/10 rounded-xs overflow-hidden flex items-center justify-center p-6">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#071A2B] text-[#E0B866] text-[10px] font-sans font-medium uppercase tracking-[0.2em] rounded-xs border border-[#C89A4B]/30">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-20 shrink-0 border-2 rounded-xs overflow-hidden bg-[#F5F0E8] p-1 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#C89A4B] shadow-xs'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions: Right (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Brand & Platform */}
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                <span className="text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#C89A4B]">
                  {product.categoryLabel} &bull; {product.productType}
                </span>
                <div className="flex items-center gap-2">
                  {product.platform && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#EE4D2D]/10 border border-[#EE4D2D]/25 text-[#EE4D2D] text-[10px] font-sans font-medium tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EE4D2D]"></span>
                      Oferta {product.platform}
                    </span>
                  )}
                  <span className="text-xs font-sans text-[#1C242B]/50">
                    {product.brand}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#071A2B] font-light leading-tight mb-4">
                {product.name}
              </h1>

              {/* Price block */}
              <div className="py-4 border-y border-[#071A2B]/10 my-4">
                <span className="block text-[11px] font-sans font-medium uppercase tracking-wider text-[#8A6726] mb-1">
                  Preço aproximado
                </span>
                {product.priceRangeLabel ? (
                  <div className="flex items-baseline flex-wrap gap-3">
                    <span className="font-sans text-2xl sm:text-3xl font-semibold text-[#071A2B] tracking-tight">
                      {product.priceRangeLabel}
                    </span>
                    <span className="text-xs font-sans text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      Varia conforme cupom e promoção do dia
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-2xl sm:text-3xl font-semibold text-[#071A2B] tracking-tight">
                      {formattedPrice}
                    </span>
                    <span className="text-xs font-sans text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs">
                      À vista com desconto
                    </span>
                  </div>
                )}
                <p className="text-xs font-sans text-[#1C242B]/60 mt-1.5">
                  Consulte condições de parcelamento e cupons ativos na página oficial da oferta.
                </p>
              </div>

              {/* Short description */}
              <p className="font-sans text-xs sm:text-sm text-[#1C242B]/80 font-light leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Configuration options (Voltagem) */}
              <div className="mb-6 space-y-3">
                <label className="text-xs font-sans uppercase tracking-wider text-[#1C242B]/70 block font-medium">
                  Voltagem do Eletrodoméstico
                </label>
                <div className="flex gap-3">
                  {['127V', '220V'].map((volt) => (
                    <button
                      key={volt}
                      type="button"
                      onClick={() => setSelectedVoltage(volt)}
                      className={`flex-1 py-2.5 px-4 text-xs font-sans uppercase tracking-wider border rounded-xs transition-colors ${
                        selectedVoltage === volt
                          ? 'border-[#071A2B] bg-[#071A2B] text-white font-medium'
                          : 'border-[#071A2B]/20 bg-transparent text-[#071A2B] hover:border-[#071A2B]'
                      }`}
                    >
                      {volt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-3 pt-2">
                {/* Primary Buy Now Button (Direct to official partner store) */}
                <a
                  href={product.buyUrl || 'https://s.shopee.com.br/112vcBEklr'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#071A2B] hover:bg-[#0D263D] text-[#F5F0E8] text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-semibold rounded-xs transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg border border-[#C89A4B]/40 group"
                >
                  <span className="group-hover:text-[#E0B866] transition-colors">
                    COMPRAR NA LOJA OFICIAL
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#E0B866]" />
                </a>

                {/* Secondary Contact action */}
                <button
                  onClick={() => navigateTo('/contato')}
                  className="w-full py-3 border border-[#C89A4B]/60 text-[#8A6726] hover:bg-[#C89A4B]/10 text-xs font-sans tracking-[0.16em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C89A4B]" />
                  <span>Tirar Dúvidas</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 border border-[#071A2B]/10 rounded-xs shadow-xs mb-16">
          {/* Left: Detailed text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#071A2B] font-light">
              Harmonia &amp; Funcionalidade
            </h2>
            <p className="font-sans text-sm text-[#1C242B]/80 font-light leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="pt-4">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C89A4B] mb-3">
                Características Principais
              </h3>
              <ul className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-[#1C242B]/85">
                    <CheckCircle className="w-4 h-4 text-[#C89A4B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Technical Specifications */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#071A2B] font-light mb-6">
              Especificações Técnicas
            </h2>

            <div className="divide-y divide-[#071A2B]/10 border-y border-[#071A2B]/10 text-xs font-sans">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="py-2.5 flex justify-between gap-4">
                  <span className="text-[#1C242B]/60 font-light">{key}</span>
                  <span className="text-[#071A2B] font-medium text-right">{val}</span>
                </div>
              ))}
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-[#1C242B]/60 font-light">Dimensões (L x A x P)</span>
                <span className="text-[#071A2B] font-medium text-right">
                  {product.dimensions.width} &times; {product.dimensions.height} &times; {product.dimensions.depth}
                </span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-[#1C242B]/60 font-light">Peso Líquido</span>
                <span className="text-[#071A2B] font-medium text-right">
                  {product.dimensions.weight}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="border-b border-[#071A2B]/10 pb-4 mb-8">
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.26em] text-[#8A6726] block">
                COMPOSIÇÃO SUGERIDA
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#071A2B] font-light">
                Outras escolhas para o mesmo ambiente
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
