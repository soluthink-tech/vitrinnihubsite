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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 xl:pt-20">
      <div className="container mx-auto px-4 xl:px-6 py-12 xl:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 mb-6 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Plataforma Completa de Gestão</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl xl:text-7xl font-bold mb-6 xl:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="gradient-text block mb-2">VITRINNI Ecosystem</span>
            <span className="text-foreground text-2xl xl:text-5xl block">
              Transforme Suas Vendas
            </span>
          </h1>
          
          <p className="text-lg xl:text-2xl text-muted-foreground mb-8 xl:mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Ecossistema integrado para fabricantes, representantes e multimarcas. 
            <span className="text-foreground font-semibold"> Organize, venda e cresça</span> com tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("ecosystem")}
              className="text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all duration-300"
            >
              Conhecer Soluções
            </Button>
          </div>

          {/* Floating Image */}
          <div className="mt-12 xl:mt-16 relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl backdrop-blur-sm bg-card/30 hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/fd083574-ba38-4b65-a0fe-b2797834093c.jpg"
                alt="VITRINNI Ecosystem - Interface moderna"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating orbs */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
