# Fernando Serviços Rápidos

Landing page comercial frontend-only, focada em conversão para WhatsApp. Elétrica,
hidráulica e pequenos reparos.

Sem backend, sem API, sem banco, sem autenticação, sem painel administrativo.

## Stack

- Vite + React 18, JavaScript (sem TypeScript)
- CSS Modules por componente + `variables.css` / `globals.css` globais
- Ícones SVG inline, sem pacote de ícones
- Fonte Inter self-hosted via `@fontsource/inter`

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente
npm run lint      # oxlint
npm run test      # testes de src/lib/whatsapp.js
```

## Documentação

Toda a documentação do projeto — plano de implementação, decisões, notas por feature e
checklist de aceite — vive em `../anafer_landingpage_vault/Vault/` (pasta irmã deste
diretório, fora do código). Comece por `Vault/index.md`.

## Dados do negócio

Única fonte da verdade no código: `src/data/site.js`. Nada de telefone, e-mail ou link de
WhatsApp deve aparecer hardcoded em outro lugar — ver `CONSTRAINTS.md`.

## Pendências antes de publicar

Ver `Vault/checklist_de_aceite.md` para a lista completa. As duas mais importantes:

- As 4 imagens em `src/assets/images/` e `public/og-image.jpg` são placeholder gerado
  localmente, não fotos reais.
- Os depoimentos em `src/data/testimonials.js` são fictícios, criados para
  desenvolvimento visual da seção.
