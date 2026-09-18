import React from 'react';
import { Logo } from './Logo';
import { useNavigation } from '../context/NavigationContext';
import { Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-[#071A2B] text-[#F5F0E8] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#C89A4B]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Presentation */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo variant="dark" size="lg" onClick={() => navigateTo('/')} />

            <p className="mt-6 font-sans text-xs sm:text-sm text-[#F5F0E8]/70 leading-relaxed font-light max-w-sm">
              Eletrodomésticos concebidos para transformar espaços em verdadeiros lares. Praticidade, tecnologia e aconchego para cada detalhe da sua rotina.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C89A4B] animate-pulse" />
              <span className="text-[11px] font-sans tracking-widest text-[#E0B866] uppercase">
                A chama acolhedora do seu lar
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Col 1: Navegação */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.24em] text-[#C89A4B] uppercase mb-5">
                NAVEGAÇÃO
              </h4>
              <ul className="space-y-3 text-xs font-sans text-[#F5F0E8]/75">
                <li>
                  <button
                    onClick={() => navigateTo('/')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/produtos')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/categorias')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Categorias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/sobre')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/contato')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Institucional */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.24em] text-[#C89A4B] uppercase mb-5">
                INSTITUCIONAL
              </h4>
              <ul className="space-y-3 text-xs font-sans text-[#F5F0E8]/75">
                <li>
                  <button
                    onClick={() => navigateTo('/politica-de-privacidade')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/termos')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Termos e Condições
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('/sobre')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Manifesto da Marca
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Atendimento */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold tracking-[0.24em] text-[#C89A4B] uppercase mb-5">
                ATENDIMENTO
              </h4>
              <ul className="space-y-3 text-xs font-sans text-[#F5F0E8]/75">
                <li>
                  <button
                    onClick={() => navigateTo('/contato')}
                    className="hover:text-[#E0B866] transition-colors"
                  >
                    Fale Conosco
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:lardonahestia@gmail.com"
                    className="hover:text-[#E0B866] transition-colors flex items-center gap-2 pt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C89A4B] shrink-0" />
                    <span className="break-all">lardonahestia@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/donahestia_oficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E0B866] transition-colors flex items-center gap-2"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C89A4B] shrink-0" />
                    <span>@donahestia_oficial</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="py-6 border-b border-white/5">
          <p className="text-[11px] sm:text-xs font-sans text-[#F5F0E8]/60 leading-relaxed max-w-4xl">
            <span className="font-semibold text-[#E0B866] tracking-wider uppercase text-[10px] sm:text-[11px] mr-1.5">
              Aviso Legal:
            </span>
            O site Dona Héstia opera como um canal de curadoria e recomendação independente. Ao clicar em nossos links, você será direcionado para a loja oficial do parceiro vendedor. Podemos receber uma comissão por vendas realizadas através destes links, sem nenhum custo adicional para você. Todos os direitos de marcas e imagens pertencem aos seus respectivos proprietários.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F5F0E8]/50">
          <p>© Dona Héstia. Todos os direitos reservados.</p>
          <p className="text-[11px] text-[#F5F0E8]/40 text-center sm:text-right">
            Catálogo e-commerce &amp; lifestyle premium &bull; Dona Héstia, o coração do seu lar
          </p>
        </div>
      </div>
    </footer>
  );
};
