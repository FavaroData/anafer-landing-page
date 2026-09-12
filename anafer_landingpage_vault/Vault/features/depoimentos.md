---
tipo: feature
area: secao
fase: 5
ancora: "#depoimentos"
status: ligada (decisão 007)
---

# Depoimentos

## Objetivo

Prova social. **Nasce ligada**, com conteúdo placeholder fictício — ver
[[007-depoimentos-ligados]] (substitui [[002-depoimentos-placeholder]] quanto ao valor
padrão da flag; o restante da 002 — regras de avatar, sem nota agregada, sem contagem de
avaliações — continua valendo).

## Flag

Renderiza apenas quando `siteData.features.testimonialsEnabled === true`. Em
`src/data/site.js` essa flag nasce `true` nesta versão. Com `false`: o componente retorna
`null` e o item "Depoimentos" some do menu ([[header]]). **Pendência crítica antes de
publicar oficialmente**: o conteúdo de `testimonials.js` ainda é fictício (três nomes e
citações inventados para desenvolvimento visual) e precisa ser substituído por material
real enviado pelo cliente.

## Dados consumidos

`src/data/testimonials.js` — três itens `{ id, quote, name, category, initials }`, com um
comentário no topo do arquivo marcando o conteúdo como placeholder.

Placeholders atuais (Carlos M. / Residencial, Ana Paula S. / Residencial, Rafael L. /
Comercial) servem apenas para desenvolvimento visual.

## Estrutura

`<section id="depoimentos">` com fundo `--color-bg-soft`.

- `SectionHeader` align `left`, `label="DEPOIMENTOS"`, `title="Clientes satisfeitos"`,
  `subtitle="Veja o que quem já contratou tem a dizer:"`
- Três `Card` em grid. Cada card: avatar + estrelas no topo, citação em itálico, nome em
  negrito e categoria em cinza.

## Avatar

Círculo de 48px com as iniciais sobre fundo sólido derivado do índice (azul, laranja,
azul). **Não usar foto de banco de imagens** — rosto de desconhecido ilustrando depoimento
é a parte mais enganosa da seção, e continuaria enganosa mesmo com depoimento real de outra
pessoa. Quando o cliente enviar fotos reais de clientes reais com autorização, o campo
`avatar` pode ser adicionado e o componente passa a preferi-lo às iniciais.

## Estrelas

Cinco SVG laranja, estáticos, `aria-hidden="true"`. Um texto em `.sr-only` informa
"Avaliação: 5 de 5" para leitor de tela. Sem nota agregada, sem "média do Google", sem
contagem de avaliações — nada disso foi fornecido.

## Comportamento

Grade estática, sem carrossel. Três itens cabem lado a lado no desktop e empilham no
mobile; carrossel só esconderia conteúdo atrás de interação. Entrada por `useScrollReveal`.

## Acessibilidade

- `<blockquote>` para a citação e `<figcaption>` para atribuição
- Cards não são clicáveis e não têm hover de elevação — nada sugere ação inexistente

## Responsividade

- ≥1024px: 3 colunas
- 768–1023px: 2 colunas + 1
- <768px: coluna única

## Pronto quando

- Com a flag `false`, a seção não aparece no DOM e o menu não a lista
- Com a flag `true`, os três cards renderizam corretamente nos três breakpoints
- Nenhuma foto de pessoa real ilustra depoimento não verificado
