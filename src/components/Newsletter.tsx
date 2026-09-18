import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#071A2B]/10">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[10px] font-sans font-medium uppercase tracking-[0.28em] text-[#8A6726] block mb-3">
          INSPIRAÇÃO &amp; CONVÍVIO
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#071A2B] font-light mb-4">
          INSPIRAÇÃO PARA O SEU LAR
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#1C242B]/75 leading-relaxed font-light mb-8 max-w-lg mx-auto">
          Receba novidades, produtos selecionados e oportunidades para deixar sua casa ainda mais confortável.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-3 p-4 bg-[#F5F0E8] border border-[#C89A4B]/40 rounded-xs text-[#071A2B] animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#8A6726] shrink-0" />
            <div className="text-left">
              <p className="font-sans text-xs font-semibold">Obrigado por se juntar a nós.</p>
              <p className="font-sans text-[11px] text-[#1C242B]/70">
                Você receberá nossa curadoria de aconchego e lançamentos no endereço informado.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Seu melhor e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 bg-[#F5F0E8] border border-[#071A2B]/15 text-[#071A2B] placeholder:text-[#1C242B]/40 text-xs font-sans rounded-xs focus:outline-hidden focus:border-[#C89A4B] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#071A2B] hover:bg-[#0D263D] text-[#F5F0E8] text-xs font-sans tracking-[0.18em] uppercase font-medium rounded-xs transition-colors duration-200 shrink-0"
            >
              QUERO RECEBER
            </button>
          </form>
        )}

        <p className="font-sans text-[11px] text-[#1C242B]/40 mt-4">
          Respeitamos sua privacidade. Cancele o recebimento a qualquer momento com apenas um clique.
        </p>
      </div>
    </section>
  );
};
