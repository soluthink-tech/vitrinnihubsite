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
    <section id="como-funciona" className="py-12 xl:py-24">
      <div className="container mx-auto px-4 xl:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 xl:mb-16">
          <h2 className="text-2xl xl:text-4xl font-bold mb-3 xl:mb-4">
            Como Funciona <span className="gradient-text">na Prática</span>
          </h2>
          <p className="text-base xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e estruturado para você começar a usar o VITRINNI Hub
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Step Number Background */}
              <div className="absolute top-0 right-0 text-8xl xl:text-9xl font-bold text-muted/10 leading-none pt-4 pr-4">
                {step.number}
              </div>
              
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 ${step.color}`}>
                    <step.icon className="w-6 h-6 xl:w-7 xl:h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-lg xl:text-xl font-bold ${step.color}`}>{step.number}</span>
                      <h3 className="text-lg xl:text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 xl:mt-12 text-center">
          <p className="text-base xl:text-lg text-muted-foreground max-w-3xl mx-auto">
            Todo o processo é acompanhado pela nossa equipe, garantindo que você 
            aproveite ao máximo todos os recursos do VITRINNI Hub desde o primeiro dia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
