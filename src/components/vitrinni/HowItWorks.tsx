import { Card, CardContent } from "@/components/ui/card";
import { Settings, Database, Rocket, Headphones } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Implantação",
      description: "Entendemos sua necessidade e configuramos o ecossistema. Definimos quais apps serão usados e por quem, garantindo a melhor adequação ao seu negócio.",
      color: "text-primary"
    },
    {
      number: "02",
      icon: Database,
      title: "Cadastro Inicial",
      description: "Auxiliamos no cadastro de produtos, coleções, clientes e representantes. Organizamos todas as informações essenciais para começar a operar.",
      color: "text-secondary"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Uso no Dia a Dia",
      description: "A fábrica gerencia catálogo e pedidos. Os representantes usam os apps para vender, registrar e acompanhar. Tudo sincronizado em tempo real.",
      color: "text-accent"
    },
    {
      number: "04",
      icon: Headphones,
      title: "Acompanhamento e Suporte",
      description: "Oferecemos suporte contínuo para garantir o uso adequado das ferramentas. Estamos sempre disponíveis para tirar dúvidas e ajudar no que for necessário.",
      color: "text-primary"
    }
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 xl:mb-20">
          <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
            Como Funciona <span className="gradient-text">na Prática</span>
          </h2>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Um processo simples e estruturado para você começar a usar o VITRINNI Hub
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-gradient-to-br from-card to-card/50"
            >
              {/* Step Number Background */}
              <div className="absolute top-0 right-0 text-7xl md:text-8xl xl:text-9xl font-bold text-muted/10 leading-none pt-2 md:pt-4 pr-2 md:pr-4">
                {step.number}
              </div>
              
              <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6 relative z-10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 ${step.color}`}>
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <span className={`text-base md:text-lg xl:text-xl font-bold ${step.color}`}>{step.number}</span>
                      <h3 className="text-base md:text-lg xl:text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm xl:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 md:mt-12 xl:mt-16 text-center max-w-3xl mx-auto px-4">
          <p className="text-sm md:text-base xl:text-lg text-muted-foreground">
            Todo o processo é acompanhado pela nossa equipe, garantindo que você 
            aproveite ao máximo todos os recursos do VITRINNI Hub desde o primeiro dia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
