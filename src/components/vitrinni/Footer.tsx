import { Instagram, Linkedin, Youtube } from "lucide-react";

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
                  <a href="mailto:contato@soluthinktech.com.br" className="hover:text-primary-foreground transition-colors break-all">
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
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold">Redes Sociais</h3>
              <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/soluthink/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCx_G7YqmpGq-wpgcSpfqFMg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://br.linkedin.com/company/soluthink"
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
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Disponível no</div>
                    <div className="text-xs font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Disponível na</div>
                    <div className="text-xs font-semibold leading-tight">App Store</div>
                  </div>
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
          <p>{currentYear} Soluthink Tech - VITRINNI Hub</p>
          <div className="flex gap-3 md:gap-4">
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
