import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="flex items-center justify-between h-16 xl:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl xl:text-2xl font-bold gradient-text">
              VITRINNI Hub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              O Ecossistema
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90">
              Solicitar Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("ecosystem")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                O Ecossistema
              </button>
              <button
                onClick={() => scrollToSection("recursos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection("contato")} className="bg-primary hover:bg-primary/90 w-full">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
