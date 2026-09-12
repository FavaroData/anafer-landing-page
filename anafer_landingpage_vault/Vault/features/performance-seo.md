---
tipo: feature
area: qualidade
fase: 8
---

# Performance e SEO

## Objetivo

Carregamento rápido em conexão móvel e metadados corretos para busca e compartilhamento.
Landing de serviço local é acessada majoritariamente pelo celular.

## Imagens

- Formato WebP, geradas no tamanho real de uso (Hero ~1200px de largura; cards ~600px)
- `width` e `height` sempre declarados; `aspect-ratio` no CSS reservando espaço
- `loading="lazy"` em tudo **abaixo** do Hero; o Hero carrega com `fetchpriority="high"`
- Imports estáticos a partir de `src/assets/images/`, nunca URL externa espalhada no JSX
- Origem prevista: banco gratuito (Unsplash / Pexels), mantendo coerência de estilo entre
  as quatro fotos — mesma temperatura de cor, mesma sensação de fotografia profissional

**Pendência crítica antes de publicar** — ver [[006-imagens-placeholder-primeiro]]: as
quatro imagens atuais (`hero-profissional.webp`, `servico-eletrica.webp`,
`servico-hidraulica.webp`, `servico-reparos.webp`) são placeholder gerado localmente com
ImageMagick (fundo azul sólido + texto identificando o conteúdo pretendido), não fotos
reais de banco de imagens. Nome de arquivo e dimensão já estão fixados no contrato que o
código consome, então trocar pela foto real é apenas sobrescrever o `.webp` — nenhuma
linha de código muda. O comportamento técnico abaixo (WebP, `width`/`height`, lazy
loading) já está implementado corretamente sobre esses placeholders.

## JavaScript

- Sem biblioteca de animação, sem carrossel, sem pacote de ícones completo
- Ícones como SVG inline
- Listeners de scroll com `{ passive: true }`, apenas comparação de limiar
- `IntersectionObserver` com `unobserve` após o primeiro disparo
- Sem roteador: página única com âncoras

## CSS

- CSS Modules por componente, evitando folha global inchada
- Variáveis em vez de valores repetidos
- Preferir CSS a JavaScript sempre que resolver (hover, accordion, responsividade)

## `index.html`

```html
<title>Fernando Serviços Rápidos | Elétrica, Hidráulica e Pequenos Reparos</title>
<meta name="description" content="Serviços de elétrica, hidráulica e pequenos reparos com atendimento rápido, segurança e qualidade. Entre em contato pelo WhatsApp.">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:title" content="Fernando Serviços Rápidos">
<meta property="og:description" content="Elétrica, hidráulica e pequenos reparos com atendimento rápido e de confiança.">
<meta property="og:type" content="website">
<meta property="og:image" content="/og-image.jpg">
<meta name="theme-color" content="#0F3048">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<html lang="pt-BR">
```

`og:url` só entra quando o domínio de publicação for definido. Sem domínio, não inventar.

## Dados estruturados

`LocalBusiness` em JSON-LD ficaria natural aqui, mas exige endereço, horário e área de
atendimento — nada disso foi fornecido. **Não implementar** até o cliente informar. Marcar
como pendência de conteúdo, não de código.

## Pronto quando

- Nenhuma imagem provoca salto de layout
- O Hero é o primeiro elemento grande pintado
- `npm run build` sem aviso, console do navegador limpo
- Metadados presentes e coerentes com o conteúdo real
