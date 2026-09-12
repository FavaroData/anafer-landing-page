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

`src/data/services.js` — três itens:

| id | title | description | messageKey |
|---|---|---|---|
| `eletrica` | Elétrica | Instalações, manutenções e reparos. | `eletrica` |
| `hidraulica` | Hidráulica | Consertos, vazamentos e instalações. | `hidraulica` |
| `reparos` | Pequenos Reparos | Montagens, fixações e muito mais. | `reparos` |

Cada item traz também `bullets` (texto curto da lista à esquerda), `image` (import
estático), `imageAlt` e `icon`.

## Estrutura

`<section id="servicos">` com fundo `--color-primary` (escuro, inalterado — ver
[[009-servicos-fundo-claro]]).

**Coluna esquerda:**
- `SectionHeader` variant `dark`, align `left`, `label="NOSSOS SERVIÇOS"`,
  título "Do simples ao complexo, a gente **resolve!**" com `resolve!` em laranja
- Parágrafo: "Eletricidade, hidráulica e pequenos reparos com agilidade e segurança."
- Lista de três checks, cada um com ícone circular laranja, termo em negrito e detalhe entre
  parênteses:
  - Elétrica (troca de tomadas, disjuntores, luminárias, etc.)
  - Hidráulica (vazamentos, torneiras, registros, etc.)
  - Pequenos reparos (montagem de móveis, fixações, etc.)

**Coluna direita:** `<ul>` de três `<li>`, cada `<li>` com um `Card` (`as="a"`) dentro —
lista semântica de itens equivalentes, não `<div>`s soltas. Cada card contém:
- Card inteiro com `aspect-ratio: 1 / 1` (quadrado); a imagem ocupa o espaço restante
  depois do corpo de texto (`flex: 1` dentro do card em coluna), `object-fit: cover`
- Ícone quadrado arredondado sobreposto na junção imagem/conteúdo, sempre laranja
  (`--color-accent`) e borda branca — ver [[009-servicos-fundo-claro]] (antes variava por
  serviço: laranja, azul, verde)
- `<h3>`, descrição e texto decorativo "Saiba mais →" (`aria-hidden`, o card inteiro já é
  o link)

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
- `alt` real em cada imagem, descrevendo a cena e não o serviço genérico
- Texto da coluna esquerda em `--color-text-on-dark` sobre `--color-primary`; título dos
  cards em `--color-text` sobre `--color-white` (card claro sobre fundo escuro) — ambos
  confortavelmente acima de 4.5:1

## Responsividade

- ≥1024px: texto acima, cards em 3 colunas de largura total do container — ver
  [[009-servicos-fundo-claro]] (era texto | cards lado a lado; a coluna estreita ao lado do
  texto não cabia cards quadrados do mesmo tamanho de antes sem estourar a largura)
- 768–1023px: texto acima, cards em 2 colunas
- <768px: tudo empilhado, cards em coluna única, cada um continua quadrado; o padding do
  corpo de texto do card diminui (`--space-6`/`--space-4`/`--space-4` em vez de
  `--space-8`/`--space-6`/`--space-6`) para sobrar mais altura pra imagem dentro do
  quadrado — sem isso a imagem ficava reduzida a ~39% da altura do card contra ~58% no
  desktop, squeeze desproporcional causado por padding fixo em card que encolhe
- Sem rolagem horizontal a partir de 320px; nenhum elemento usa largura fixa em px maior
  que os ícones decorativos (24–40px)

## Pronto quando

- Cada card abre o WhatsApp com a mensagem específica do serviço
- Imagens têm dimensão declarada e `loading="lazy"`
- Seção alcançável por `#servicos` com o título visível abaixo do header
