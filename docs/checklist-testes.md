# Checklist de Testes — PortfolioHUB

Checklist para validar a página antes e depois do merge na `main`. **As colunas “Resultado” e “Data” devem ser preenchidas somente após a execução real** — não preencha por estimativa.

> **TODO:** executar os testes e registrar `Aprovado`, `Reprovado` ou `N/A` com a data e a evidência (print ou link).

## 1. Ambiente de teste

| Item | Valor |
|---|---|
| Sistema operacional | **TODO** |
| Navegador e versão | **TODO** |
| Resolução testada | **TODO** (ex.: 360×800, 768×1024, 1280×800) |
| Data da bateria | **TODO** |
| Responsável | Rodrigo Angelim da Cunha |

## 2. Links e navegação

| # | Teste | Como testar | Resultado | Data | Evidência |
|---|---|---|---|---|---|
| 1 | Links internos de âncora | Clicar em cada item do menu e conferir a seção correta |  |  |  |
| 2 | Links para documentos (`docs/*.pdf` e `docs/*.md`) | Abrir cada link e verificar conteúdo |  |  |  |
| 3 | Links para projetos (`projetos/*/index.html`) | Abrir calculadora e lista de tarefas |  |  |  |
| 4 | Links externos (GitHub, LinkedIn, Pages) | Abrir e confirmar destino |  |  |  |
| 5 | Links marcados como TODO | Confirmar que não há `href` quebrado com TODO |  |  |  |
| 6 | Verificação automatizada de links | Rodar o workflow `Verificação de links` |  |  |  |

## 3. Responsividade

| # | Teste | Como testar | Resultado | Data | Evidência |
|---|---|---|---|---|---|
| 7 | Celular (360 px) | DevTools → dispositivo móvel; sem rolagem horizontal |  |  |  |
| 8 | Tablet (768 px) | DevTools; menu e cards reorganizados |  |  |  |
| 9 | Desktop (1280 px) | Janela normal; menu completo e grid alinhado |  |  |  |
| 10 | Menu hambúrguer | Abrir/fechar no mobile e navegar por uma âncora |  |  |  |

## 4. Navegadores e sessão

| # | Teste | Como testar | Resultado | Data | Evidência |
|---|---|---|---|---|---|
| 11 | Chrome | Abrir a página e percorrer todas as seções |  |  |  |
| 12 | Firefox | Repetir o teste |  |  |  |
| 13 | Edge | Repetir o teste |  |  |  |
| 14 | Safari (se disponível) | Repetir o teste |  |  |  |
| 15 | Janela anônima | Abrir a página sem cache/extensões |  |  |  |
| 16 | Console do navegador | DevTools → Console; sem erros |  |  |  |

## 5. Acessibilidade

| # | Teste | Como testar | Resultado | Data | Evidência |
|---|---|---|---|---|---|
| 17 | Navegação por teclado | Percorrer com `Tab`/`Shift+Tab`; foco visível |  |  |  |
| 18 | Leitor de tela | NVDA, VoiceOver ou Narrator; headings e links compreensíveis |  |  |  |
| 19 | Textos alternativos | Conferir `alt` das imagens e ícones decorativos |  |  |  |
| 20 | Contraste de cores | Ferramenta de contraste ou Lighthouse |  |  |  |
| 21 | Ordem dos headings | `h1` → `h2` → `h3`, sem saltos |  |  |  |

## 6. Qualidade e produção

| # | Teste | Como testar | Resultado | Data | Evidência |
|---|---|---|---|---|---|
| 22 | HTML válido | Validador W3C (<https://validator.w3.org/>) |  |  |  |
| 23 | Lighthouse — Performance | Chrome DevTools → Lighthouse (mobile) |  |  |  |
| 24 | Lighthouse — Acessibilidade (meta ≥ 90) | Idem |  |  |  |
| 25 | Lighthouse — Boas práticas | Idem |  |  |  |
| 26 | Lighthouse — SEO | Idem |  |  |  |
| 27 | Push direto na `main` bloqueado | Tentar `git push origin main` com uma alteração de teste |  |  |  |
| 28 | PR exige revisão e check de links | Abrir PR de teste e conferir as regras |  |  |  |
| 29 | GitHub Pages com HTTPS | Abrir a URL pública e conferir o cadeado |  |  |  |
| 30 | Deploy após o merge | Confirmar a atualização da página publicada |  |  |  |

## 7. Critérios de aceite

- Nenhum link interno quebrado;
- Nenhum erro no console;
- Layout funcional em 360 px, 768 px e 1280 px;
- Navegação por teclado e headings em ordem;
- Lighthouse Acessibilidade ≥ 90 (meta);
- Push direto na `main` bloqueado;
- Workflow de links verde.

## 8. Pendências e observações

- **TODO:** gerar os prints ausentes em `docs/` (`print-portfolio.png`, `print-calculadora.png`, `print-lista-de-tarefas.png`) e restaurar as imagens nos READMEs dos projetos.
- **TODO:** registrar a data e o resultado de cada linha.
- **TODO:** anexar os prints das configurações de segurança (ruleset, secret scanning, push protection e Dependabot alerts).
