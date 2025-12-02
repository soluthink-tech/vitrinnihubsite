import { Card, CardContent } from "@/components/ui/card";
import { Building2, UserCheck, Store } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Fábricas e Confecções",
      description: "Profissionalize a gestão de representantes e pedidos. Tenha controle total sobre suas coleções, tabelas de preços e acompanhe as vendas em tempo real.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: UserCheck,
      title: "Representantes Exclusivos",
      description: "Ganhe mobilidade e organização no dia a dia. Apresente catálogos digitais, registre pedidos com agilidade e impressione seus clientes com profissionalismo.",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Store,
      title: "Representantes Multimarcas",
      description: "Centralize todas as marcas que você representa em uma única ferramenta confiável. Organize catálogos, clientes e pedidos sem complicação.",
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            Para Quem é o <span className="gradient-text">VITRINNI Hub</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções desenvolvidas especialmente para cada perfil do mercado de confecção
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${audience.gradient}`} />
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-4`}>
                    <audience.icon className="w-7 h-7 xl:w-8 xl:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg xl:text-xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
