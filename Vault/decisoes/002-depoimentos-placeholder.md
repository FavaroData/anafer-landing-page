---
tipo: decisao
numero: 002
status: substituída por 007
data: 2026-09-11
---

# 002 — Depoimentos nascem desligados por flag

## Contexto

O briefing fornece três depoimentos (Carlos M., Ana Paula S., Rafael L.) e diz
explicitamente, na seção 10, que são placeholders para desenvolvimento visual e não devem
ser apresentados como avaliações reais. Mas a seção, renderizada, é indistinguível de
avaliações reais para quem visita o site.

## Decisão

1. A seção existe, completa e estilizada, controlada por
   `siteData.features.testimonialsEnabled`, que nasce `false`.
2. Avatares são iniciais em círculo colorido, não fotos de banco de imagens.
3. Sem nota agregada, contagem de avaliações ou referência ao Google.

## Razão

A contradição do briefing ("crie, mas não apresente como real") só se resolve separando
existir de estar publicado. Com a flag, o trabalho visual é entregue e a publicação vira
uma decisão consciente do cliente depois que ele reunir depoimentos reais.

Sobre os avatares: rosto de pessoa desconhecida ilustrando depoimento inventado é o
elemento mais enganoso da seção, e continuaria enganoso mesmo com o texto real, já que a
foto seria de outra pessoa. Iniciais comunicam a mesma estrutura visual sem afirmar nada
falso.

## Consequências

- `Testimonials` retorna `null` quando a flag é `false`
- O item "Depoimentos" some do menu ([[header]]) na mesma condição
- `testimonials.js` traz comentário marcando o conteúdo como placeholder
- Se o cliente enviar fotos reais com autorização, um campo `avatar` opcional passa a ter
  precedência sobre as iniciais
