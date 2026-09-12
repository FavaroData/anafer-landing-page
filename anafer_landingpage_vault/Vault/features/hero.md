---
tipo: feature
area: secao
fase: 3
ancora: "#inicio"
---

# Hero

## Objetivo

Em uma tela, responder: que serviço é, para quem, por que confiar e como chamar. É o
elemento de maior peso na conversão.

## Dados consumidos

Textos do Hero ficam no próprio componente (são únicos, não se repetem); o CTA usa
`siteData.messages.default` via `WhatsAppButton`.

## Estrutura

`<section id="inicio">` em tela cheia: a foto do profissional
(`assets/images/hero-profissional.webp`) é o fundo inteiro da seção
(`position: absolute; inset: 0`, `object-fit: cover`, `object-position: right 35%`), com um
gradiente escuro por cima (`90deg`, esquerda opaca → direita transparente) criando a área
de leitura para o texto. Nunca `filter: blur()` na foto — o contraste vem só do gradiente.
Todo o conteúdo textual fica sobre essa área escura à esquerda, sem caixa sólida atrás.

- Badge: `⚡ SERVIÇOS ESSENCIAIS E COMERCIAIS` — fundo laranja sólido, texto branco,
  `--radius-pill`. O raio é decorativo e fica em `aria-hidden`, o texto é HTML real.
- `<h1>`: "Precisa de um serviço **rápido** e de **confiança**?" com `rápido` e `confiança`
  em `<strong>` laranja. Este é o **único** `<h1>` da página.
- Parágrafo de apoio: "Eletricidade, hidráulica e pequenos reparos em geral com qualidade,
  segurança e profissionalismo. Resolvo o seu problema sem complicação!"
- `WhatsAppButton` size `lg` com `subtitle="Atendimento rápido e sem burocracia"`.
- Selo logo abaixo do botão: card branco com ícone de relógio laranja, rótulo "ATENDIMENTO
  RÁPIDO" (RÁPIDO em laranja) + "Quando você precisa, eu chego!". Já foi sobreposto à foto
  (canto inferior direito) em versões anteriores; movido para a coluna de texto a pedido do
  usuário. Sempre HTML real, nunca texto dentro da imagem.

No mobile (<768px), a foto fica em cima em altura fixa (não tela cheia) com um degradê de
baixo para cima que funde a imagem ao fundo escuro do texto abaixo.

## Comportamento

- Imagem **sem** `loading="lazy"`, com `fetchpriority="high"` e `decoding="async"`
- `width` e `height` declarados para reservar espaço
- Entrada suave do texto (fade + 12px) ao montar, respeitando movimento reduzido
- Sem parallax, sem vídeo, sem fundo animado

## Acessibilidade

- Contraste: texto branco sobre azul escuro, e overlay escuro sobre a foto garantindo
  legibilidade onde o texto cruza a imagem
- `alt` descritivo na foto: "Profissional de manutenção com cinto de ferramentas"
- Se a foto for puramente decorativa na versão mobile, ainda assim mantém `alt` — ela
  comunica o serviço

## Responsividade

- <768px: coluna única, imagem acima do texto, selo reposicionado para o canto inferior da
  foto, CTA em largura total confortável (não 100% cheio; `max-width: 360px`)
- Título com `clamp()` — não precisa de media query
- 320px: badge quebra em duas linhas sem estourar

## Pronto quando

- Único `<h1>` na página inteira
- Selo é HTML selecionável, não pixels
- Hero é o maior elemento pintado e não causa salto de layout
