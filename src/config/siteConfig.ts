/**
 * ============================================
 * CONFIGURAÇÃO DO SITE - VITRINNI HUB
 * ============================================
 * 
 * ATENÇÃO: Para ativar ou desativar o site, altere apenas a variável abaixo:
 * 
 * MAINTENANCE_MODE:
 * - true  = Site em modo de construção (exibe página "Em Breve")
 * - false = Site ativo e funcionando normalmente
 * 
 * INSTRUÇÕES PARA LANÇAMENTO:
 * 1. Abra este arquivo: src/config/siteConfig.ts
 * 2. Altere MAINTENANCE_MODE de true para false
 * 3. Salve o arquivo
 * 4. O site estará automaticamente ativo!
 * 
 * ============================================
 */

export const MAINTENANCE_MODE = true; // ← ALTERE AQUI: true = Em construção | false = Site ativo

/**
 * Outras configurações do site
 */
export const SITE_CONFIG = {
  name: "VITRINNI Hub",
  tagline: "Transforme Suas Vendas",
  description: "Ecossistema integrado para fabricantes, representantes e multimarcas",
  email: "contato@vitrinnihub.com.br",
  phone: "(34) 99116-7998",
  location: "MG - Brasil",
  social: {
    instagram: "https://www.instagram.com/soluthink/",
    youtube: "https://www.youtube.com/channel/UCx_G7YqmpGq-wpgcSpfqFMg",
    linkedin: "https://br.linkedin.com/company/soluthink"
  }
};
