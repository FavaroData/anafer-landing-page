---
tipo: feature
area: secao
fase: 4
---

# Benefícios

## Objetivo

Converter a promessa do Hero em quatro razões concretas, antes de detalhar serviços.
Passo "confiança" da jornada descrita no briefing.

## Dados consumidos

`src/data/benefits.js` — quatro itens `{ id, icon, title, description }`:

| icon | title | description |
|---|---|---|
| `zap` | Agilidade no Atendimento | Chego rápido, resolvo com eficiência. |
| `shield` | Trabalho de Qualidade | Serviço bem feito, com garantia. |
| `money` | Preço Justo | Transparência e sem surpresas. |
| `user` | Profissional Experiente | Conhecimento e prática em diversos serviços. |

## Estrutura

`<section>` com fundo branco.

- `SectionHeader` com `label="POR QUE ESCOLHER NOSSOS SERVIÇOS?"`,
  `title="Solução completa para o seu dia a dia"`,
  `subtitle="Mais do que reparos, oferecemos tranquilidade, segurança e praticidade."`
- Grid de quatro itens. Cada item: ícone em círculo colorido (48px), `<h3>` e parágrafo curto.
- Separadores verticais sutis (`--color-border`) entre colunas no desktop, como no mockup.
  Ocultos quando a grade quebra.

Cores dos círculos, alternando para criar ritmo: azul, laranja, verde, azul.
O verde aqui é exceção consciente ao "verde só para WhatsApp" — é ícone decorativo de
"preço justo", não ação. Se causar ambiguidade na revisão visual, trocar por azul.

## Ícones

SVG inline resolvidos por um mapa local no componente:

```js
const icons = { zap: <ZapIcon />, shield: <ShieldIcon />, money: <MoneyIcon />, user: <UserIcon /> };
```

Todos com `aria-hidden="true"` e `focusable="false"` — o texto ao lado já comunica.

## Comportamento

Entrada por `useScrollReveal` com atraso escalonado de 60ms por item. Sem hover elaborado:
não são elementos clicáveis.

## Acessibilidade

- `<h3>` real em cada benefício, mantendo a hierarquia h1 → h2 → h3
- Lista semântica (`<ul>`/`<li>`), já que são itens equivalentes
- Nenhum `div` clicável

## Responsividade

- ≥1024px: 4 colunas
- 768–1023px: 2×2
- <768px: 1 coluna, ícone à esquerda do texto para economizar altura

## Pronto quando

- Grade quebra nos três formatos sem órfão desalinhado
- Separadores somem quando há quebra de linha
- Texto legível a 320px sem truncar
