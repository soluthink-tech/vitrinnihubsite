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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/img.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - lighter for more visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 xl:px-6 py-12 md:py-20 xl:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 mb-4 md:mb-6 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
            <span className="text-xs md:text-sm font-medium text-foreground dark:text-white">Plataforma Completa de Gestão</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold mb-4 md:mb-6 xl:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="gradient-text block mb-2">VITRINNI Hub</span>
            <span className="text-foreground dark:text-white text-xl md:text-3xl xl:text-5xl block">
              Transforme Suas Vendas
            </span>
          </h1>

          <p className="text-base md:text-xl xl:text-2xl text-foreground/90 dark:text-white/90 mb-6 md:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 drop-shadow-lg">
            Ecossistema integrado para fabricantes, representantes e multimarcas.
            <span className="text-foreground dark:text-white font-semibold"> Organize, venda e cresça</span> com tecnologia de ponta.
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
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-white dark:text-white shadow-lg"
            >
              Conhecer Soluções
            </Button>
          </div>
        </div>
      </div>

      {/* Floating orbs for visual effect */}
      <div className="absolute top-1/4 left-10 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 md:w-48 md:h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700 z-0" />
    </section>
  );
};

export default Hero;
