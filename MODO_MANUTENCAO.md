# 🚀 Modo de Manutenção - VITRINNI Hub

## 📋 O que é?

O site possui um sistema de **Modo de Manutenção** que permite exibir uma página "Em Breve" enquanto o site está em desenvolvimento, mantendo toda a identidade visual da marca.

## 🎯 Como Funciona?

O sistema verifica uma variável chamada `MAINTENANCE_MODE` que controla se o site está ativo ou em construção.

### Estados Possíveis:

- **`MAINTENANCE_MODE = true`** → Site em construção (exibe página "Em Breve")
- **`MAINTENANCE_MODE = false`** → Site ativo e funcionando normalmente

## 🔧 Como Ativar o Site no Dia do Lançamento

### Passo a Passo:

1. **Abra o arquivo de configuração:**
   ```
   src/config/siteConfig.ts
   ```

2. **Localize a linha 20:**
   ```typescript
   export const MAINTENANCE_MODE = true; // ← ALTERE AQUI
   ```

3. **Altere de `true` para `false`:**
   ```typescript
   export const MAINTENANCE_MODE = false; // ← Site ativo!
   ```

4. **Salve o arquivo**

5. **Pronto!** O site estará automaticamente ativo e funcionando.

## 📁 Arquivos Envolvidos

### 1. **src/config/siteConfig.ts**
- **Localização da variável:** Linha 20
- **Função:** Controla o modo de manutenção
- **Configurações adicionais:** Nome do site, redes sociais, contatos

### 2. **src/App.tsx**
- **Função:** Verifica a variável `MAINTENANCE_MODE`
- **Comportamento:** 
  - Se `true`: Renderiza a página `ComingSoon`
  - Se `false`: Renderiza o site completo

### 3. **src/pages/ComingSoon.tsx**
- **Função:** Página "Em Breve" exibida durante a manutenção
- **Características:**
  - Mantém identidade visual do VITRINNI Hub
  - Exibe informações de contato
  - Links para redes sociais
  - Design responsivo e moderno

## 🎨 Personalização da Página "Em Breve"

Você pode personalizar as informações exibidas na página "Em Breve" editando o arquivo:

```
src/config/siteConfig.ts
```

### Informações Personalizáveis:

```typescript
export const SITE_CONFIG = {
  name: "VITRINNI Hub",                    // Nome do site
  tagline: "Transforme Suas Vendas",       // Slogan
  description: "Ecossistema integrado...", // Descrição
  email: "contato@soluthinktech.com.br",  // E-mail de contato
  phone: "(11) 99999-9999",                // Telefone
  social: {
    instagram: "https://...",              // Link Instagram
    youtube: "https://...",                // Link YouTube
    linkedin: "https://..."                // Link LinkedIn
  }
};
```

## ✅ Checklist de Lançamento

Antes de ativar o site, verifique:

- [ ] Todo o conteúdo está revisado e correto
- [ ] Todas as imagens estão carregando
- [ ] Links de redes sociais estão corretos
- [ ] Informações de contato estão atualizadas
- [ ] Formulário de contato está funcionando
- [ ] Site foi testado em diferentes dispositivos (mobile, tablet, desktop)
- [ ] Site foi testado nos modos claro e escuro
- [ ] Alterar `MAINTENANCE_MODE` para `false` em `src/config/siteConfig.ts`

## 🔄 Voltando ao Modo de Manutenção

Se precisar colocar o site em manutenção novamente:

1. Abra `src/config/siteConfig.ts`
2. Altere `MAINTENANCE_MODE` de `false` para `true`
3. Salve o arquivo

## 📞 Suporte

Se tiver dúvidas ou problemas:
- E-mail: contato@soluthinktech.com.br
- Telefone: (11) 99999-9999

---

**Desenvolvido para VITRINNI Hub - Soluthink Tech** 🚀
