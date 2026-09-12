# CONSTRAINTS.md

Invariantes do projeto Fernando Serviços Rápidos. Válidas para todo agente e
todo colaborador humano, em qualquer fase.

1. Zero hex cru fora de variables.css; SVG usa currentColor ou var(--…)
2. wa.me só em lib/whatsapp.js; telefone e e-mail só em data/site.js
3. Nenhuma dependência nova; ninguém além do F0 roda npm install
4. Nada de <div onClick> — tudo que age é <button> ou <a>
5. Um único <h1> na página inteira, e é do Hero
6. testimonialsEnabled: true, mas sem foto de rosto, nota agregada ou contagem de avaliações
7. Proibido inventar conteúdo: endereço, CNPJ, anos de experiência, número de clientes, preço, prazo em horas, nota do Google, redes sociais, garantia específica
8. Classes CSS em camelCase, locais ao módulo (CSS Modules); nenhum :global
