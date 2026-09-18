---
tipo: checklist
fase: 9
---

# Checklist de Aceite

Derivado da seção 29 do briefing, ampliado com o que as decisões acrescentaram.
Percorrer por inteiro antes de considerar a entrega pronta. Ver [[plano_de_implementacao]].

**Aviso:** os itens marcados `[x]` abaixo foram verificados nesta sessão por build, teste
automatizado, grep ou leitura direta do código-fonte — evidência estática, não observação
em navegador real. Todo item que exige navegador real (responsividade visual em 320–1920px,
navegação só-teclado ponta a ponta, contraste computado, comportamento do botão flutuante
ao rolar, console do navegador) continua `[ ]` e depende de verificação manual do usuário
antes de publicar.

## Build e código

- [x] `npm run build` passa sem aviso
- [ ] Console do navegador sem erro em dev e em preview
- [x] Nenhum import quebrado (`npm run build` falharia com import quebrado; não falhou)
- [x] Nenhum arquivo órfão — nenhuma página de teste de primitivos encontrada em `src/`
- [x] `node --test src/lib/whatsapp.test.js` passa (3/3) — não há script `npm test`; o
      projeto não tem suíte automatizada ampla, só este arquivo cobrindo `buildWhatsAppUrl`
- [x] Nenhum `TODO` remanescente (`grep -rn "TODO" src/` vazio)
- [x] `App.jsx` contém apenas composição (lido nesta sessão: só JSX de layout, sem estado
      nem lógica)
- [x] `grep -r "99680" src/` retorna só `data/site.js`
- [x] `grep -r "wa.me" src/` retorna só `lib/whatsapp.js` (e seu próprio teste,
      `lib/whatsapp.test.js`, que só referencia a função — nenhuma outra parte do código
      monta URL de WhatsApp)
- [x] Nenhum valor hexadecimal cru fora de `variables.css`
- [x] Cards de serviço em `<ul>/<li>` (lista semântica) com `Card as="a"` dentro, não
      `<div>` solta — confirmado em `Services.jsx`

## Layout e responsividade

Verificar em 320, 360, 375, 390, 414, 768, 1024, 1280, 1440 e 1920px:

- [ ] Nenhuma rolagem horizontal em nenhuma largura
- [ ] Nenhuma rolagem horizontal com o menu mobile aberto
- [ ] Hero em coluna única abaixo de 768px
- [ ] Benefícios em 4 / 2×2 / 1 coluna
- [ ] Cards de serviço e depoimento empilham corretamente
- [ ] FAQ em largura total no mobile
- [ ] Conteúdo centralizado com máximo de 1200px no desktop
- [ ] Nenhum texto truncado ou sobreposto

## Funcionalidade

- [x] Todos os CTAs de WhatsApp apontam para `wa.me/5541996804326`, com
      `target="_blank"` — confirmado por leitura de código em `WhatsAppButton`, no card de
      `Services` e em `WhatsAppFloat` (comportamento real de clique em nova aba ainda
      depende de verificação em navegador)
- [x] Mensagem pré-preenchida correta em cada ponto (genérica no header, hero, CTA final e
      flutuante; específica em cada card de serviço) — confirmado lendo `site.js` e cada
      componente consumidor
- [ ] Menu mobile abre, fecha ao clicar num item, no overlay e com `Esc`
- [ ] Scroll de fundo travado com o menu aberto
- [ ] Accordion abre, fecha e mantém um item por vez
- [ ] Scroll suave nas âncoras, com título visível abaixo do header
- [ ] `tel:` e `mailto:` funcionam no celular
- [ ] Botão flutuante não cobre CTA, footer nem o menu aberto

## Conteúdo

- [ ] Nenhuma informação inventada: sem endereço, CNPJ, anos de experiência, número de
      clientes, certificação, nota do Google, preço ou garantia específica
- [x] Seção de depoimentos **ligada** (`testimonialsEnabled: true`, decisão
      [[007-depoimentos-ligados]]) e presente no menu, com conteúdo ainda placeholder
      fictício — trocar por depoimentos reais é pendência crítica antes de publicar
- [x] Nenhuma foto de pessoa ilustrando depoimento: avatar é círculo com iniciais
      (confirmado em `Testimonials.jsx`, sem campo de imagem)
- [ ] Textos conferem com o briefing, sem erro de digitação

## Acessibilidade

- [x] Um único `<h1>` (`grep -rn "<h1" src/` só encontra `Hero.jsx`); hierarquia
      h1 → h2 (`SectionHeader`) → h3 (cards/itens de FAQ/benefícios) consistente
- [x] Todas as imagens com `alt` descritivo (Hero, os quatro cards de `Services` e o mapa
      de `ServiceArea`)
- [ ] Ícones decorativos com `aria-hidden="true"`
- [ ] Foco visível em todo elemento interativo
- [ ] Página percorrível só por teclado, sem armadilha de foco
- [x] Conteúdo fechado do FAQ fora da ordem de tabulação — `hidden={!isOpen}` no painel,
      aplicado no mesmo render em que fecha (ver [[faq]])
- [x] `aria-expanded` correto no hamburger (`Header.jsx`) e no accordion (`FAQ.jsx`), ambos
      com `aria-controls` apontando para o `id` do painel/hamburger correspondente
- [x] Links de nova aba informam isso no `aria-label`, e todos os `target="_blank"` têm
      `rel="noopener noreferrer"` — confirmado em `WhatsAppButton`, `Services` e
      `WhatsAppFloat`
- [x] Link "Pular para o conteúdo" presente como primeiro elemento de `App.jsx`, apontando
      para `#inicio`, com CSS `.skipLink` em `globals.css` (fora da tela, visível no foco)
- [ ] Tabela de contraste de [[acessibilidade]] verificada
- [ ] Com movimento reduzido ativo, nada anima e todo o conteúdo aparece

## Performance

- [ ] Imagens em WebP, dimensionadas para o uso real
- [ ] `width`/`height` declarados; nenhum salto de layout
- [ ] `loading="lazy"` em tudo abaixo do Hero
- [ ] Hero sem lazy, com `fetchpriority="high"`
- [ ] Sem biblioteca desnecessária no bundle
- [ ] Fonte self-hosted, sem requisição a terceiro

## SEO

- [ ] `<html lang="pt-BR">`
- [ ] Title e meta description conforme [[performance-seo]]
- [ ] Open Graph básico e favicon presentes
- [ ] Sem JSON-LD `LocalBusiness` (pendência de conteúdo, não de código)
