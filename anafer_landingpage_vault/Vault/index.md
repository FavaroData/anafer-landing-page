---
tipo: hub
projeto: anafer_landingpage
data: 2026-09-11
---

# Fernando Serviços Rápidos — Vault

Documentação da landing page comercial frontend-only do projeto `anafer_landingpage`.

## Começar aqui

- [[plano_de_implementacao]] — stack, estrutura de pastas e as 10 fases de entrega
- [[checklist_de_aceite]] — o que precisa estar verdadeiro antes de publicar

## Fundações

- [[design-system]] — tokens de cor, tipografia, espaçamento, sombras, breakpoints
- [[dados-centralizados]] — `src/data/` e `src/lib/whatsapp.js`; tudo que é texto comercial
- [[ui-primitivos]] — `Container`, `SectionHeader`, `Button`, `WhatsAppButton`, `Card`

## Seções da página, na ordem em que aparecem

1. [[header]]
2. [[hero]]
3. [[beneficios]]
4. [[servicos]]
5. [[depoimentos]]
6. [[faq]]
7. [[cta-final]]
8. [[footer]]
9. [[whatsapp-float]]

## Qualidade

- [[acessibilidade]]
- [[performance-seo]]

## Decisões

- [[001-links-vs-window-open]] — âncoras reais no lugar de `window.open`
- [[002-depoimentos-placeholder]] — regras de avatar/nota/contagem para a seção
  (substituída por [[007-depoimentos-ligados]] quanto ao valor padrão da flag)
- [[003-header-fundo-solido]] — header opaco em vez de sobreposto à foto
- [[004-primitivos-ui]] — camada compartilhada `ui/` em vez de seções isoladas
- [[005-codigo-em-subpasta]] — código e Vault são pastas irmãs, Vault não fica dentro de
  `anafer_landingpage/`
- [[006-imagens-placeholder-primeiro]] — as quatro imagens nascem placeholder gerado
  localmente, nome e dimensão fixados antes da foto real
- [[007-depoimentos-ligados]] — `testimonialsEnabled` nasce `true`, seção visível desde o
  lançamento com conteúdo ainda placeholder
- [[008-hooks-na-fase-1]] — `useScrollReveal` e `useLockBodyScroll` antecipados para a
  Fase 1

## Dados do negócio

Única fonte da verdade no código: `src/data/site.js`. Ver [[dados-centralizados]].

| Campo | Valor |
|---|---|
| Marca | Fernando Serviços Rápidos |
| Telefone | 41 99680-4326 |
| WhatsApp | https://wa.me/5541996804326 |
| E-mail | albertosilva1106@gmail.com |
| Serviços | Elétrica · Hidráulica · Pequenos reparos em geral |

Nada além disso foi fornecido pelo cliente. Endereço, CNPJ, tempo de mercado, número de
clientes, avaliações e preços **não existem** e não devem ser inventados.

## Convenção de documentação

Uma nota por feature em `features/`, seguindo sempre a mesma ordem de seções:
objetivo → dados consumidos → estrutura → comportamento → acessibilidade → responsividade
→ pronto quando. Decisões que divergem do briefing ou fecham um debate viram nota em
`decisoes/`, numerada e curta.
