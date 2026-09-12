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

`<section id="servicos">` com fundo `--color-primary`.

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
- Imagem no topo (proporção 4:3, `object-fit: cover`)
- Ícone circular sobreposto na junção imagem/conteúdo, com cor por serviço
  (laranja, azul, verde) e borda branca
- `<h3>` e descrição

## Comportamento

O card inteiro é um `<a>` para `buildWhatsAppUrl(siteData.messages[messageKey])`, em nova
aba. Hover: elevação de 4px e leve zoom da imagem (`scale(1.04)`), ambos anulados por
movimento reduzido.

Como o card é link, não pode conter outro link dentro — nada de botão aninhado.

## Acessibilidade

- `aria-label` do card explicita o destino: "Falar no WhatsApp sobre serviços de elétrica
  (abre em nova aba)"
- Foco visível contornando o card inteiro
- `alt` real em cada imagem, descrevendo a cena e não o serviço genérico
- Contraste do texto branco sobre `--color-primary` confortavelmente acima de 4.5:1

## Responsividade

- ≥1024px: duas colunas (texto | cards lado a lado)
- 768–1023px: texto acima, cards em 3 colunas estreitas ou 2+1
- <768px: tudo empilhado, cards em coluna única com imagem em 16:9 para reduzir altura

## Pronto quando

- Cada card abre o WhatsApp com a mensagem específica do serviço
- Imagens têm dimensão declarada e `loading="lazy"`
- Seção alcançável por `#servicos` com o título visível abaixo do header
