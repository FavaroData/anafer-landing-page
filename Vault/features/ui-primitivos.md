---
tipo: feature
area: fundacao
fase: 1
---

# Primitivos de UI

## Objetivo

Concentrar o que repete entre seções, para que ajuste de cor, raio ou comportamento de CTA
seja feito em um arquivo. Decisão em [[004-primitivos-ui]].

Todos vivem em `src/components/ui/<Nome>/`, com `.jsx` e `.module.css` ao lado.

## Container

Centraliza conteúdo com `max-width: var(--container-max)` e `padding-inline:
var(--container-padding)`.

Props: `as` (elemento, default `div`), `className`, `children`.

## SectionHeader

O bloco repetido em cinco seções: rótulo pequeno em maiúsculas, título, subtítulo.

Props:
- `label` — rótulo pequeno (ex.: "NOSSOS SERVIÇOS")
- `title` — aceita nó React, para destaque em `<strong>`
- `subtitle`
- `align` — `"center"` | `"left"` (default `"center"`)
- `variant` — `"light"` | `"dark"` (sobre azul escuro)
- `as` — nível do título, default `h2`

Renderiza `<h2>` sempre; só o Hero usa `<h1>`, e o Hero não usa este componente.

## Button

Base visual de todo botão e link-botão da página.

Props: `variant` (`"primary"` laranja | `"whatsapp"` verde | `"ghost"`), `size`
(`"md"` | `"lg"`), `as` (`"button"` | `"a"`), `icon`, `subtitle`, `fullWidth`, `className`,
além das props nativas (`type` incluso).

Detalhe do mockup: o CTA principal tem duas linhas — rótulo forte e texto auxiliar menor
("Atendimento rápido e sem burocracia"). `subtitle` cobre isso.

Quando `as="button"` e nenhum `type` é passado, o componente força `type="button"` — evita
que um CTA solto dentro de um `<form>` acabe submetendo. Se `as="a"`, `type` não é aplicado.

Interação: `transform: scale(1.02)` e sombra mais alta no hover; `scale(0.99)` no active.
Foco visível vem do `:focus-visible` global.

Responsividade: abaixo de 767px, `.button` recebe `min-height: 44px`, garantindo alvo de
toque mínimo em qualquer `size`/`variant` — inclusive um `Button` futuro sem ícone e com
rótulo curto de uma linha só. `WhatsAppButton` herda a regra por composição.

## WhatsAppButton

Envolve `Button` com `as="a"` e o destino de `buildWhatsAppUrl()`.

Props: `message` (string, default `siteData.messages.default`), `subtitle`, `size`,
`fullWidth`, `className`, `children` (texto do rótulo, default `"Chamar no WhatsApp"`).

Sempre: `target="_blank"`, `rel="noopener noreferrer"`, ícone do WhatsApp em SVG inline e
`aria-label` explicitando que abre em nova aba com a mensagem exata que será enviada.
Nenhum outro componente monta URL de WhatsApp por conta própria.

## Card

Casca visual compartilhada: fundo, `--radius-card`, `--shadow-md`, borda opcional e
elevação de 4px no hover.

Props: `as`, `variant` (`"light"` | `"dark"`), `interactive` (liga o hover), `className`,
`children`. O conteúdo é `children` — o Card não sabe se está exibindo serviço, benefício
ou depoimento.

## Anti-objetivo

Estes primitivos não devem crescer para acomodar caso único de uma seção. Se só um lugar
precisa de algo, isso mora no CSS Module daquela seção.

## Pronto quando

- Uma página de teste temporária renderiza todas as variantes de cada primitivo
- O `WhatsAppButton` abre `wa.me` em nova aba com a mensagem correta codificada
- A página de teste é removida antes do fim da fase
