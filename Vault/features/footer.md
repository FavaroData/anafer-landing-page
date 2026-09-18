---
tipo: feature
area: layout
fase: 6
---

# Footer

## Objetivo

Encerramento discreto com marca, serviços, contato e aviso de direitos. Não compete com o
[[cta-final]].

## Dados consumidos

`siteData.name`, `tagline`, `phone`, `phoneHref`, `email`, `emailHref`, e a lista de
serviços derivada de `services.js`.

## Estrutura

`<footer>` com fundo `--color-primary-dark`, mais escuro que o CTA final para criar
separação visível.

Três blocos em linha no desktop:
1. Marca em duas linhas + `tagline`
2. Serviços: Elétrica · Hidráulica · Pequenos reparos em geral
3. Contato: telefone e e-mail como links

Abaixo, separado por borda sutil: "© 2026 Fernando Serviços Rápidos. Todos os direitos
reservados."

O ano é fixo em 2026 por decisão de conteúdo. Se preferir que acompanhe o relógio,
`new Date().getFullYear()` resolve — mas isso passa a exibir um ano sem relação com a
publicação do site.

## Comportamento

Estático. Sem newsletter, sem redes sociais (nenhum perfil foi fornecido), sem mapa.

## Acessibilidade

- Serviços como lista semântica
- Links com contraste adequado sobre fundo escuro (`--color-text-on-dark-muted` no mínimo
  em textos secundários, nunca abaixo de 4.5:1)
- Nenhum texto menor que 14px

## Responsividade

- ≥768px: três colunas
- <768px: coluna única, centralizada, com espaçamento generoso entre blocos
- Links de contato (telefone e e-mail) com altura mínima de 44px de área clicável, em
  qualquer largura

## Pronto quando

- Nenhum dado de contato escrito direto no componente
- Aviso de copyright presente
- Nada inventado: sem CNPJ, endereço, redes sociais ou área de cobertura
