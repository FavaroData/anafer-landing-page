---
tipo: decisao
numero: 008
status: aceita
data: 2026-09-11
---

# 008 — `useScrollReveal` e `useLockBodyScroll` antecipados para a Fase 1

## Contexto

O [[plano_de_implementacao]] original alocava `hooks/useScrollReveal.js` na Fase 7 (botão
flutuante e microinterações) e `hooks/useLockBodyScroll.js` na Fase 2 (header e navegação)
— cada hook criado junto da primeira seção que precisa dele.

## Decisão

Os dois hooks foram criados na Fase 1, junto dos primitivos de UI, em vez de esperarem sua
fase original.

## Razão

Puramente de execução paralela, não de arquitetura. `useScrollReveal` é consumido por três
seções — [[beneficios]], [[depoimentos]] e [[cta-final]] — que rodaram em agentes paralelos
diferentes. Se cada agente criasse seu próprio hook ao chegar na sua seção, o resultado
seriam três implementações divergentes (nomes de retorno diferentes, tratamento de
`prefers-reduced-motion` inconsistente) para resolver o mesmo problema. Criar o hook uma
vez, antes de disparar os agentes de seção, elimina esse risco.

`useLockBodyScroll` foi movido para o mesmo lote por conveniência de execução (mesmo commit
de fundação dos hooks), embora só tenha um consumidor ([[header]]) — não havia risco de
divergência para ele especificamente.

## Consequências

- `src/hooks/` fica completo já na Fase 1, antes de qualquer seção existir
- `useScrollReveal` tem uma única assinatura (`const [ref, isVisible] = useScrollReveal()`)
  usada identicamente por Benefícios, Depoimentos e CTA Final
- Nenhuma mudança de comportamento em relação ao que [[header]], [[beneficios]],
  [[depoimentos]] e [[cta-final]] já descreviam — só o momento de criação dos arquivos mudou
