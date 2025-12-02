import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 xl:px-6 py-8 xl:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg xl:text-xl font-bold">Soluthink Tech</h3>
            <p className="text-sm xl:text-base text-primary-foreground/80">
              Empresa de tecnologia criadora do VITRINNI Ecosystem - soluções 
              inovadoras para gestão de vendas no segmento de confecção.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg xl:text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm xl:text-base">
              <li>
                <a href="#ecosystem" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  O Ecossistema
                </a>
              </li>
              <li>
                <a href="#recursos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg xl:text-xl font-bold">Contato</h3>
            <ul className="space-y-2 text-sm xl:text-base text-primary-foreground/80">
              <li>
                <a href="mailto:contato@soluthinktech.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@soluthinktech.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:text-primary-foreground transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg xl:text-xl font-bold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/soluthink/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/soluthink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCx_G7YqmpGq-wpgcSpfqFMg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://br.linkedin.com/company/soluthink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-primary-foreground/20 pt-6 mb-6">
          <h4 className="text-sm font-semibold mb-3">Formas de Pagamento</h4>
          <img 
            src="/images/payment-methods.png" 
            alt="Formas de pagamento aceitas"
            className="h-12 xl:h-16 w-auto opacity-90"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>{currentYear} Soluthink Tech - VITRINNI Ecosystem</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
