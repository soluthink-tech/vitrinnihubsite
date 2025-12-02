import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Laptop, Tablet } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 xl:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-hero opacity-10" />
      
      <div className="container mx-auto px-4 xl:px-6 py-12 xl:py-20 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center xl:text-left">
            <h1 className="text-3xl xl:text-6xl font-bold mb-4 xl:mb-6 leading-tight">
              <span className="gradient-text">VITRINNI Ecosystem</span>
              <br />
              <span className="text-foreground">
                Gestão Completa de Vendas para a Indústria de Confecção
              </span>
            </h1>
            
            <p className="text-base xl:text-xl text-muted-foreground mb-6 xl:mb-8 max-w-2xl mx-auto xl:mx-0">
              Organize coleções, pedidos e clientes em um único ecossistema integrado. 
              Mais agilidade nas vendas, visão unificada do negócio e controle total 
              para fabricantes, representantes e multimarcas.
            </p>

            <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("ecosystem")}
                className="bg-primary hover:bg-primary/90 text-base xl:text-lg px-6 xl:px-8"
              >
                Conhecer o VITRINNI Ecosystem
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contato")}
                className="text-base xl:text-lg px-6 xl:px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Solicitar Demonstração
              </Button>
            </div>
          </div>

          {/* Right Content - Devices Illustration */}
          <div className="relative">
            <div className="relative flex items-center justify-center gap-4">
              {/* Hero image */}
              <div className="relative w-full h-64 xl:h-96 rounded-2xl overflow-hidden border border-border shadow-lg">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/fd083574-ba38-4b65-a0fe-b2797834093c.jpg"
                  alt="VITRINNI Ecosystem em múltiplos dispositivos - laptop, tablet e smartphone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-4 items-center justify-center">
                  <div className="flex flex-col items-center gap-1 text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <Laptop className="w-6 h-6 xl:w-8 xl:h-8" />
                    <span className="text-xs font-medium">Desktop</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-secondary-foreground bg-secondary/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <Tablet className="w-5 h-5 xl:w-7 xl:h-7" />
                    <span className="text-xs font-medium">Tablet</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-accent-foreground bg-accent/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <Smartphone className="w-4 h-4 xl:w-6 xl:h-6" />
                    <span className="text-xs font-medium">Mobile</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 xl:w-32 xl:h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 xl:w-32 xl:h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
