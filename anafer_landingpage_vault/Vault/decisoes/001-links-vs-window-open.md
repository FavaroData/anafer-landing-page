---
tipo: decisao
numero: 001
status: aceita
data: 2026-09-11
---

# 001 — Âncoras reais no lugar de `window.open`

## Contexto

O briefing (seção 26) pede que todos os CTAs de WhatsApp usem:

```js
window.open("https://wa.me/5541996804326", "_blank", "noopener,noreferrer");
```

## Decisão

Usar `<a href={url} target="_blank" rel="noopener noreferrer">` estilizado como botão,
encapsulado no `WhatsAppButton` ([[ui-primitivos]]).

## Razão

`window.open` disparado por `onClick` perde comportamentos que o usuário espera de um link:
clique com botão do meio, "abrir em nova aba" pelo menu de contexto, copiar endereço,
pré-visualização do destino na barra de status. Leitores de tela anunciam um `<a>` com
destino como link; um `<button>` que abre janela não comunica isso. Alguns bloqueadores de
pop-up também barram `window.open` quando o navegador não o associa claramente a um gesto
do usuário.

Além disso, o link funciona sem JavaScript.

## Consequências

- Todos os CTAs de WhatsApp são `<a>`, inclusive o botão flutuante e os cards de serviço
- O card de serviço, sendo link, não pode conter outro link dentro
- `rel="noopener noreferrer"` continua obrigatório
- O `aria-label` informa que abre em nova aba
