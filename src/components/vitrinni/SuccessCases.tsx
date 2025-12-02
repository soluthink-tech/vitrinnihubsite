import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, TrendingUp } from "lucide-react";

const SuccessCases = () => {
  const cases = [
    {
      segment: "Confecção de Moda Feminina",
      clientType: "Fábrica",
      problem: "Dificuldade em gerenciar múltiplos representantes e controlar pedidos que chegavam por WhatsApp, e-mail e telefone",
      solution: "Implementação do VITRINNI Fábrica para centralizar catálogo e pedidos, com VITRINNI Representante para toda a equipe de vendas",
      results: [
        "Redução de 70% em erros de pedidos",
        "Aumento de 40% na produtividade dos representantes",
        "Visão em tempo real de todas as vendas"
      ]
    },
    {
      segment: "Representante de Calçados",
      clientType: "Representante Exclusivo",
      problem: "Perdia muito tempo organizando catálogos em papel e digitando pedidos manualmente após cada visita",
      solution: "Adoção do VITRINNI Representante com catálogo digital e registro de pedidos em tempo real",
      results: [
        "Economia de 3 horas por dia em tarefas administrativas",
        "Aumento de 50% no número de visitas realizadas",
        "Imagem mais profissional junto aos clientes"
      ]
    },
    {
      segment: "Representante Multimarcas",
      clientType: "Multimarcas",
      problem: "Trabalhava com 8 marcas diferentes e tinha dificuldade em organizar catálogos, preços e pedidos de cada uma",
      solution: "Centralização de todas as marcas no VITRINNI Multimarcas, com gestão unificada de clientes e pedidos",
      results: [
        "Organização total de todas as marcas em um só lugar",
        "Redução de 60% no tempo de fechamento de pedidos",
        "Aumento de 35% no faturamento mensal"
      ]
    }
  ];

  return (
    <section className="py-12 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            <span className="gradient-text">Cases de Sucesso</span> e Resultados
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como o VITRINNI Hub está transformando negócios no segmento de confecção
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {caseItem.clientType}
                  </span>
                </div>
                <CardTitle className="text-lg xl:text-xl">{caseItem.segment}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-destructive mb-2">Desafio:</h4>
                  <p className="text-sm text-muted-foreground">{caseItem.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Solução:</h4>
                  <p className="text-sm text-muted-foreground">{caseItem.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Resultados:
                  </h4>
                  <ul className="space-y-2">
                    {caseItem.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 xl:mt-12 text-center">
          <p className="text-base xl:text-lg text-muted-foreground max-w-3xl mx-auto">
            Atendemos diversos segmentos: moda feminina, masculina, infantil, calçados, 
            esportes, moda praia e muito mais. Seja qual for o seu nicho, o VITRINNI 
            Ecosystem se adapta às suas necessidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
