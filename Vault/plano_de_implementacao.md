---
tipo: plano
projeto: anafer_landingpage
status: aprovado
data: 2026-09-11
---

# Plano de Implementação — Fernando Serviços Rápidos

Landing page comercial **frontend-only**, focada em conversão para WhatsApp.
Sem backend, sem API, sem banco, sem autenticação, sem painel administrativo.

Documento de entrada do Vault. Ver [[index]] para o mapa completo.

---

## 1. Stack e decisões fechadas

| Item | Decisão |
|---|---|
| Build | Vite |
| Framework | React 18 |
| Linguagem | JavaScript (sem TypeScript) |
| Estilo | CSS Modules por componente + `variables.css` / `globals.css` globais |
| Ícones | SVG inline (Lucide como referência de traço), sem importar o pacote inteiro |
| Fonte | Inter self-hosted via `@fontsource/inter` (pesos 400/600/800) |
| Imagens | Banco gratuito (Unsplash / Pexels), convertidas para WebP |
| Arquitetura | Primitivos `ui/` + seções finas que compõem — ver [[004-primitivos-ui]] |
| Testes | Sem suíte automatizada; validação por [[checklist_de_aceite]] |

Decisões que divergem do briefing original estão registradas em `decisoes/` com a
justificativa: [[001-links-vs-window-open]], [[002-depoimentos-placeholder]],
[[003-header-fundo-solido]], [[004-primitivos-ui]], [[005-codigo-em-subpasta]],
[[006-imagens-placeholder-primeiro]], [[007-depoimentos-ligados]], [[008-hooks-na-fase-1]].

---

## 2. Estrutura de pastas alvo

O Vault não fica dentro desta árvore — vive em `anafer_landingpage_vault/Vault/`, pasta
irmã de `anafer_landingpage/`. Ver [[005-codigo-em-subpasta]].

```
anafer_landingpage/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── ui/
    │   │   ├── Container/
    │   │   ├── SectionHeader/
    │   │   ├── Button/
    │   │   ├── WhatsAppButton/
    │   │   └── Card/
    │   ├── layout/
    │   │   ├── Header/
    │   │   └── Footer/
    │   ├── sections/
    │   │   ├── Hero/
    │   │   ├── Benefits/
    │   │   ├── Services/
    │   │   ├── Testimonials/
    │   │   ├── FAQ/
    │   │   └── FinalCTA/
    │   └── WhatsAppFloat/
    ├── data/
    │   ├── site.js
    │   ├── nav.js
    │   ├── benefits.js
    │   ├── services.js
    │   ├── testimonials.js
    │   └── faq.js
    ├── hooks/
    │   ├── useScrollReveal.js
    │   └── useLockBodyScroll.js
    ├── lib/
    │   └── whatsapp.js
    ├── assets/images/
    └── styles/
        ├── variables.css
        └── globals.css
```

Cada componente é uma pasta com `Componente.jsx` + `Componente.module.css` ao lado.

`App.jsx` contém apenas composição — nenhum estado, nenhuma regra:

```jsx
<>
  <Header />
  <main>
    <Hero /><Benefits /><Services /><Testimonials /><FAQ /><FinalCTA />
  </main>
  <Footer />
  <WhatsAppFloat />
</>
```

---

## 3. Fases

Cada fase termina com algo verificável no navegador. Não avance com a anterior quebrada.

### Fase 0 — Fundação
**Objetivo:** projeto de pé, tokens aplicados, conteúdo comercial centralizado.

- `npm create vite@latest . -- --template react`, limpar boilerplate (`App.css`, logos, contador)
- Instalar `@fontsource/inter`
- Criar árvore de pastas da seção 2
- `styles/variables.css` e `styles/globals.css` — ver [[design-system]]
- Todos os arquivos de `data/` — ver [[dados-centralizados]]
- `lib/whatsapp.js`

**Pronto quando:** `npm run dev` sobe sem erro, `npm run build` passa, a fonte Inter
está aplicada, e `document.body` reflete as variáveis de cor.

### Fase 1 — Primitivos de UI
**Objetivo:** blocos compartilhados prontos antes de qualquer seção.

- `Container`, `SectionHeader`, `Button`, `WhatsAppButton`, `Card` — ver [[ui-primitivos]]

