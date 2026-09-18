---
tipo: feature
area: secao
fase: 4
ancora: "#servicos"
---

# Serviços

## Objetivo

Detalhar o que é feito e oferecer entrada direta para o WhatsApp já contextualizada por
tipo de serviço — o ponto de maior intenção de compra da página.

## Dados consumidos

`src/data/services.js` — quatro itens:

| id | title | description | messageKey |
|---|---|---|---|
| `eletrica` | Elétrica | Instalações, manutenções e reparos. | `eletrica` |
| `hidraulica` | Hidráulica | Consertos, vazamentos e instalações. | `hidraulica` |
| `desentupidora` | Desentupidora | — (usa `items`) | `desentupidora` |
| `reparos` | Pequenos reparos em geral | Troca de peças, ajustes e instalações simples. | `reparos` |

Cada item traz também `bullets` (texto curto da lista à esquerda), `image` (import
estático), `imageAlt` e `icon`. `desentupidora` reaproveita `servico-hidraulica.webp` (não
existe foto específica de desentupimento nos assets — ver [[010-servicos-quatro-cards]]) e
não tem `description`: usa `items`, um array de strings renderizado como `<ul>` dentro do
corpo do card no lugar do parágrafo — os únicos dois campos mutuamente exclusivos do
formato.

A área de atendimento (`siteData.serviceArea`) não é mais exibida dentro de Serviços —
ver [[area-atendimento]].

## Estrutura

`<section id="servicos">` com fundo `--color-primary` (escuro, inalterado — ver
[[009-servicos-fundo-claro]]).

**Coluna esquerda:**
- `SectionHeader` variant `dark`, align `left`, `label="NOSSOS SERVIÇOS"`,
  título "Do simples ao complexo, a gente **resolve!**" com `resolve!` em laranja
- Parágrafo: "Eletricidade, hidráulica, desentupidora e pequenos reparos com agilidade e
  segurança."
- Lista de quatro checks, cada um com ícone circular laranja, termo em negrito e detalhe
  entre parênteses:
  - Elétrica (troca de tomadas, disjuntores, luminárias, etc.)
  - Hidráulica (vazamentos, torneiras, registros, etc.)
  - Desentupidora (ralos, pias, esgoto, caixas de água e de gordura, etc.)
  - Pequenos reparos em geral (troca de peças, ajustes, instalações simples, etc.)

**Coluna direita:** `<ul>` de quatro `<li>`, cada `<li>` com um `Card` (`as="a"`) dentro —
lista semântica de itens equivalentes, não `<div>`s soltas. Cada card contém:
- Card com `height: 100%` (linha do grid estica todos os cards da mesma linha para a mesma
  altura) e imagem em `aspect-ratio: 4 / 3` fixo — não mais quadrado, ver
  [[010-servicos-quatro-cards]] (o card quadrado de [[009-servicos-fundo-claro]] não
  comportava a lista de cinco itens do card Desentupidora sem esmagar a imagem)
- Ícone quadrado arredondado sobreposto na junção imagem/conteúdo, sempre laranja
  (`--color-accent`) e borda branca — ver [[009-servicos-fundo-claro]] (antes variava por
  serviço: laranja, azul, verde)
- `<h3>`, corpo (parágrafo de descrição **ou**, no card Desentupidora, `<ul>` de itens — ver
  `items` em "Dados consumidos") e texto decorativo "Saiba mais →" (`aria-hidden`, o card
  inteiro já é o link)

## Comportamento

O card inteiro é um `<a>` para `buildWhatsAppUrl(siteData.messages[messageKey])`, em nova
aba. Hover: elevação de 4px, sombra mais forte e leve zoom da imagem (`scale(1.03)`), ambos
anulados por movimento reduzido.

Como o card é link, não pode conter outro link dentro — nada de botão aninhado, por isso
"Saiba mais" é só texto decorativo, não um `<a>`/`<button>` aninhado.

## Acessibilidade

- `aria-label` do card explicita o destino: "Falar no WhatsApp sobre serviços de elétrica
  (abre em nova aba)"
- Foco visível contornando o card inteiro
- `alt` real em cada imagem, descrevendo a cena e não o serviço genérico (o card
  Desentupidora usa "Serviço de desentupidora" mesmo reaproveitando a foto de Hidráulica)
- Texto da coluna esquerda em `--color-text-on-dark` sobre `--color-primary`; título dos
  cards em `--color-text` sobre `--color-white` (card claro sobre fundo escuro) — ambos
  confortavelmente acima de 4.5:1

## Responsividade

- ≥1024px: texto acima, cards em 4 colunas de largura total do container — ver
  [[010-servicos-quatro-cards]] (era 3 colunas; o quarto card não coube junto sem esticar a
  linha)
- 768–1023px: texto acima, cards em 2 colunas
- <768px: tudo empilhado, cards em coluna única; imagem em `aspect-ratio: 4 / 3` fixo (não
  mais quadrado) e o padding do corpo de texto do card diminui (`--space-6`/`--space-4`/
  `--space-4` em vez de `--space-8`/`--space-6`/`--space-6`) para sobrar mais espaço pra
  lista do card Desentupidora
- Cards da mesma linha sempre com a mesma altura (`height: 100%` esticado pelo grid), então
  o card Desentupidora (lista de cinco itens) não desalinha os vizinhos mais curtos
- Sem rolagem horizontal a partir de 320px; nenhum elemento usa largura fixa em px maior
  que os ícones decorativos (24–40px)

## Pronto quando

- Cada card abre o WhatsApp com a mensagem específica do serviço, incluindo o novo
  `desentupidora`
- Imagens têm dimensão declarada e `loading="lazy"`
- Seção alcançável por `#servicos` com o título visível abaixo do header
