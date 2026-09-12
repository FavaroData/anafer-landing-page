---
tipo: decisao
numero: 003
status: aceita
data: 2026-09-11
---

# 003 — Header com fundo sólido

## Contexto

No mockup o header aparece sobreposto à foto do Hero, com fundo branco na área do logo e
transparência sobre a imagem.

## Decisão

Header sticky com fundo branco opaco desde o topo, altura `var(--header-height)`, com
sombra sutil que aparece após ~8px de rolagem. O Hero começa abaixo do header.

## Razão

Header translúcido sobre foto faz o contraste do menu depender do trecho da imagem que
estiver atrás. Como a foto do Hero tem áreas claras (parede, escada) e escuras, itens de
menu escuros ficam ilegíveis em parte da largura, e isso varia com o breakpoint e com a
troca futura da imagem. Fundo sólido torna o contraste determinístico e sobrevive a
qualquer substituição de foto.

A sensação visual do mockup se mantém: o Hero continua com foto sangrando e fundo escuro,
e o header permanece leve por ser branco e baixo.

## Consequências

- `--header-height` reservado no fluxo; nenhuma sobreposição a calcular
- `scroll-margin-top: var(--header-height)` resolve o posicionamento das âncoras
- Logo e menu sempre com contraste conhecido
