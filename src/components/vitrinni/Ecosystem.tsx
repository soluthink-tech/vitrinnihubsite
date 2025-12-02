import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Users, Briefcase } from "lucide-react";

const Ecosystem = () => {
  const apps = [
    {
      icon: Factory,
      title: "VITRINNI Fábrica",
      description: "Para fabricantes de confecção",
      features: [
        "Organize coleções e produtos",
        "Gerencie representantes e tabelas de preços",
        "Controle pedidos em tempo real",
        "Visão completa do negócio"
      ],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "VITRINNI Representante",
      description: "Para representantes exclusivos",
      features: [
        "Catálogo digital sempre atualizado",
        "Registre pedidos com agilidade",
        "Atenda lojistas com profissionalismo",
        "Acompanhe suas vendas"
      ],
      color: "text-secondary"
    },
    {
      icon: Briefcase,
      title: "VITRINNI Multimarcas",
      description: "Para representantes multimarcas",
      features: [
        "Trabalhe com diversas marcas",
        "Organize catálogos em um só lugar",
        "Gerencie clientes e pedidos",
        "Centralize toda sua operação"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="ecosystem" className="py-12 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            O que é o <span className="gradient-text">VITRINNI Ecosystem</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um ecossistema integrado de três aplicativos desenvolvidos para revolucionar 
            a gestão de vendas no segmento de confecção
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
          {apps.map((app, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 xl:w-16 xl:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 xl:mb-4 ${app.color}`}>
                  <app.icon className="w-6 h-6 xl:w-8 xl:h-8" />
                </div>
                <CardTitle className="text-xl xl:text-2xl">{app.title}</CardTitle>
                <CardDescription className="text-sm xl:text-base">{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 xl:space-y-3">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`mt-1 ${app.color}`}>✓</span>
                      <span className="text-sm xl:text-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-8 xl:mt-16 text-center">
          <p className="text-base xl:text-lg text-muted-foreground max-w-4xl mx-auto">
            Cada aplicativo foi desenvolvido para atender necessidades específicas, 
            mas todos trabalham de forma integrada, garantindo sincronização de dados 
            e uma experiência fluida para toda a cadeia de vendas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
