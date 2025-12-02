import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 xl:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold gradient-text">
              VITRINNI Hub
            </h1>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 xl:px-6 py-8 md:py-12 xl:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                A Soluthink Tech, desenvolvedora do VITRINNI Hub, está comprometida em proteger
                a privacidade e os dados pessoais de seus usuários. Esta Política de Privacidade
                descreve como coletamos, usamos, armazenamos e protegemos suas informações
                quando você utiliza nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="leading-relaxed mb-3">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Informações de Cadastro:</strong> Nome, e-mail,
                  telefone, empresa e cargo.
                </li>
                <li>
                  <strong className="text-foreground">Informações de Uso:</strong> Dados sobre como
                  você utiliza o VITRINNI Hub, incluindo produtos cadastrados, pedidos realizados
                  e interações com o sistema.
                </li>
                <li>
                  <strong className="text-foreground">Informações Técnicas:</strong> Endereço IP,
                  tipo de navegador, sistema operacional e dados de dispositivo.
                </li>
                <li>
                  <strong className="text-foreground">Informações de Pagamento:</strong> Dados
                  necessários para processar pagamentos, armazenados de forma segura por nossos
                  parceiros de pagamento certificados.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="leading-relaxed mb-3">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer, operar e manter nossos serviços</li>
                <li>Processar transações e enviar notificações relacionadas</li>
                <li>Melhorar, personalizar e expandir nossos serviços</li>
                <li>Comunicar com você sobre atualizações, suporte e informações promocionais</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="leading-relaxed mb-3">
                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas
                seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Prestadores de Serviços:</strong> Com empresas
                  que nos auxiliam na operação do negócio (hospedagem, pagamentos, análises).
                </li>
                <li>
                  <strong className="text-foreground">Requisitos Legais:</strong> Quando exigido por
                  lei ou para proteger nossos direitos legais.
                </li>
                <li>
                  <strong className="text-foreground">Transferência de Negócio:</strong> Em caso de
                  fusão, aquisição ou venda de ativos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para
                proteger suas informações pessoais contra acesso não autorizado, alteração,
                divulgação ou destruição. Isso inclui criptografia de dados, controles de acesso
                e monitoramento contínuo de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                6. Seus Direitos
              </h2>
              <p className="leading-relaxed mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar o consentimento para uso de seus dados</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Obter informações sobre o compartilhamento de seus dados</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Para exercer esses direitos, entre em contato conosco através do e-mail:
                contato@soluthinktech.com.br
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                7. Cookies e Tecnologias Similares
              </h2>
              <p className="leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência,
                analisar o uso do serviço e personalizar conteúdo. Você pode controlar o uso
                de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                8. Retenção de Dados
              </h2>
              <p className="leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir
                os propósitos descritos nesta política, a menos que um período de retenção
                mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                9. Alterações nesta Política
              </h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
                você sobre quaisquer alterações significativas através do e-mail cadastrado
                ou por meio de um aviso em nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                10. Contato
              </h2>
              <p className="leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos
                seus dados pessoais, entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold text-foreground">Soluthink Tech</p>
                <p>E-mail: contato@soluthinktech.com.br</p>
                <p>Telefone: (11) 99999-9999</p>
                <p>Endereço: São Paulo - SP</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Última atualização: Dezembro de 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
