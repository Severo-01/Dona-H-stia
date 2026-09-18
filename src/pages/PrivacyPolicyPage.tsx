import React from 'react';
import { Shield } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-14 border border-[#071A2B]/10 rounded-xs shadow-xs">
          <div className="flex items-center gap-3 text-[#8A6726] mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em]">
              TRANSPARÊNCIA &bull; LGPD
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#071A2B] font-light mb-4">
            Política de Privacidade
          </h1>

          <p className="text-xs font-sans text-[#1C242B]/50 mb-8 border-b border-[#071A2B]/10 pb-4">
            Última atualização: Setembro de 2026 &bull; Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </p>

          <div className="space-y-6 text-xs sm:text-sm font-sans font-light text-[#1C242B]/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                1. Nosso Papel: Intermediação de Ofertas Digitais
              </h2>
              <p className="mb-2">
                A <strong>Dona Héstia</strong> atua no âmbito digital como uma plataforma de curadoria e <strong>intermediação de ofertas de eletrodomésticos e utilidades para o lar</strong>. 
              </p>
              <p>
                Nosso papel é selecionar rigorosamente os melhores produtos, ofertas verificadas e cupons de desconto disponíveis em plataformas e marketplaces parceiros oficiais (como Shopee e parceiros homologados). Ao clicar em comprar ou em links de produtos, você é direcionado com segurança diretamente para o ambiente oficial de pagamento da plataforma parceira que processará a transação.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                2. Acesso Livre: Sem Exigência de Login ou Dados Sigilosos
              </h2>
              <p className="mb-2">
                Para navegar, consultar o catálogo, ver avaliações, comparar especificações e acessar todas as ofertas da Dona Héstia, <strong>você não precisa criar cadastro, realizar login nem fornecer senhas</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Não coletamos dados bancários:</strong> Número de cartão de crédito, código de segurança (CVV) ou chaves financeiras nunca são solicitados em nosso site.</li>
                <li><strong>Sem exigência de senhas:</strong> Sua experiência é fluida, transparente e sem burocracias de contas ou credenciais sigilosas.</li>
                <li><strong>Contato opcional:</strong> Dados como nome e e-mail são preenchidos exclusivamente se você decidir entrar em contato voluntariamente para tirar dúvidas.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                3. Ambiente Seguro e Autenticado pelo Google
              </h2>
              <p className="mb-2">
                Nossa infraestrutura tecnológica opera em um <strong>ambiente em nuvem de alta segurança, hospedado e autenticado pelo Google Cloud</strong>, com:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Certificado digital criptográfico SSL/TLS de ponta a ponta (HTTPS), garantindo comunicação blindada entre seu dispositivo e nossos servidores;</li>
                <li>Servidores protegidos pelos padrões globais de segurança, autenticação e proteção contra ameaças da infraestrutura Google;</li>
                <li>Monitoramento contínuo de integridade para prevenção de acessos indevidos e salvaguarda da privacidade dos usuários.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                4. Informações que Podem Ser Fornecidas Voluntariamente
              </h2>
              <p className="mb-2">
                Coletamos apenas dados fornecidos expressamente e por iniciativa própria do visitante nas seguintes hipóteses:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Mensagens de atendimento e dúvidas:</strong> Nome completo, e-mail e telefone informados ao enviar formulários de suporte;</li>
                <li><strong>Boletim de novidades:</strong> E-mail informado caso queira receber curadorias de produtos e receitas;</li>
                <li><strong>Métricas anônimas:</strong> Registros técnicos estritamente estatísticos e anonimizados de navegação para aperfeiçoar a velocidade e usabilidade do site.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                5. Links Externos e Plataformas Parceiras
              </h2>
              <p>
                Ao seguir links de compra para plataformas parceiras (por exemplo, Shopee), o processamento do pagamento, cálculo de frete final e emissão de nota fiscal serão regidos pelas políticas de privacidade e termos de serviço de tais plataformas. Recomendamos a leitura atenta das diretrizes de cada parceiro no momento da conclusão do pedido.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-[#071A2B] font-medium mb-2">
                6. Seus Direitos e Atendimento LGPD
              </h2>
              <p>
                Em cumprimento à Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), você poderá solicitar a qualquer momento a confirmação de registros de contato existentes ou solicitar sua exclusão imediata pelo e-mail oficial: <a href="mailto:lardonahestia@gmail.com" className="text-[#8A6726] underline font-medium">lardonahestia@gmail.com</a>.
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
              onClick={() => navigateTo('/termos')}
              className="text-xs font-sans text-[#8A6726] hover:underline"
            >
              Consulte também os Termos e Condições
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
