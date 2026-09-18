---
tipo: decisao
numero: 011
status: aceita
data: 2026-09-18
---

# 011 — Área de atendimento vira seção própria "Onde atendemos"

## Contexto

[[010-servicos-quatro-cards]] havia colocado o texto "Atendimento: {área}" como uma faixa
compacta dentro da seção Serviços, seguindo a orientação inicial do cliente de não criar
uma seção grande só para isso. Na sequência, o cliente pediu explicitamente uma seção
inteira "Onde atendemos" logo abaixo de Serviços, usando uma peça de design pronta (mapa do
Paraná com marcadores e o texto "Atendimento: grande Curitiba, região metropolitana e
litoral PR" já desenhado dentro da própria imagem) — instrução posterior e mais específica
que substitui a anterior.

## Decisão

- Removida a faixa `.coverage` de dentro de `Services.jsx`/`Services.module.css` — era a
  implementação anterior de [[010-servicos-quatro-cards]], nunca chegou a ser a versão
  final entregue.
- Nova seção `src/components/sections/ServiceArea/ServiceArea.jsx`, renderizada em
  `App.jsx` logo após `<Services />` e antes de `<Testimonials />`, âncora `#onde-atendemos`.
- `SectionHeader` com `label="ÁREA DE ATENDIMENTO"` e `title="Onde atendemos"`, sem
  `subtitle` em texto solto — o conteúdo ("Atendimento: ...") já vem desenhado dentro da
  imagem fornecida, repeti-lo em HTML seria redundante.
- Imagem salva em `src/assets/images/atendimento-mapa.png`, fornecida pelo cliente/design
  (mapa do PR com marcadores nas três áreas). Mantida em **PNG**, não convertida para WebP
  como as demais imagens do projeto (ver [[performance-seo]]) — sem ferramenta de conversão
  disponível no ambiente de implementação (`cwebp`, ImageMagick e Pillow indisponíveis).
  Resultado: ~1,5MB no bundle, bem acima dos outros assets (24–264KB). Fica registrado como
  pendência de otimização — reexportar a mesma peça em WebP a partir da ferramenta de
  design de origem dá um resultado melhor do que uma conversão automática às cegas.
- `siteData.serviceArea` continua em `src/data/site.js`, agora usado só no `alt` da
  imagem (texto equivalente para leitor de tela), não mais renderizado como texto solto.

## Razão

Pedido explícito e específico do cliente, com uma peça de design já pronta — diverge da
orientação inicial dele mesmo (evitar seção grande só para isso), mas é instrução posterior
que substitui a anterior; não é decisão do agente.

## Consequências

- [[010-servicos-quatro-cards]] deixa de valer quanto à faixa de atendimento dentro de
  Serviços; a contagem de cards (4) e o card não mais quadrado continuam valendo.
- Ver [[area-atendimento]] para a documentação completa da nova seção.
- `Vault/index.md` atualizado: nova seção na lista "Seções da página" e nesta lista de
  decisões.