**Pronto quando:** uma página de teste temporária renderiza cada primitivo em suas
variantes, e o `WhatsAppButton` abre `wa.me` em nova aba com a mensagem pré-preenchida
correta. Remover a página de teste ao fim da fase.

### Fase 2 — Header e navegação
- `layout/Header` com versão desktop e menu mobile — ver [[header]]
- `hooks/useLockBodyScroll.js`
- `scroll-behavior: smooth` no `html` e `scroll-margin-top: var(--header-height)` nas seções

**Pronto quando:** o menu mobile abre, fecha ao clicar num item, fecha com `Esc`, trava o
scroll de fundo enquanto aberto, e as âncoras param abaixo do header sticky.

### Fase 3 — Hero
- `sections/Hero` — ver [[hero]]
- Imagem do profissional em `assets/images/`, sem lazy, com `fetchpriority="high"`

**Pronto quando:** `<h1>` único na página, destaques em laranja, selo "Atendimento rápido"
como HTML sobre a imagem, layout em coluna única a partir de 767px.

### Fase 4 — Benefícios e Serviços
- `sections/Benefits` — ver [[beneficios]]
- `sections/Services` — ver [[servicos]]

**Pronto quando:** benefícios em 4/2/1 colunas conforme viewport; cada card de serviço
abre o WhatsApp com a mensagem específica daquele serviço.

### Fase 5 — Depoimentos e FAQ
- `sections/Testimonials`, respeitando a flag `siteData.features.testimonialsEnabled` —
  ver [[depoimentos]] e [[007-depoimentos-ligados]]
- `sections/FAQ` com accordion acessível — ver [[faq]]

**Pronto quando:** o accordion abre/fecha por clique e por teclado, com `aria-expanded`
correto; com a flag em `false`, a seção de depoimentos desaparece por completo (a flag
nasce `true` nesta versão — ver [[007-depoimentos-ligados]]).

### Fase 6 — CTA final e Footer
- `sections/FinalCTA` — ver [[cta-final]]
- `layout/Footer` — ver [[footer]]

**Pronto quando:** telefone abre como `tel:`, e-mail como `mailto:`, e nenhum dado
comercial está escrito direto no JSX.

### Fase 7 — Botão flutuante e microinterações
- `components/WhatsAppFloat` — ver [[whatsapp-float]]
- `hooks/useScrollReveal.js`
- Hover dos cards e botões; bloco `prefers-reduced-motion` em `globals.css`

**Pronto quando:** com "reduzir movimento" ativo no sistema, nada anima e todo o
conteúdo aparece normalmente.

### Fase 8 — Imagens, performance e SEO
- Converter todas as imagens para WebP, dimensionadas para o uso real
- `loading="lazy"` + `width`/`height` + `aspect-ratio` em tudo abaixo do Hero
- `index.html`: title, meta description, viewport, Open Graph, favicon — ver [[performance-seo]]

**Pronto quando:** nenhuma imagem provoca salto de layout e o Hero é o primeiro
elemento pintado.

### Fase 9 — Acessibilidade e aceite
- Revisão de foco, `alt`, `aria-label`, contraste, hierarquia de títulos — ver [[acessibilidade]]
- Percorrer o [[checklist_de_aceite]] por inteiro

**Pronto quando:** todos os itens do checklist marcados, console limpo, build passando.

---

## 4. Riscos e pontos de atenção

- **Overflow horizontal.** `overflow-x: hidden` no `body` mascara o problema em vez de
  resolver. A regra é: nenhum elemento com largura fixa maior que a viewport, e
  `min-width: 0` nos filhos de grid/flex que contêm texto longo.
- **Contraste do laranja.** `#FF7A00` sobre branco não atinge 4.5:1 em texto pequeno.
  Usar laranja em títulos grandes, badges com fundo sólido e ícones — nunca em corpo de texto.
- **Depoimentos.** A seção nasce ligada, com conteúdo placeholder fictício — ver
  [[007-depoimentos-ligados]]. Substituir `testimonials.js` por material real do cliente é
  pendência crítica antes de publicar.
- **Inventar conteúdo.** Proibido criar endereço, CNPJ, anos de experiência, número de
  clientes, notas do Google, preços ou garantias específicas. Só existe o que está em
  [[dados-centralizados]].

---

## 5. Ordem de leitura sugerida

[[index]] → este plano → [[design-system]] → [[dados-centralizados]] → [[ui-primitivos]]
→ as notas de seção na ordem das fases.
