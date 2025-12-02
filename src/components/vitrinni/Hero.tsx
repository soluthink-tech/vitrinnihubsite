import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 xl:pt-20">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 py-8 md:py-16 xl:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-4 md:mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
            <span className="text-xs md:text-sm font-medium">Plataforma Completa de Gestão</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold mb-4 md:mb-6 xl:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="gradient-text block mb-2">VITRINNI Ecosystem</span>
            <span className="text-foreground text-xl md:text-3xl xl:text-5xl block">
              Transforme Suas Vendas
            </span>
          </h1>
          
          <p className="text-base md:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Ecossistema integrado para fabricantes, representantes e multimarcas. 
            <span className="text-foreground font-semibold"> Organize, venda e cresça</span> com tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 px-4 sm:px-0">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("ecosystem")}
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 hover:bg-muted/50 transition-all duration-300 w-full sm:w-auto"
            >
              Conhecer Soluções
            </Button>
          </div>

          {/* Floating Image */}
          <div className="mt-8 md:mt-12 xl:mt-16 relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl backdrop-blur-sm bg-card/30 hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/fd083574-ba38-4b65-a0fe-b2797834093c.jpg"
                alt="VITRINNI Ecosystem - Interface moderna"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating orbs */}
            <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-20 h-20 md:w-32 md:h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-20 h-20 md:w-32 md:h-32 bg-accent/30 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
