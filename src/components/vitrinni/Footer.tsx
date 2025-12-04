import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 xl:px-6 py-6 md:py-10 xl:py-12">
        {/* Main Footer Content - Centered */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-8 text-center md:text-left">
            {/* Quick Links */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Links Rápidos</h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
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
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Contato</h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-primary-foreground/80">
                <li>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary-foreground transition-colors break-all">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li>{SITE_CONFIG.location}</li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Redes Sociais</h3>
              <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            {/* Download Apps */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Baixe o App</h3>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://miaoda-conversation-file.s3cdn.medo.dev/user-7ykv9uq5v08w/conv-7yl5nf8ukzr4/20251203/file-7yv95c03fym8.png"
                    alt="Disponível no Google Play"
                    className="h-10 md:h-12 w-auto"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://miaoda-conversation-file.s3cdn.medo.dev/user-7ykv9uq5v08w/conv-7yl5nf8ukzr4/20251203/file-7yv95c03h0jk.png"
                    alt="Disponível na App Store"
                    className="h-10 md:h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Formas de Pagamento</h3>
              <div className="flex items-start justify-center md:justify-start">
                <img
                  src="https://miaoda-edit-image.s3cdn.medo.dev/7yl5nf8ukzr5/IMG-7yuj7uhp24g0.png"
                  alt="Formas de pagamento aceitas: Visa, Mastercard, Elo, American Express, Hipercard, Diners Club, Hiper, Aura, JCB, Discover, Pix e Boleto"
                  className="h-auto w-full max-w-[180px] md:max-w-[200px] opacity-90"
                  data-editor-config="%7B%22defaultSrc%22%3A%22https%3A%2F%2Fmiaoda-edit-image.s3cdn.medo.dev%2F7yl5nf8ukzr5%2FIMG-7yuj7uhp24g0.png%22%7D"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-primary-foreground/80 max-w-6xl mx-auto">
          <p>{currentYear} Soluthink Tech - {SITE_CONFIG.name}</p>
          <div className="flex gap-3 md:gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-primary-foreground transition-colors">Política de Privacidade</Link>
            <span>|</span>
            <Link to="/termos-de-uso" className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
