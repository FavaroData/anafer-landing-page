---
tipo: feature
area: secao
fase: 5
ancora: "#duvidas"
---

# FAQ

## Objetivo

Remover objeções imediatamente antes do CTA final: prazo, garantia, pagamento e
disponibilidade.

## Dados consumidos

`src/data/faq.js` — quatro itens `{ id, question, answer }`:

1. Quanto tempo demora para chegar? → "O prazo depende da localização e do tipo de serviço,
   mas buscamos atender o mais rápido possível."
2. Vocês dão garantia no serviço? → "Sim. As condições de garantia podem variar de acordo
   com o serviço realizado."
3. Qual a forma de pagamento? → "Entre em contato para consultar as formas de pagamento
   disponíveis."
4. Atendem aos finais de semana? → "O atendimento depende da disponibilidade. Consulte pelo
   WhatsApp."

As respostas são propositalmente não vinculantes. Não transformá-las em promessa concreta
(prazo em horas, percentual de garantia, lista de bandeiras) sem o cliente confirmar.

## Estrutura

`<section id="duvidas">` com fundo branco.

Duas colunas no desktop: à esquerda o `SectionHeader` (align `left`,
`label="DÚVIDAS FREQUENTES"`, `title="Perguntas Frequentes"`,
`subtitle="Tire suas dúvidas antes de chamar."`); à direita a lista do accordion.

Cada item: `<h3>` contendo um `<button>` de largura total com a pergunta à esquerda e um
ícone `+` / `−` à direita, seguido de um painel com a resposta.

## Comportamento

- Um item aberto por vez; clicar no aberto fecha
- Estado `openId` no componente `FAQ`; os itens são controlados
- Animação de abertura via `grid-template-rows: 0fr → 1fr` (anima sem `max-height`
  arbitrário e sem medir altura em JS)
- Ícone gira 45° ao abrir (o `+` vira `×`), com transição curta

## Acessibilidade

- Gatilho é `<button type="button">`, nunca `div`
- `aria-expanded` refletindo o estado
- `aria-controls` apontando para o `id` do painel; painel com `role="region"` e
  `aria-labelledby` do botão
- Painel fechado recebe `hidden` (`hidden={!isOpen}`) no mesmo render em que `isOpen` muda,
  não após o fim da transição — conteúdo fechado não fica acessível por `Tab` nem é lido
  por leitor de tela em nenhum momento
- Navegação nativa por `Tab` + `Enter`/`Espaço`; sem atalho customizado
- Foco visível no botão inteiro
- Botão-gatilho com `min-height: 44px`, garantindo alvo de toque adequado mesmo com
  perguntas curtas

## Responsividade

- ≥1024px: duas colunas
- <1024px: cabeçalho acima, accordion em largura total
- Perguntas longas quebram em duas linhas sem empurrar o ícone para fora: o texto da
  pergunta é um item flexível com `flex: 1 1 auto`, `min-width: 0` e `overflow-wrap:
  break-word`, enquanto o ícone mantém `flex-shrink: 0` e largura fixa de 20px
- Nenhuma rolagem horizontal a partir de 320px de largura

## Pronto quando

- Abre e fecha por clique e por teclado, com `aria-expanded` correto
- Conteúdo fechado não é alcançável por `Tab`
- Com movimento reduzido, abre instantaneamente e continua funcional
