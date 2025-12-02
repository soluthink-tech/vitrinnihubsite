import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
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
            Termos de Uso
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="leading-relaxed">
                Ao acessar e usar o VITRINNI Hub, você concorda em cumprir e estar vinculado
                a estes Termos de Uso. Se você não concordar com qualquer parte destes termos,
                não deverá usar nossos serviços. Estes termos aplicam-se a todos os usuários,
                incluindo fabricantes, representantes e visitantes do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="leading-relaxed">
                O VITRINNI Hub é um ecossistema integrado de aplicativos para gestão de vendas
                no segmento de confecção, composto por três soluções: VITRINNI Fábrica,
                VITRINNI Representante e VITRINNI Multimarcas. O serviço permite a gestão de
                produtos, coleções, clientes, pedidos e relatórios de vendas.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                3. Cadastro e Conta de Usuário
              </h2>
              <p className="leading-relaxed mb-3">
                Para utilizar o VITRINNI Hub, você deve:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro</li>
                <li>Manter suas credenciais de acesso seguras e confidenciais</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                <li>Ser responsável por todas as atividades realizadas em sua conta</li>
                <li>Ter capacidade legal para celebrar contratos vinculativos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                4. Uso Aceitável
              </h2>
              <p className="leading-relaxed mb-3">
                Ao usar o VITRINNI Hub, você concorda em NÃO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violar qualquer lei ou regulamento aplicável</li>
                <li>Infringir direitos de propriedade intelectual de terceiros</li>
                <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Tentar obter acesso não autorizado a sistemas ou redes</li>
                <li>Usar o serviço para fins fraudulentos ou enganosos</li>
                <li>Interferir ou interromper o funcionamento do serviço</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
                <li>Revender ou redistribuir o serviço sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                5. Propriedade Intelectual
              </h2>
              <p className="leading-relaxed">
                Todo o conteúdo do VITRINNI Hub, incluindo mas não limitado a textos, gráficos,
                logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações
                de dados, é propriedade da Soluthink Tech ou de seus fornecedores de conteúdo
                e está protegido por leis de direitos autorais brasileiras e internacionais.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                6. Pagamentos e Assinaturas
              </h2>
              <p className="leading-relaxed mb-3">
                Os serviços do VITRINNI Hub são oferecidos mediante pagamento de taxas de
                assinatura:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Planos:</strong> Diferentes planos estão
                  disponíveis com recursos e preços variados
                </li>
                <li>
                  <strong className="text-foreground">Faturamento:</strong> As cobranças são
                  realizadas de acordo com o plano escolhido (mensal ou anual)
                </li>
                <li>
                  <strong className="text-foreground">Renovação:</strong> As assinaturas são
                  renovadas automaticamente, salvo cancelamento prévio
                </li>
                <li>
                  <strong className="text-foreground">Reembolso:</strong> Políticas de reembolso
                  são aplicadas conforme o Código de Defesa do Consumidor
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                7. Cancelamento e Suspensão
              </h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de suspender ou encerrar sua conta e acesso ao serviço,
                a qualquer momento e sem aviso prévio, se você violar estes Termos de Uso ou
                se envolver em atividades fraudulentas ou ilegais. Você pode cancelar sua
                assinatura a qualquer momento através das configurações da conta.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                8. Limitação de Responsabilidade
              </h2>
              <p className="leading-relaxed">
                O VITRINNI Hub é fornecido "como está" e "conforme disponível". Não garantimos
                que o serviço será ininterrupto, livre de erros ou completamente seguro. Em
                nenhuma circunstância a Soluthink Tech será responsável por danos indiretos,
                incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros,
                dados ou outras perdas intangíveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                9. Indenização
              </h2>
              <p className="leading-relaxed">
                Você concorda em indenizar e isentar a Soluthink Tech, seus diretores,
                funcionários e parceiros de quaisquer reivindicações, danos, obrigações,
                perdas, responsabilidades, custos ou dívidas, e despesas decorrentes de:
                (a) seu uso do serviço; (b) violação destes Termos de Uso; ou (c) violação
                de qualquer direito de terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                10. Modificações do Serviço e dos Termos
              </h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de modificar ou descontinuar, temporária ou
                permanentemente, o serviço (ou qualquer parte dele) com ou sem aviso prévio.
                Também podemos revisar estes Termos de Uso periodicamente. Seu uso continuado
                do serviço após tais modificações constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                11. Lei Aplicável e Jurisdição
              </h2>
              <p className="leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
                Qualquer disputa relacionada a estes termos será submetida à jurisdição
                exclusiva dos tribunais da comarca de São Paulo, SP, Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                12. Disposições Gerais
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Integralidade:</strong> Estes termos
                  constituem o acordo integral entre você e a Soluthink Tech
                </li>
                <li>
                  <strong className="text-foreground">Renúncia:</strong> A falha em exercer
                  qualquer direito não constitui renúncia a esse direito
                </li>
                <li>
                  <strong className="text-foreground">Divisibilidade:</strong> Se qualquer
                  disposição for considerada inválida, as demais permanecerão em vigor
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                13. Contato
              </h2>
              <p className="leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco:
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

export default TermsOfUse;
