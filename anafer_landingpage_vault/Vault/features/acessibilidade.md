---
tipo: feature
area: qualidade
fase: 9
---

# Acessibilidade

## Objetivo

Garantir que a página seja utilizável por teclado, leitor de tela e em condições de baixo
contraste — requisito transversal, não etapa final.

## Estrutura semântica

- Um único `<h1>` (no [[hero]]); seções usam `<h2>`; cards e itens de FAQ usam `<h3>`
- `<header>`, `<main>`, `<section>`, `<footer>` no lugar de `div` genérica
- Listas reais para conjuntos de itens equivalentes (benefícios, serviços, navegação)
- Link "Pular para o conteúdo" como primeiro elemento focável, visível apenas no foco,
  apontando para `#inicio` — confirmado em `App.jsx` (primeiro filho do fragmento raiz,
  antes do `Header`) com a classe `.skipLink` em `globals.css` (`top: -1000px`, volta a
  `top: 0` em `:focus`)

## Teclado

- Tudo que age é `<button>` ou `<a>`; nenhuma `div` com `onClick`
- `:focus-visible` global com contorno de 3px em `--color-blue` e `outline-offset: 2px`
- Menu mobile: foco entra ao abrir, fica preso enquanto aberto, volta ao hamburger ao fechar
- FAQ: conteúdo fechado recebe `hidden` e sai da ordem de tabulação
- Nenhuma armadilha de foco fora do menu

## Leitor de tela

- `alt` descritivo em todas as imagens de conteúdo; ícones decorativos com
  `aria-hidden="true"` e `focusable="false"`
- Links que abrem nova aba dizem isso no `aria-label`
- Estrelas de depoimento acompanhadas de texto em `.sr-only`
- `aria-expanded` / `aria-controls` no accordion e no hamburger

## Contraste

Verificar estas combinações antes do aceite:

| Combinação | Uso | Regra |
|---|---|---|
| `#13293D` sobre `#FFFFFF` | corpo | ok, folgado |
| `#5A6B7B` sobre `#F5F7F9` | texto secundário | conferir ≥4.5:1 |
| `#FF7A00` sobre `#FFFFFF` | **só** título grande, badge, ícone | reprova em texto pequeno |
| `#FFFFFF` sobre `#FF7A00` | badge | ok em peso 700 |
| `#FFFFFF` sobre `#0F3048` | seção escura | ok, folgado |
| `#FFFFFF` sobre `#16C763` | botão WhatsApp | manter ≥18px e peso 600 |
| `#C3D2DE` sobre `#0A2336` | footer secundário | conferir ≥4.5:1 |

## Movimento

`prefers-reduced-motion` tratado globalmente em `globals.css` ([[design-system]]). Nenhum
conteúdo pode depender de animação para aparecer: o `useScrollReveal` define o estado final
imediatamente quando a preferência está ativa.

## Pronto quando

- Percurso completo da página só com `Tab`, `Enter` e `Esc`, sem ficar preso
- Todas as imagens com `alt`
- Tabela de contraste verificada
- Zero `div` clicável
