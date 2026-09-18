---
tipo: feature
area: fundacao
fase: 0
---

# Dados Centralizados

## Objetivo

Nenhum texto comercial escrito direto no JSX. Trocar telefone, e-mail ou descrição de
serviço é editar um arquivo em `src/data/`, não caçar strings em oito componentes.

## Arquivos

### `src/data/site.js`

```js
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
    testimonialsEnabled: true // ver [[007-depoimentos-ligados]]
  }
};

export default siteData;
```

### `src/data/nav.js`

```js
export const navLinks = [
  { label: "Início",      href: "#inicio" },
  { label: "Serviços",    href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas",     href: "#duvidas" }
];
```

O item "Depoimentos" só é renderizado quando `features.testimonialsEnabled` é `true` —
menu não pode apontar para seção inexistente.

### `src/data/benefits.js`

Quatro objetos `{ id, icon, title, description }`. `icon` é uma chave (`"zap"`,
`"shield"`, `"money"`, `"user"`) resolvida por um mapa de SVG no componente — os dados
não carregam JSX.

### `src/data/services.js`

Quatro objetos `{ id, title, description, image, imageAlt, icon, messageKey, bullets }`.
`messageKey` aponta para `siteData.messages`. `image` é um import estático do Vite. O card
`desentupidora` não tem `description`: usa `items` (array de strings) em vez disso,
renderizado como lista no corpo do card — ver [[servicos]] e
[[010-servicos-quatro-cards]].

### `src/data/testimonials.js`

Três objetos `{ id, quote, name, category, initials }`. Sem URL de avatar — as iniciais
geram o avatar. Cabeçalho do arquivo em comentário deixa explícito que o conteúdo é
placeholder e precisa ser substituído por material real antes de publicar.

### `src/data/faq.js`

Quatro objetos `{ id, question, answer }`, exatamente como no briefing. Respostas
deliberadamente genéricas: não prometem prazo, garantia específica nem forma de pagamento.

## `src/lib/whatsapp.js`

Único lugar do código que conhece o número.

```js
import siteData from "../data/site";

export function buildWhatsAppUrl(message = siteData.messages.default) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteData.whatsappNumber}?text=${text}`;
}
```

Consumido apenas pelo `WhatsAppButton` e pelo `WhatsAppFloat`. Ver [[ui-primitivos]] e
[[001-links-vs-window-open]].

## Regra de conteúdo

Só existe o que o cliente forneceu: nome, telefone, e-mail, os quatro serviços e a área de
atendimento (`siteData.serviceArea`). Endereço, CNPJ, anos de experiência, quantidade de
clientes, certificações, nota do Google, preços e garantias específicas **não entram**, nem
como texto de apoio.

## Pronto quando

- `grep -r "99680" src/` retorna só `site.js`
- `grep -r "wa.me" src/` retorna só `lib/whatsapp.js`
- Trocar o e-mail em `site.js` atualiza CTA final e footer
