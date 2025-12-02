import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, Briefcase } from "lucide-react";

const Ecosystem = () => {
  const apps = [
    {
      icon: Factory,
      title: "VITRINNI Fábrica",
      description: "Para fabricantes",
      gradient: "from-primary to-primary/60",
      features: [
        "Organize coleções e produtos",
        "Gerencie representantes",
        "Controle pedidos em tempo real"
      ]
    },
    {
      icon: Users,
      title: "VITRINNI Representante",
      description: "Para representantes exclusivos",
      gradient: "from-secondary to-secondary/60",
      features: [
        "Catálogo digital atualizado",
        "Registre pedidos com agilidade",
        "Acompanhe suas vendas"
      ]
    },
    {
      icon: Briefcase,
      title: "VITRINNI Multimarcas",
      description: "Para multimarcas",
      gradient: "from-accent to-accent/60",
      features: [
        "Trabalhe com diversas marcas",
        "Organize tudo em um lugar",
        "Centralize sua operação"
      ]
    }
  ];

  return (
    <section id="ecosystem" className="py-16 xl:py-32 relative">
      <div className="container mx-auto px-4 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 xl:mb-20">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            Três Apps, <span className="gradient-text">Um Ecossistema</span>
          </h2>
          <p className="text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções integradas para cada perfil do mercado de confecção
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                
                <ul className="space-y-3">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
