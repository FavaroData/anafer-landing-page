---
tipo: feature
area: secao
fase: 4
ancora: "#onde-atendemos"
---

# Onde Atendemos

## Objetivo

Deixar clara a área de cobertura do atendimento (Grande Curitiba, região metropolitana e
litoral do Paraná) logo após a seção de Serviços, sem competir visualmente com o título
principal da página nem com o CTA de WhatsApp — ver [[011-area-atendimento-secao-propria]].

## Dados consumidos

`siteData.serviceArea` (`src/data/site.js`) — usado só no `alt` da imagem, para o texto
continuar acessível a leitor de tela. O conteúdo visível (título "Atendimento:", subtítulo
e mapa do Paraná com marcadores) já vem desenhado dentro do arquivo de imagem
`src/assets/images/atendimento-mapa.png`, fornecido pelo cliente/design — não é gerado pelo
código.

## Estrutura

`<section id="onde-atendemos" className="section">`, mesmo padrão de seção clara das
demais, sem fundo customizado. `SectionHeader` centralizado com
`label="ÁREA DE ATENDIMENTO"` e `title="Onde atendemos"`, sem `subtitle` (evitaria repetir
o texto que a imagem já mostra). Abaixo, uma única `<img>` de largura total do container,
`border-radius: var(--radius-card)`.

## Comportamento

Estática, sem interação e sem link — seção só informativa, entre Serviços e Depoimentos.

## Acessibilidade

- `alt` descreve a cena e repete o texto de atendimento por extenso para quem usa leitor de
  tela: "Mapa do Paraná com marcadores na grande Curitiba, região metropolitana e litoral,
  ilustrando a área de atendimento. Atendimento: {siteData.serviceArea}"
- `width`/`height` declarados (1983×793, dimensão real do arquivo), evitando salto de
  layout
- Hierarquia de título respeitada: `SectionHeader` usa `<h2>` como as demais seções

## Responsividade

Imagem com `width: 100%; height: auto`, escala proporcionalmente em qualquer largura a
partir de 320px, sem rolagem horizontal. Como o texto "Atendimento: ..." está desenhado
dentro da imagem (não é HTML), fica menor em telas muito estreitas — limitação aceita
porque o `alt` mantém a informação acessível e o texto continua legível na maioria dos
smartphones atuais.

## Pronto quando

- Seção aparece logo após Serviços e antes de Depoimentos
- Imagem carrega com `loading="lazy"`, sem salto de layout
- `alt` transmite a mesma informação da imagem para leitor de tela
