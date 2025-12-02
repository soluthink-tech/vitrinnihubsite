import { 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Smartphone, 
  Zap,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Gestão Completa",
      description: "Produtos, coleções e mostruários organizados"
    },
    {
      icon: ShoppingCart,
      title: "Pedidos Ágeis",
      description: "Registre e acompanhe com precisão"
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Visão completa das suas vendas"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Acesse de qualquer dispositivo"
    },
    {
      icon: Zap,
      title: "Sincronização Real",
      description: "Dados atualizados instantaneamente"
    },
    {
      icon: TrendingUp,
      title: "Aumente Vendas",
      description: "Mais produtividade e resultados"
    }
  ];

  return (
    <section id="recursos" className="py-12 md:py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tudo que você precisa para transformar suas vendas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center max-w-3xl mx-auto px-4">
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Conexão Total Entre Fábrica e Representantes
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Sincronização automática e em tempo real. Quando a fábrica atualiza, 
              os representantes recebem instantaneamente. Tudo integrado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
