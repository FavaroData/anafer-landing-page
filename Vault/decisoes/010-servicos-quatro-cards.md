---
tipo: decisao
numero: 010
status: aceita
data: 2026-09-18
---

# 010 — Serviços passam de três para quatro cards; card deixa de ser quadrado

## Contexto

Pedido do cliente: trocar o item "Montagem de móveis" (que só existia como texto de apoio
do card "Pequenos Reparos", não como card próprio — não havia card algum com esse título)
por um novo card "Desentupidora" com lista de cinco itens (ralos, pias, vaso sanitário e
esgoto, caixa de água, caixa de gordura), e acrescentar um quarto card "Pequenos reparos em
geral".

## Decisão

- `src/data/services.js` passa de três para quatro itens: `eletrica`, `hidraulica`,
  `desentupidora` (novo) e `reparos` (renomeado de "Pequenos Reparos" para "Pequenos
  reparos em geral", bullet "montagem de móveis" removido).
- `desentupidora` reaproveita `servico-hidraulica.webp` — não existe asset específico de
  desentupimento no projeto e o pedido foi explícito em não gerar imagem nova.
- `desentupidora` não tem `description`; usa um novo campo `items` (array de strings)
  renderizado como `<ul>` no corpo do card, no lugar do parágrafo — é o único card com
  lista visível em vez de frase única, por causa do conteúdo naturalmente enumerado.
- Card deixa de ser quadrado (`aspect-ratio: 1/1` de [[009-servicos-fundo-claro]]): agora
  `height: 100%` (estica para a altura da linha do grid) com a imagem em
  `aspect-ratio: 4/3` fixo. Necessário porque a lista de cinco itens do card Desentupidora
  não cabia num card quadrado sem espremer a imagem a quase nada.
- Grid de cards passa de 3 para 4 colunas em ≥1024px (`repeat(4, 1fr)`); 2 colunas em
  tablet e 1 no mobile continuam como antes.
- `siteData.messages.desentupidora` novo em `src/data/site.js`, seguindo o padrão
  existente de dados centralizados.

A área de atendimento (`siteData.serviceArea`) também foi pedida nesta mesma tarefa, mas
acabou como seção própria — ver [[011-area-atendimento-secao-propria]].

## Razão

Pedido explícito do cliente, com restrição de não alterar identidade visual, Hero nem
Header. A imagem reaproveitada e o card não mais quadrado são consequências técnicas
diretas do pedido (sem asset novo disponível; lista de cinco itens não cabe em card
quadrado), não escolhas de redesign.

## Consequências

- Supera as descrições de "3 colunas" e "card quadrado" em [[009-servicos-fundo-claro]],
  que continua valendo para o resto do redesign (ícone sempre laranja, quadrado
  arredondado, grid com breakpoints explícitos, "Saiba mais" decorativo).
- `index.html`, `Vault/index.md` e `Vault/features/dados-centralizados.md` /
  `performance-seo.md` atualizados para citar "Desentupidora" e "Pequenos reparos em
  geral" no lugar de "Pequenos Reparos".
- Nenhum outro uso de `Card interactive` é afetado (só [[servicos]] usa esse modo).
