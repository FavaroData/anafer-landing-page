---
tipo: feature
area: componente
fase: 7
---

# Botão Flutuante do WhatsApp

## Objetivo

Manter o canal de contato a um toque durante toda a navegação, sem atrapalhar a leitura.

## Dados consumidos

`siteData.messages.default` via `buildWhatsAppUrl()`.

## Estrutura

`<a>` fixo no canto inferior direito, `z-index` acima do conteúdo e abaixo do painel do
menu mobile (`z-index: 90`, contra `100` do header e `110` do painel) — o botão nunca pode
flutuar sobre o menu aberto.

- Desktop: pílula com ícone + "Chamar no WhatsApp"
- <768px: círculo de 56px, só ícone
- Offset de 20px das bordas; no mobile, 16px

Fundo `--color-whatsapp`, sombra `--shadow-lg`, hover escurece e escala 1.05.

## Comportamento

- Aparece após ~400px de rolagem, com fade + subida de 12px; some ao voltar ao topo, para
  não competir com o CTA do Hero
- Escuta de scroll com `{ passive: true }` e comparação de limiar apenas
- Animação de entrada única, curta (200ms). Sem pulso contínuo, sem piscar, sem balão de
  mensagem automático
- Com movimento reduzido, aparece sem animação

## Acessibilidade

- `aria-label="Chamar no WhatsApp (abre em nova aba)"`
- `target="_blank"` + `rel="noopener noreferrer"` — ver [[001-links-vs-window-open]]
- Alvo de toque de no mínimo 56px
- Foco visível; ordem de tabulação natural (fim do documento)

## Responsividade

- ≥768px: pílula com ícone + texto, offset de 20px das bordas
- <768px: círculo de 56px (acima do alvo de toque mínimo de 44px), só ícone, offset de
  16px
- `right`/`bottom` fixos sempre menores que a viewport a partir de 320px — nunca causa
  rolagem lateral

## Conflito com o rodapé

Ao chegar no fim da página o botão sobrepõe o footer. Como o footer não tem ação clicável
essencial naquele canto, é aceitável. Se durante a revisão visual o botão cobrir texto do
copyright, adicionar `padding-bottom` ao footer no mobile.

## Pronto quando

- Não cobre CTA, links do footer nem o menu mobile aberto
- Abre a conversa com a mensagem padrão pré-preenchida
- Uma única animação de entrada, discreta
