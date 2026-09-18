---
tipo: feature
area: secao
fase: 6
---

# CTA Final

## Objetivo

Fechar a jornada. Última chamada para o WhatsApp, com os dados de contato visíveis para
quem prefere telefone ou e-mail.

## Dados consumidos

`siteData.name`, `phone`, `phoneHref`, `email`, `emailHref`, `messages.default`.

## Estrutura

`<section>` com fundo `--color-primary`.

- Ícone/marca à esquerda: casa estilizada com elemento de manutenção, em SVG inline laranja
  e branco (não é imagem raster; escala sem perda e não pesa no carregamento)
- Texto pequeno: "Não deixe para depois!"
- `<h2>`: "Seu problema tem solução."
- Subtexto: "Chame agora e tenha um serviço rápido, seguro e com qualidade."
- `WhatsAppButton` size `lg` com `subtitle="Atendimento imediato"`, alinhado à direita no
  desktop
- Faixa inferior, separada por borda sutil: telefone com ícone (link `tel:`) e e-mail com
  ícone (link `mailto:`), lado a lado

## Comportamento

Sem animação além da entrada por `useScrollReveal`. É a área de maior peso de conversão;
movimento aqui distrai.

## Acessibilidade

- Ícone decorativo com `aria-hidden="true"`
- Telefone e e-mail são links reais, com o texto visível servindo de rótulo
- Contraste branco sobre `--color-primary` verificado
- O botão verde sobre azul escuro tem contraste suficiente na borda; o rótulo é branco
  sobre verde, que atinge o mínimo em texto grande — manter `--fs-lead` ou maior no rótulo
- Links de telefone e e-mail com `min-height: 44px`, garantindo alvo de toque adequado no
  mobile mesmo com texto pequeno (`--fs-small`)

## Responsividade

- ≥1024px: ícone + texto à esquerda, CTA à direita
- 768–1023px: texto acima, CTA abaixo, tudo centralizado
- <768px: coluna única, CTA em largura confortável, faixa de contato empilhada
- O `WhatsAppButton` ocupa `width: 100%` até `max-width: 24rem` abaixo de 768px (evita
  estourar a largura da tela a partir de 320px) e volta a `width: auto` a partir de 768px,
  preservando o alinhamento à direita no desktop
- Nenhuma rolagem horizontal a partir de 320px de largura

## Pronto quando

- Telefone e e-mail vêm de `site.js`, sem string repetida no JSX
- `tel:` e `mailto:` funcionam no celular
- Nenhum dado inventado (endereço, horário, área de atendimento) aparece aqui
