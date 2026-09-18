---
tipo: decisao
numero: 006
status: aceita
data: 2026-09-11
---

# 006 — Imagens nascem placeholder, com nome e dimensão fixados antes da foto real

## Contexto

[[performance-seo]] e [[hero]]/[[servicos]] assumem, desde o texto original do plano, que
as quatro imagens da página (`hero-profissional.webp` e as três `servico-*.webp`) vêm de um
banco de imagens gratuito real desde o começo. Produzir/escolher a foto real de cada uma
antes de começar teria bloqueado Hero e Serviços — duas seções que precisavam avançar em
paralelo com as demais.

## Decisão

As quatro imagens nasceram como placeholder gerado localmente com ImageMagick: fundo azul
escuro sólido com texto identificando o conteúdo pretendido (ex.: "Hero — Profissional",
"Serviço — Elétrica"). Nome de arquivo e dimensão foram fixados **antes** de existir foto
real, exatamente com o contrato que o código já consome:

| Arquivo | Dimensão |
|---|---|
| `hero-profissional.webp` | 1200×900 |
| `servico-eletrica.webp` | 600×450 |
| `servico-hidraulica.webp` | 600×450 |
| `servico-reparos.webp` | 600×450 |

Isso destravou Hero, Benefícios/Serviços e as demais seções para rodar em paralelo sem
esperar a curadoria de fotos.

Já existem candidatos reais de banco de imagens gratuito (Unsplash/Pexels, com licença
verificada) levantados nesta sessão de planejamento para o usuário escolher depois — a
lista de candidatos não faz parte do código nem do Vault; fica com quem conduziu a pesquisa,
para revisão do cliente antes da publicação.

## Razão

Trocar a imagem depois é só sobrescrever o arquivo `.webp` com o mesmo nome e a mesma
proporção — nenhuma linha de código muda (`import` em `services.js` e `Hero.jsx` continuam
válidos, `width`/`height` no `<img>` continuam corretos). Fixar nome e dimensão antes da
foto real é o que torna essa troca segura.

## Consequências

- **Pendência crítica antes de publicar**: as quatro imagens atuais são placeholder
  (fundo azul + texto), não fotos reais. [[performance-seo]] descreve o comportamento
  técnico (WebP, dimensão, lazy loading) presumindo fotos reais — isso já está implementado
  corretamente, só o conteúdo visual dos arquivos precisa trocar
- Trocar a imagem = sobrescrever o `.webp` com mesmo nome/proporção, sem tocar em código
- Se a foto real escolhida tiver proporção sensivelmente diferente de 4:3 (serviços) ou
  4:3 (hero, 1200×900), reexportar recortada em vez de esticar, para não distorcer
- `alt` de cada imagem já descreve a cena real esperada (ex.: "Instalação elétrica sendo
  realizada") e não precisa mudar quando a foto real entrar, desde que a cena bata com o
  texto
