# Plano de Implantação — PortfolioHUB

| Campo | Valor |
|---|---|
| Projeto | PortfolioHUB |
| Autor | Rodrigo Angelim da Cunha |
| Disciplina | Bootcamp I — Ciência da Computação (CEUB) |
| Versão do documento | 1.0 (Entrega Final) |
| Data | 25/10/2026 |
| Repositório | <https://github.com/rodrigoangel1im/meu-portifolio> |
| Página publicada | <https://rodrigoangel1im.github.io/meu-portifolio> |

> **TODO:** confirmar a data oficial de entrega e atualizar a versão deste documento após a revisão final.

## 1. Introdução

O repositório `meu-portifolio` foi criado em 17/10/2026 e já continha, na Entrega Intermediária, um site pessoal responsivo publicado no GitHub Pages, três projetos acadêmicos em pastas próprias (site vitrine, calculadora de IMC e lista de tarefas), currículo, slides e a tag `v1.0`.

A Entrega Final propõe transformá-lo no **PortfolioHUB**: um hub de portfólio que, além de exibir os projetos, demonstra domínio do ciclo de vida de um repositório — governança, segurança, colaboração, documentação, testes e preparação para produção. Este plano descreve o que já está implementado no repositório, o que depende de configuração manual na interface do GitHub e o que ainda precisa ser produzido (vídeo, links públicos e evidências de teste).

O plano foi elaborado com apoio do **Google Gemini** como guia de planejamento e revisão, conforme registrado em [`registro-gemini.md`](registro-gemini.md). Nenhuma resposta do Gemini é apresentada como resultado de teste.

## 2. Objetivo

**Objetivo geral:** consolidar o portfólio em um repositório público, seguro, documentado e colaborativo, pronto para ser avaliado e mantido após a disciplina.

**Objetivos específicos:**

- Padronizar licença, conduta, contribuição e segurança em arquivos de governança;
- Documentar o processo de implantação, a política de segurança, a colaboração e a configuração do ambiente;
- Aplicar controle de versão com branches, Conventional Commits, Pull Requests e revisão obrigatória;
- Automatizar a verificação de links quebrados em Markdown e HTML;
- Manter o GitHub Pages publicado com HTTPS e responsividade;
- Registrar testes, evidências e o uso do Gemini de forma auditável.

## 3. Público-alvo

| Público | Interesse principal |
|---|---|
| Professor e avaliador da disciplina | Evidências de planejamento, segurança, colaboração e testes |
| Colegas de curso | Exemplos de organização de repositório e fluxo de PR |
| Recrutadores e visitantes | Projetos, currículo e contato profissional |
| Colaboradores convidados | Regras claras de contribuição, papéis e revisão |
| Autor (mantenedor) | Manutenção simples, histórico confiável e baixo risco |

## 4. Escopo

**Dentro do escopo:**

- Site estático em HTML, CSS e JavaScript, hospedado no GitHub Pages;
- Documentação em Markdown na pasta `docs/`;
- Arquivos de governança na raiz e em `.github/`;
- Automação de verificação de links com GitHub Actions e Dependabot;
- Configuração de segurança e colaboração na interface do GitHub;
- Apresentação em vídeo e registro do uso do Gemini.

**Fora do escopo:**

- Backend, banco de dados, autenticação de visitantes ou área logada;
- Coleta de dados pessoais, cookies de rastreamento ou analytics;
- Domínio personalizado e recursos pagos;
- Aplicativos móveis nativos;
- Garantia de disponibilidade (SLA) — o projeto é acadêmico e individual.

## 5. Etapas e cronograma

O cronograma abaixo usa semanas relativas ao início da Entrega Final. As datas oficiais devem ser confirmadas com o calendário da disciplina.

