---
tipo: feature
area: layout
fase: 2
---

# Header e Navegação

## Objetivo

Barra fixa com identidade à esquerda, navegação por âncoras e CTA de WhatsApp sempre
alcançável, em qualquer largura.

## Dados consumidos

`siteData.name`, `siteData.tagline`, `navLinks`, `siteData.messages.default`.

## Estrutura

`<header>` com `position: sticky; top: 0; z-index: 100`, altura `var(--header-height)`,
fundo `--color-white`, sombra sutil que aparece só após rolar — ver
[[003-header-fundo-solido]].

Desktop (≥1024px), três áreas dentro de um `Container`:
1. Logo: marca em duas linhas ("Fernando" / "Serviços Rápidos") + `tagline` em maiúsculas
   pequenas. É um link para `#inicio`, texto real em HTML, não imagem.
2. `<nav aria-label="Navegação principal">` com `navLinks` em `<ul>`.
3. `WhatsAppButton` size `md`, sem subtítulo.

Mobile (<1024px): logo reduzido e botão hamburger, sem CTA de WhatsApp na barra fixa — o
`WhatsAppButton` compacto que existia aqui foi removido (usuário via os dois botões ao
mesmo tempo: o compacto na barra + "Chamar no WhatsApp" completo dentro do painel aberto).
O flutuante cobre a função nessa faixa de largura, ver [[whatsapp-float]]; dentro do painel
mobile o `WhatsAppButton` completo ("Chamar no WhatsApp") continua presente.

## Comportamento

- Estado local `isOpen` no Header; nenhum estado de navegação sobe para `App.jsx`
- Painel mobile desliza a partir da direita, ocupando no máximo 320px, com overlay escuro
- Fecha ao: clicar num item, clicar no overlay, pressionar `Esc`, ou a viewport passar de 1024px
- `useLockBodyScroll(isOpen)` trava o scroll de fundo enquanto aberto
- Sombra do header controlada por um listener de scroll com `{ passive: true }`, comparando
  apenas um limiar (8px) — sem cálculo por frame

## `hooks/useLockBodyScroll.js`

Aplica `overflow: hidden` no `body` e compensa a largura da barra de rolagem com
`padding-right`, evitando o salto horizontal ao abrir o menu no desktop. Restaura o valor
original no cleanup.

## Acessibilidade

- Hamburger é `<button>` com `aria-expanded`, `aria-controls` e `aria-label` que alterna
  entre "Abrir menu" e "Fechar menu"
- Painel com `id` correspondente e `role="dialog"` + `aria-modal="true"` quando aberto
- Painel fechado recebe o atributo `inert` (nativo do HTML, sem polyfill): tudo dentro dele
  sai da árvore de foco e de leitura assistiva enquanto fechado, sem precisar gerenciar
  `tabindex` item a item
- Foco vai para o primeiro item ao abrir e retorna ao hamburger ao fechar
- `Tab` circula dentro do painel enquanto aberto
- Item ativo recebe `aria-current="true"` (opcional; se implementado, via IntersectionObserver
  compartilhado com [[performance-seo]])

## Responsividade

- ≥1024px: navegação horizontal completa + `WhatsAppButton`
- <1024px: hamburger apenas na barra; CTA de WhatsApp vem do painel (aberto) ou do
  flutuante
- Painel com `max-width: min(320px, 85vw)` — nunca causa rolagem lateral, inclusive a 320px
  de viewport (85vw = 272px nesse caso)
- Hamburger com área de toque de 44×44px (antes 40×40px)
- Itens do painel mobile (`panelLink`) com altura mínima de 44px de área clicável

## Pronto quando

- Menu abre, fecha pelos quatro caminhos e devolve o foco corretamente
- Âncoras param com o título abaixo do header, graças a `scroll-margin-top`
- Nenhuma rolagem horizontal a 320px, com menu aberto ou fechado
