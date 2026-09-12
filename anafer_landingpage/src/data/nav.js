// O item "Depoimentos" só deve ser renderizado quando
// siteData.features.testimonialsEnabled === true — o menu não pode apontar
// para uma seção inexistente no DOM.
export const navLinks = [
  { label: "Início",      href: "#inicio" },
  { label: "Serviços",    href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas",     href: "#duvidas" }
];
