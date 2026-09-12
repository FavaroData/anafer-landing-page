---
tipo: decisao
numero: 005
status: aceita
data: 2026-09-11
---

# 005 — Código vive em pasta irmã do Vault, não dentro dela

## Contexto

A seção 2 do [[plano_de_implementacao]] desenhava `Vault/` como uma subpasta dentro da
árvore do projeto de código (`anafer_landingpage/Vault/`).

## Decisão

O código vive em `anafer_landingpage/` e o Vault vive em `anafer_landingpage_vault/Vault/`
— duas pastas irmãs, não uma dentro da outra. A seção 2 do plano foi corrigida para
remover `Vault/` da árvore do projeto.

## Razão

Decisão do usuário no planejamento de execução: manter a documentação fora da árvore que o
build empacota e que as ferramentas de código (linter, git do projeto, etc.) enxergam,
evitando que o Vault seja varrido por comandos como `grep -r` sobre `src/`, tratado como
código-fonte por engano, ou incluído em builds/deploys do projeto.

## Consequências

- Nenhum caminho relativo entre os dois projetos deve ser assumido no código
- Referências cruzadas (código → Vault) só existem como comentário em texto livre, nunca
  como import ou caminho resolvido
- Qualquer agente ou pessoa que procurar `Vault/` dentro de `anafer_landingpage/` não vai
  encontrá-la — o mapa correto é `anafer_landingpage_vault/Vault/`
