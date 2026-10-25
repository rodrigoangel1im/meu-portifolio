# Checklist de Testes

Resultados das verificações feitas no PortfolioHUB. Só constam testes realmente executados.

**Data:** 25/10/2026
**Site testado:** https://rodrigoangel1im.github.io/meu-portifolio
**Ambiente:** Google Chrome, janela anônima

## Resultados

| Teste | Como foi feito | Resultado | Evidência |
|---|---|---|---|
| Links do menu e das seções | Cliquei nos itens do menu e nos links de cada seção do site | Todos abriram normalmente | Teste manual |
| Responsividade (celular) | Chrome DevTools (F12) com simulação de celular | Texto legível e menu funcionando | Print da simulação |
| Lighthouse (modo celular) | Chrome DevTools, aba Lighthouse, "Analyze page load" | Performance 99, Accessibility 95, Best Practices 100, SEO 100 | docs/print-lighthouse.png |
| Proteção da branch main | Tentei editar o README direto na main pelo site do GitHub | O GitHub bloqueou: "You can't commit to main because it is a protected branch" | docs/print-protecao-main.png |
| Verificação automática de links | GitHub Action (lychee) nos Pull Requests | Passou, com 2 links externos ignorados por bloquearem robôs (gemini.google.com e planalto.gov.br) | Aba Actions do repositório |

## Não testado

- Navegadores diferentes do Chrome (Firefox, Edge, Safari)
- Navegação apenas por teclado e leitor de tela

## Observações

- Accessibility ficou em 95: há pontos de melhoria possíveis, que podem ser vistos no relatório do Lighthouse.
- A seção "Apresentação" do site mostra "Vídeo em preparação" até a publicação do vídeo no YouTube.
