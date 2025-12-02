import { Card, CardContent } from "@/components/ui/card";
import { 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Smartphone, 
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Gestão de Produtos e Coleções",
      description: "Organize mostruários, produtos e coleções de forma intuitiva"
    },
    {
      icon: Users,
      title: "Cadastro de Clientes",
      description: "Gerencie clientes, regiões e informações de forma centralizada"
    },
    {
      icon: ShoppingCart,
      title: "Registro de Pedidos",
      description: "Registre e acompanhe pedidos com agilidade e precisão"
    },
    {
      icon: BarChart3,
      title: "Relatórios e Análises",
      description: "Tenha visão completa das vendas com relatórios detalhados"
    },
    {
      icon: Smartphone,
      title: "Multiplataforma",
      description: "Acesse de qualquer dispositivo: notebook, tablet ou celular"
    },
    {
      icon: CheckCircle2,
      title: "Mais Organização",
      description: "Elimine planilhas e papéis, centralize tudo em um só lugar"
    },
    {
      icon: Zap,
      title: "Agilidade nas Visitas",
      description: "Apresente catálogos e feche pedidos com muito mais rapidez"
    },
    {
      icon: Shield,
      title: "Menos Erros",
      description: "Reduza erros de digitação e informações desencontradas"
    },
    {
      icon: TrendingUp,
      title: "Imagem Profissional",
      description: "Impressione clientes com apresentação moderna e organizada"
    }
  ];

  return (
    <section id="recursos" className="py-12 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            Principais <span className="gradient-text">Recursos e Benefícios</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para transformar a gestão de vendas do seu negócio
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm xl:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 xl:mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-6 xl:p-8 border border-border">
            <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">
              Conexão Total Entre Fábrica e Representantes
            </h3>
            <p className="text-base xl:text-lg text-muted-foreground max-w-3xl mx-auto">
              O VITRINNI Ecosystem mantém todos conectados e sincronizados. 
              Quando a fábrica atualiza produtos ou preços, os representantes 
              recebem as informações instantaneamente. Pedidos registrados pelos 
              representantes chegam automaticamente na fábrica. Tudo integrado, 
              tudo em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
