---
tipo: feature
area: fundacao
fase: 0
---

# Design System

## Objetivo

Centralizar cor, tipografia, espaçamento, raio, sombra e breakpoint em variáveis CSS, para
que nenhum componente escreva valor cru. Ver [[plano_de_implementacao]].

## Arquivos

- `src/styles/variables.css` — apenas o bloco `:root`
- `src/styles/globals.css` — reset, base de tipografia, utilitários, `prefers-reduced-motion`

Importados uma única vez em `src/main.jsx`, nessa ordem.

## Tokens

```css
:root {
  /* Cores */
  --color-primary: #0F3048;      /* azul escuro estrutural */
  --color-primary-dark: #0A2336; /* variação para gradiente sutil e footer */
  --color-blue: #147AC2;         /* azul de apoio, ícones */
  --color-accent: #FF7A00;       /* laranja — destaques e CTA secundário */
  --color-accent-dark: #E56D00;  /* hover do laranja */
  --color-whatsapp: #16C763;     /* exclusivo de ações de WhatsApp */
  --color-whatsapp-dark: #12A652;
  --color-white: #FFFFFF;
  --color-bg-soft: #F5F7F9;      /* fundo de seções claras alternadas */
  --color-text: #13293D;
  --color-text-muted: #5A6B7B;
  --color-border: #E3E8ED;

  /* Texto sobre fundo escuro */
  --color-text-on-dark: #FFFFFF;
  --color-text-on-dark-muted: #C3D2DE;

  /* Tipografia */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --fs-badge: 0.75rem;
  --fs-small: 0.875rem;
  --fs-body: 1rem;
  --fs-lead: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  --fs-h3: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-h2: clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem);
  --fs-h1: clamp(2.125rem, 1.5rem + 2.8vw, 3.5rem);

  /* Espaçamento — base 4px */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;    --space-24: 6rem;
  --section-padding-y: clamp(3rem, 2rem + 4vw, 6rem);

  /* Forma */
  --radius-sm: 8px;
  --radius-card: 16px;
  --radius-pill: 999px;

  /* Sombra */
  --shadow-sm: 0 1px 2px rgba(19, 41, 61, 0.06);
  --shadow-md: 0 4px 16px rgba(19, 41, 61, 0.08);
  --shadow-lg: 0 12px 32px rgba(19, 41, 61, 0.12);

  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(1rem, 0.5rem + 2vw, 2rem);
  --header-height: 72px;

  /* Movimento */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 200ms;
}
```

No mobile (`max-width: 767px`), `--header-height` cai para `64px`.

## Tipografia

Inter self-hosted via `@fontsource/inter/400.css`, `/600.css`, `/700.css`, `/800.css`.
Nada de `<link>` para o Google Fonts — evita requisição a terceiro e bloqueio de render.

- Corpo: 400, `line-height: 1.6`
- Títulos: 800, `line-height: 1.15`, `letter-spacing: -0.02em`
- Badges e rótulos de seção: 700, `text-transform: uppercase`, `letter-spacing: 0.08em`

## Regras de uso da cor

- **Laranja** só em: destaque dentro de título, badge com fundo sólido, ícone, borda de
  ênfase e CTA secundário. **Nunca** em corpo de texto sobre branco — `#FF7A00` sobre
  `#FFFFFF` não alcança 4.5:1.
- **Verde** exclusivamente em ações de WhatsApp. Se aparecer em outro lugar, está errado.
- **Azul escuro** em áreas estruturais: header, seção de serviços, CTA final, footer.
- Alternância de fundo das seções: azul escuro (Hero) → branco (Benefícios) → azul escuro
  (Serviços) → `--color-bg-soft` (Depoimentos) → branco (FAQ) → azul escuro (CTA Final) →
  `--color-primary-dark`, mais escuro ainda (Footer), criando ritmo sem gradiente.

## globals.css

- `box-sizing: border-box` universal, `margin: 0`
- `html { scroll-behavior: smooth; }`
- `body { background: var(--color-white); color: var(--color-text); font-family: var(--font-sans); }`
- `img, svg { display: block; max-width: 100%; }`
- `:focus-visible { outline: 3px solid var(--color-blue); outline-offset: 2px; }`
- `section[id] { scroll-margin-top: var(--header-height); }`
- Utilitários mínimos: `.container`, `.section`, `.sr-only`
- Bloco final:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Esse bloco é global de propósito: nenhum componente precisa lembrar de tratar movimento
reduzido individualmente. Ver [[acessibilidade]].

## Pronto quando

- Nenhum componente contém valor hexadecimal cru
- Trocar `--color-accent` muda todos os destaques da página
- Com movimento reduzido ativo, nada anima e todo conteúdo continua visível
