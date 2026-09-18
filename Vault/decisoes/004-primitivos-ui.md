---
tipo: decisao
numero: 004
status: aceita
data: 2026-09-11
---

# 004 — Camada de primitivos `ui/`

## Contexto

O briefing pede componentes independentes por seção. Uma leitura literal produz oito
componentes isolados, cada um com seu CSS Module completo.

Alternativas consideradas:
- **A** — seções puras, literal ao briefing
- **B** — primitivos compartilhados + seções finas *(escolhida)*
- **C** — `siteContent.js` único com renderer genérico

## Decisão

Criar `src/components/ui/` com `Container`, `SectionHeader`, `Button`, `WhatsAppButton` e
`Card`. As seções compõem esses blocos e cuidam apenas do próprio layout.

## Razão

Cinco seções repetem o mesmo cabeçalho (rótulo + título + subtítulo) e quatro pontos da
página repetem o mesmo CTA de WhatsApp. Em A, "mudar a cor de todos os CTAs" ou "arredondar
mais os cards" são seis edições paralelas que divergem com o tempo. Em B é um arquivo.

C foi descartada porque Hero e Serviços têm layouts estruturalmente diferentes; um renderer
genérico viraria um emaranhado de condicionais para acomodar dois casos únicos.

A independência que o briefing pede é preservada: cada seção continua editável isoladamente,
apenas com uma camada compartilhada explícita embaixo.

## Consequências

- Mais arquivos, cada um menor
- Primitivos não devem crescer para atender caso único de uma seção — isso mora no CSS
  Module da própria seção
- `App.jsx` permanece só composição
