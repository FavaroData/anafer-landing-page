---
tipo: decisao
numero: 007
status: aceita
data: 2026-09-11
---

# 007 — Depoimentos nascem ligados, não desligados por flag

## Contexto

A [[002-depoimentos-placeholder]] original mandava `testimonialsEnabled` nascer `false`,
para separar "seção existe e está pronta" de "seção está publicada com conteúdo real".

## Decisão

`siteData.features.testimonialsEnabled` nasce `true` em `src/data/site.js`. A seção
[[depoimentos]] está visível desde o lançamento desta versão do código, com o mesmo
conteúdo placeholder fictício que a 002 já descrevia (Carlos M., Ana Paula S., Rafael L.).

O que a 002 decidiu e **continua valendo**, inalterado:

- Avatar é círculo com iniciais — nunca foto de banco de imagens ilustrando um depoimento
- Sem nota agregada tipo "média do Google"
- Sem contagem de avaliações

## Razão

Decisão explícita do usuário no planejamento desta execução: ligar a seção desde o início
em vez de esperar a publicação consciente que a 002 previa.

## Consequências

- **Pendência crítica antes de publicar oficialmente**: o conteúdo de
  `src/data/testimonials.js` continua fictício (três nomes e citações inventados para
  desenvolvimento visual, com comentário no topo do arquivo dizendo isso) e precisa ser
  substituído por depoimentos reais de clientes antes de tornar o site público
- O item "Depoimentos" aparece no menu (`src/data/nav.js` filtra por
  `testimonialsEnabled`, que agora é `true`)
- `CONSTRAINTS.md` já reflete isso: "`testimonialsEnabled: true`, mas sem foto de rosto,
  nota agregada ou contagem de avaliações"
- Esta decisão **substitui** a 002 quanto ao valor padrão da flag; ver
  [[002-depoimentos-placeholder]] (status atualizado para "substituída por 007")
