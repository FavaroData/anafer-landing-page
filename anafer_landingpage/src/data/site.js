const siteData = {
  name: "Fernando Serviços Rápidos",
  tagline: "Sua casa em boas mãos",
  phone: "41 99680-4326",
  phoneHref: "tel:+5541996804326",
  whatsappNumber: "5541996804326",
  email: "albertosilva1106@gmail.com",
  emailHref: "mailto:albertosilva1106@gmail.com",
  serviceArea: "Grande Curitiba, região metropolitana e litoral PR",

  messages: {
    default: "Olá! Gostaria de solicitar um orçamento para um serviço.",
    eletrica: "Olá! Gostaria de solicitar um orçamento para um serviço de elétrica.",
    hidraulica: "Olá! Gostaria de solicitar um orçamento para um serviço de hidráulica.",
    desentupidora: "Olá! Gostaria de solicitar um orçamento para um serviço de desentupidora.",
    reparos: "Olá! Gostaria de solicitar um orçamento para um pequeno reparo."
  },

  features: {
    // Decisão do usuário (2026-09-11): ligar depoimentos desde o início.
    // Diverge do Vault (features/depoimentos.md e decisoes/002-depoimentos-placeholder.md
    // definem `false` por padrão) — não é erro do agente F0, é decisão intencional.
    // O conteúdo de src/data/testimonials.js continua placeholder e deve ser substituído
    // por depoimento real antes de publicar oficialmente.
    testimonialsEnabled: true
  }
};

export default siteData;
