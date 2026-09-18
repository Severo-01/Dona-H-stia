import React from 'react';
import { FileText } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const TermsPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-14 border border-[#071A2B]/10 rounded-xs shadow-xs">
          <div className="flex items-center gap-3 text-[#8A6726] mb-4">
            <FileText className="w-5 h-5" />
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em]">
              DIRETRIZES &bull; TERMOS DE USO
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#071A2B] font-light mb-4">
            Termos e Condições
          </h1>

          <p className="text-xs font-sans text-[#1C242B]/50 mb-8 border-b border-[#071A2B]/10 pb-4">
            Última atualização: Setembro de 2026 &bull; Dona Héstia Eletrodomésticos Ltda.
          </p>

          <div className="space-y-6 text-xs sm:text-sm font-sans font-light text-[#1C242B]/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e navegar pelo website da <strong>Dona Héstia</strong>, você concorda em cumprir e vincular-se aos presentes Termos e Condições de Uso, bem como à nossa Política de Privacidade e à legislação brasileira aplicável.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                2. Natureza das Informações e Demonstração
              </h2>
              <p>
                O website Dona Héstia visa apresentar o catálogo, a identidade e as diretrizes estéticas da marca. Todos os produtos exibidos contêm especificações técnicas realistas e dimensões exatas de projeto. Eventuais itens com sinalização demonstrativa não configuram oferta contratual irrevogável.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                3. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo o nome comercial <em>Dona Héstia</em>, o slogan <em>“O Coração do Seu Lar”</em>, os logotipos, fotografias, textos, layouts editoriais e elementos gráficos são protegidos pelas leis de propriedade intelectual e direitos autorais. É vedada a reprodução total ou parcial sem autorização prévia por escrito.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                4. Especificações de Instalação e Compatibilidade
              </h2>
              <p>
                A aquisição de eletrodomésticos de grande porte (como refrigeradores French Door, fornos de embutir e cooktops) exige prévia verificação das dimensões dos nichos, pontos de energia elétrica (127V ou 220V) e pressão de água. Recomendamos a consulta ao nosso serviço de concierge para orientação técnica.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                5. Foro e Legislação Aplicável
              </h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil, em particular o Código de Defesa do Consumidor (Lei nº 8.078/1990) e o Marco Civil da Internet. Fica eleito o Foro da Comarca de São Paulo/SP para dirimir quaisquer dúvidas decorrentes do presente instrumento.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-[#071A2B]/10 flex justify-between items-center">
            <button
              onClick={() => navigateTo('/')}
              className="text-xs font-sans text-[#071A2B] hover:text-[#C89A4B] uppercase tracking-wider font-medium"
            >
              &larr; Voltar à Página Inicial
            </button>
            <button
              onClick={() => navigateTo('/contato')}
              className="text-xs font-sans text-[#8A6726] hover:underline"
            >
              Falar com o Atendimento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
