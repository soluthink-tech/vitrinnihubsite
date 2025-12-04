import { Button } from "@/components/ui/button";
import { Sparkles, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

const ComingSoon = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/70 to-background/85" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-300 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground dark:text-white">
              Plataforma Completa de Gestão
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="gradient-text block mb-3">
              {SITE_CONFIG.name}
            </span>
            <span className="text-foreground dark:text-white text-2xl md:text-4xl xl:text-5xl block">
              {SITE_CONFIG.tagline}
            </span>
          </h1>

          {/* Coming Soon Badge */}
          <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse" />
              <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/90 via-secondary/90 to-accent/90 backdrop-blur-sm border border-white/20">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  🚀 Em Breve
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl xl:text-2xl text-foreground/90 dark:text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 drop-shadow-lg">
            {SITE_CONFIG.description}
            <span className="block mt-4 text-base md:text-lg text-foreground/80 dark:text-white/80">
              Estamos preparando algo incrível para você! 
              <br />
              Aguarde o lançamento da nossa plataforma revolucionária.
            </span>
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm transition-all text-white"
              asChild
            >
              <a href={`mailto:${SITE_CONFIG.email}`}>
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm transition-all text-white"
              asChild
            >
              <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>

          {/* Social Media */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <p className="text-sm text-foreground/70 dark:text-white/70 mb-4">
              Siga-nos nas redes sociais
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-2 border-primary/50 dark:border-white/40 bg-primary/90 dark:bg-transparent hover:bg-primary dark:hover:bg-white/10 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-foreground/10 dark:border-white/10 animate-in fade-in duration-700 delay-600">
            <p className="text-sm text-foreground/60 dark:text-white/60">
              2025 {SITE_CONFIG.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
