import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const email = 'lardonahestia@gmail.com';
  const instagramHandle = '@donahestia_oficial';
  const instagramUrl = 'https://instagram.com/donahestia_oficial';

  const handleCopy = (text: string, type: 'email' | 'instagram') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedInstagram(true);
      setTimeout(() => setCopiedInstagram(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C89A4B]" />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726]">
              CANAIS OFICIAIS
            </span>
            <span className="w-6 h-[1px] bg-[#C89A4B]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#071A2B] font-light tracking-tight mb-4">
            Contatos Dona Héstia
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 leading-relaxed font-light max-w-xl mx-auto">
            Disponibilizamos abaixo nossos canais oficiais de comunicação para atendimento, dúvidas sobre produtos e parcerias.
          </p>
        </div>

        {/* Cards Grid with only Email and Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Instagram Card */}
          <div className="bg-white border border-[#071A2B]/10 rounded-xs p-8 shadow-xs flex flex-col justify-between hover:border-[#C89A4B]/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] border border-[#C89A4B]/40 flex items-center justify-center text-[#8A6726]">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-sans font-medium tracking-widest uppercase text-[#8A6726] bg-[#F5F0E8] px-3 py-1 rounded-xs border border-[#C89A4B]/20">
                  Rede Social Oficial
                </span>
              </div>

              <h2 className="font-serif text-2xl text-[#071A2B] font-light mb-1">
                Instagram
              </h2>
              <p className="font-sans text-xs text-[#1C242B]/60 font-light mb-4">
                Acompanhe publicações, novidades da marca e fale conosco via Direct Message.
              </p>

              <div className="p-4 bg-[#F5F0E8]/60 border border-[#071A2B]/10 rounded-xs mb-6">
                <span className="text-[11px] font-sans text-[#1C242B]/60 block mb-0.5">Perfil:</span>
                <span className="font-sans text-base sm:text-lg font-semibold text-[#071A2B] tracking-tight block">
                  {instagramHandle}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#071A2B] hover:bg-[#0c243b] text-[#F5F0E8] text-xs font-sans uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Acessar Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E0B866]" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(instagramHandle, 'instagram')}
                aria-label="Copiar perfil do Instagram"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#071A2B]/20 hover:border-[#071A2B] text-[#071A2B] text-xs font-sans rounded-xs transition-colors bg-white"
              >
                {copiedInstagram ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8A6726]" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-[#071A2B]/10 rounded-xs p-8 shadow-xs flex flex-col justify-between hover:border-[#C89A4B]/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] border border-[#C89A4B]/40 flex items-center justify-center text-[#8A6726]">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-sans font-medium tracking-widest uppercase text-[#8A6726] bg-[#F5F0E8] px-3 py-1 rounded-xs border border-[#C89A4B]/20">
                  Atendimento Oficial
                </span>
              </div>

              <h2 className="font-serif text-2xl text-[#071A2B] font-light mb-1">
                E-mail
              </h2>
              <p className="font-sans text-xs text-[#1C242B]/60 font-light mb-4">
                Para dúvidas, pedidos, orçamentos, orientações técnicas e parcerias.
              </p>

              <div className="p-4 bg-[#F5F0E8]/60 border border-[#071A2B]/10 rounded-xs mb-6">
                <span className="text-[11px] font-sans text-[#1C242B]/60 block mb-0.5">Endereço de e-mail:</span>
                <span className="font-sans text-sm sm:text-base font-semibold text-[#071A2B] tracking-tight break-all block">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#071A2B] hover:bg-[#0c243b] text-[#F5F0E8] text-xs font-sans uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Enviar E-mail</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E0B866]" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(email, 'email')}
                aria-label="Copiar endereço de e-mail"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#071A2B]/20 hover:border-[#071A2B] text-[#071A2B] text-xs font-sans rounded-xs transition-colors bg-white"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8A6726]" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice Box */}
        <div className="bg-white border-l-4 border-[#C89A4B] border-y border-r border-[#071A2B]/10 rounded-xs p-6 sm:p-7 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#8A6726] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-sans text-sm font-semibold text-[#071A2B]">
                Aviso de Segurança e Autenticidade
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 leading-relaxed font-light">
                Estes são os <strong>únicos contatos oficiais da plataforma</strong>. Não realizamos atendimento por número de celular, WhatsApp ou por quaisquer outros canais não listados aqui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
