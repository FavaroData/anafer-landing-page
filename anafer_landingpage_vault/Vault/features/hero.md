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

`<section id="inicio">` em grid de duas colunas (`1.05fr 1fr`) no desktop.

**Coluna esquerda:**
- Badge: `⚡ SERVIÇOS ESSENCIAIS E COMERCIAIS` — fundo laranja sólido, texto branco,
  `--radius-pill`. O raio é decorativo e fica em `aria-hidden`, o texto é HTML real.
- `<h1>`: "Precisa de um serviço **rápido** e de **confiança**?" com `rápido` e `confiança`
  em `<strong>` laranja. Este é o **único** `<h1>` da página.
- Parágrafo de apoio: "Eletricidade, hidráulica e pequenos reparos em geral com qualidade,
  segurança e profissionalismo. Resolvo o seu problema sem complicação!"
- `WhatsAppButton` size `lg` com `subtitle="Atendimento rápido e sem burocracia"`.

**Coluna direita:**
- Foto do profissional com ferramentas (`assets/images/hero-profissional.webp`)
- Selo sobreposto: rótulo "ATENDIMENTO RÁPIDO" em laranja + "Quando você precisa, eu chego!"
  Construído em HTML posicionado com `position: absolute`, nunca texto dentro da imagem.

Fundo da seção: azul escuro com a foto sangrando à direita, como no mockup. No desktop a
imagem se estende até a borda da viewport; o texto permanece dentro do `Container`.

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
