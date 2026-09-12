---
tipo: decisao
numero: 009
status: aceita
data: 2026-09-12
---

# 009 — Cards de Serviços redesenhados; fundo da seção continua escuro

## Contexto

O usuário pediu um redesign dos cards seguindo um modelo de "card comercial moderno,
minimalista", que incluía trocar o fundo geral da seção para claro. Aplicado, o usuário
corrigiu: o fundo deve **continuar escuro**, como era antes. O redesign dos cards em si
(ícone, proporção de imagem, grid, CTA) foi mantido.

## Decisão

Mantido — fundo escuro original:
- Fundo da seção: `--color-primary` (inalterado).
- `SectionHeader` da coluna esquerda continua variant `dark`; checklist em
  `--color-text-on-dark`.

Mantido do redesign dos cards:
- Ícone de cada card (raio, gota, chave) sempre em `--color-accent` (laranja), removendo a
  variação azul/verde por índice que existia antes.
- Ícone em quadrado arredondado (`--radius-sm`) no lugar de círculo (`--radius-pill`).
- Card inteiro com `aspect-ratio: 1 / 1` (quadrado, não mais retangular) — a imagem não tem
  proporção fixa própria, ocupa via `flex: 1` o espaço que sobra depois do corpo de texto,
  sempre preenchendo com `object-fit: cover`. Passou por 16:9 e depois 4:3 apenas na imagem
  no meio do redesign, antes do usuário pedir o card (não só a imagem) quadrado.
- Grid de cards: 1 coluna no mobile, 2 no tablet (≥768px), 3 no desktop (≥1024px) —
  breakpoints explícitos no lugar de `auto-fit`.
- ≥1024px: `.layout` deixou de dividir texto | cards lado a lado — o card quadrado do
  mesmo tamanho de antes não cabia na coluna estreita ao lado do texto sem estourar a
  largura do container. Texto e checklist agora ficam empilhados acima dos cards em
  qualquer largura, e os 3 cards dividem a largura total do container (~384px de lado
  cada em 1200px) — maior do que o card retangular anterior (~241×340px espremido ao lado
  do texto), resolvendo a reclamação de "cards pequenos" ao quadrar.
- Texto decorativo "Saiba mais →" no fim do corpo do card, com `aria-hidden="true"` (o card
  inteiro já é o link, então não é elemento interativo próprio nem duplica o que o
  `aria-label` do card já anuncia), sempre colado na base do card via `margin-top: auto`.

## Razão

Pedido explícito do usuário. As cores usadas no redesign reaproveitam tokens já existentes
em `variables.css` (`--color-text-muted`, `--color-accent` = `#FF7A00`) em vez dos hex
exatos sugeridos, mantendo a regra 1 do `CONSTRAINTS.md` (zero hex cru fora de
`variables.css`). Os cards continuam brancos (`Card` variant `light`, já existente) mesmo
com o fundo da seção escuro — é o mesmo contraste card-claro-sobre-fundo-escuro que a seção
já tinha antes do pedido de redesign.

## Consequências

- Diverge do texto original de [[servicos]] só quanto a ícone/proporção/grid/CTA — o fundo
  e a cor do texto da coluna esquerda continuam como sempre foram.
- Como só [[servicos]] usa `Card interactive`, a mudança de forma e cor do ícone não afeta
  [[depoimentos]] nem outros usos de `Card`.