| # | Etapa | Atividades principais | Entregável | Prazo | Status |
|---|---|---|---|---|---|
| 1 | Diagnóstico e planejamento | Leitura do repositório, `git status`/`log`/`tag`, definição do escopo e uso do Gemini como guia | Este plano | Semana 1 — **TODO: data** | Concluído (documento) |
| 2 | Governança | `LICENSE`, `.gitignore`, `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `CODEOWNERS` e templates | Arquivos na raiz e em `.github/` | Semana 1 — **TODO: data** | Concluído (branch) |
| 3 | Documentação | Política de segurança, guias de colaboração e configuração, registro do Gemini e checklist de testes | Seis documentos em `docs/` | Semana 2 — **TODO: data** | Concluído (com TODOs de preenchimento) |
| 4 | Segurança do repositório | Ativar secret scanning, push protection, Dependabot alerts e ruleset da `main` | Capturas/evidências em `docs/` | Semana 2 — **TODO: data** | Em andamento (configuração manual pendente) |
| 5 | Automação | Workflow `check-links` e Dependabot semanal | `.github/workflows/check-links.yml`, `.github/dependabot.yml` | Semana 2 — **TODO: data** | Concluído (primeira execução pendente) |
| 6 | Testes | Executar o checklist em navegadores, responsividade, acessibilidade e Lighthouse | [`checklist-testes.md`](checklist-testes.md) preenchido | Semana 3 — **TODO: data** | Pendente |
| 7 | Apresentação | Roteiro, gravação, upload no YouTube e link do Google Docs | Vídeo e links públicos | Semana 3 — **TODO: data** | Pendente |
| 8 | Publicação | Pull Request, revisão, merge na `main`, release/tag `v2.0` e conferência do Pages | Site atualizado e release publicada | Semana 4 — **TODO: data** | Pendente |

> **Observação:** “Concluído (branch)” significa que o arquivo está commitado na branch `feature/portfoliohub-final`, mas ainda não foi mesclado na `main` nem publicado.

## 6. Recursos

| Categoria | Recurso | Situação |
|---|---|---|
| Humano | Rodrigo Angelim da Cunha (autor, mantenedor e revisor) | Disponível |
| Humano | Colaborador convidado | **TODO:** definir nome e papel |
| Técnico | Git e GitHub (plano gratuito) | Em uso |
| Técnico | GitHub Pages (hospedagem estática) | Em uso |
| Técnico | GitHub Actions e Dependabot | Configurados no repositório |
| Técnico | Google Gemini (apoio ao planejamento e revisão) | Em uso — ver registro |
| Material | Currículo e slides em `docs/` | Publicados |
| Material | Prints dos projetos | **TODO:** gerar e adicionar |
| Financeiro | Custo direto | R$ 0,00 (recursos gratuitos) |

## 7. Google Gemini como guia

O Gemini é usado como **apoio**, não como fonte de verdade:

- Ajuda a estruturar o plano, o cronograma, os riscos e os checklists;
- Sugere melhorias de texto, acessibilidade e organização da documentação;
- Apoia a criação de casos de teste e a revisão de segurança;
- Não substitui a validação humana, a execução real dos testes nem a revisão do código;
- Não recebe dados sensíveis, credenciais ou informações pessoais de terceiros.

Cada interação relevante deve ser registrada em [`registro-gemini.md`](registro-gemini.md), com prompt, resumo da resposta, o que foi aplicado, o que foi descartado e o print da conversa. **TODO:** preencher o registro e anexar os prints.

## 8. Métricas de sucesso

| Métrica | Meta | Como medir | Resultado |
|---|---|---|---|
| Links quebrados em `.md` e `.html` | 0 | Workflow `check-links` (lychee) | **TODO:** registrar execução |
| HTML válido e sem erros no console | 0 erros | Validação estática e DevTools | **TODO:** registrar |
| Acessibilidade | Lighthouse Acessibilidade ≥ 90 | Lighthouse no Chrome | **TODO:** registrar |
| Responsividade | Sem overflow em 360 px, 768 px e 1280 px | Teste manual e DevTools | **TODO:** registrar |
| Navegadores | Chrome, Firefox e Edge sem falhas visuais | Teste manual | **TODO:** registrar |
| Documentação | 6/6 documentos de `docs/` completos | Checklist | Parcial — TODOs pendentes |
| Proteção da `main` | Push direto bloqueado | Tentativa controlada de push | **TODO:** registrar |
| Segurança da conta | 2FA ativo | Settings → Password and authentication | Configurado (informado pelo autor) |
| Release | Tag `v2.0` publicada após o merge | GitHub Releases | **TODO:** criar |

> Nenhum resultado deve ser preenchido sem execução real. Campos “TODO” permanecem vazios até a medição.

## 9. Riscos e mitigação

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Push acidental direto na `main` | Média | Alto | Ruleset com PR obrigatório e bloqueio de force-push |
| Vazamento de token ou segredo | Baixa | Alto | `.gitignore`, secret scanning, push protection e tokens de escopo mínimo |
| Link externo instável ou bloqueio de bot | Média | Médio | Tratamento de HTTP 429/999 no lychee e revisão periódica |
| Prints ausentes quebrarem imagens | Alta (atual) | Médio | Marcar como TODO, gerar os prints antes do merge e validar links |
| Dependência de Action desatualizada | Média | Médio | Dependabot semanal e versão fixada por SHA/tag |
| Perda de histórico local | Baixa | Alto | Repositório remoto, tags e cópia local de segurança |
| Prazo curto para vídeo e testes | Média | Alto | Priorizar escopo mínimo e registrar evidências durante a execução |
| Exposição excessiva de dados pessoais (LGPD) | Baixa | Alto | Publicar apenas dados profissionais já públicos e revisar links de contato |
| Cache do GitHub Pages após o merge | Média | Baixo | Aguardar o deploy e testar em janela anônima |

## 10. Comunicação

- **Issues:** solicitações, bugs e tarefas, usando os templates do repositório;
- **Pull Requests:** toda mudança na `main`, com descrição, checklist e revisão do `CODEOWNERS`;
- **README e `docs/`:** fonte oficial de informações do projeto;
- **LinkedIn profissional:** contato público para assuntos externos e relatos de segurança;
- **Canal institucional da disciplina:** **TODO:** confirmar o meio oficial de entrega e comunicação com o professor.

Não serão usados e-mails pessoais, telefone ou endereço neste repositório. A frequência de revisão é sob demanda, com meta de resposta de até 5 dias úteis para issues e relatos de segurança.

## 11. Pós-implantação

- Acompanhar as execuções do workflow `check-links` após cada push na `main`;
- Revisar e mesclar Pull Requests do Dependabot mensalmente;
- Atualizar o checklist de testes a cada mudança visual relevante;
- Criar tags/releases para marcos estáveis (`v1.0` já existe; `v2.0` prevista);
- Manter cópia local do repositório e conferir o histórico com `git log --oneline --graph`;
- Revisar a política de segurança e os acessos de colaboradores a cada semestre;
- Revisar links públicos (Google Docs, YouTube e LinkedIn) antes de cada apresentação;
- **TODO:** definir uma data fixa para a revisão trimestral e registrá-la aqui.

## 12. Referências

- [GitHub Docs — Documentação](https://docs.github.com/pt)
- [GitHub Pages](https://docs.github.com/pt/pages)
- [GitHub Actions](https://docs.github.com/pt/actions)
- [Dependabot](https://docs.github.com/pt/code-security/dependabot)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
- [lychee-action](https://github.com/lycheeverse/lychee-action)
- [Google Gemini](https://gemini.google.com/)
- [Contributor Covenant](https://www.contributor-covenant.org/pt-br/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Lei Geral de Proteção de Dados (Lei nº 13.709/2018)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
