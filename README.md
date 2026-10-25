# PortfolioHUB — Entrega Fina

Repositório pessoal de **Rodrigo Angelim da Cunha** que reúne projetos acadêmicos e pessoais, documentação, governança, segurança e práticas de colaboração. É a **Entrega Final do Bootcamp I** (Ciência da Computação — CEUB), evoluindo o portfólio da Entrega Intermediária para um hub versionado e publicado no GitHub Pages.

> **Autor:** Rodrigo Angelim da Cunha — Ciência da Computação (CEUB)
> **GitHub:** [github.com/rodrigoangel1im](https://github.com/rodrigoangel1im) · **LinkedIn:** [perfil profissional](https://www.linkedin.com/in/rodrigo-angelim-45a137246)
> **Página online:** [rodrigoangel1im.github.io/meu-portifolio](https://rodrigoangel1im.github.io/meu-portifolio)

---

## Índice

- [Visão geral do PortfolioHUB](#visão-geral-do-portfoliohub)
- [Ambiente GitHub e armazenamento](#ambiente-github-e-armazenamento)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Projetos](#projetos)
- [Gestão de usuários e papéis](#gestão-de-usuários-e-papéis)
- [Segurança](#segurança)
- [Fluxo de colaboração](#fluxo-de-colaboração)
- [Documentação](#documentação)
- [Testes e produção](#testes-e-produção)
- [Uso do Google Gemini](#uso-do-google-gemini)
- [Links](#links)
- [Versionamento](#versionamento)
- [Como executar localmente](#como-executar-localmente)
- [Tecnologias](#tecnologias)
- [Licença](#licença)

---

## Visão geral do PortfolioHUB

O PortfolioHUB é a evolução do site pessoal criado na Entrega Intermediária. Além da vitrine de projetos, o repositório agora demonstra o ciclo de vida de um projeto real:

| Pilar | O que foi implementado |
|---|---|
| Vitrine | Site responsivo com projetos, documentos, contato e novas seções de equipe, segurança, documentação e apresentação |
| Governança | Licença MIT, código de conduta, guia de contribuição, `CODEOWNERS` e templates de issue/PR |
| Segurança | Política de segurança, `.gitignore`, automação de dependências e checklist de configuração do GitHub |
| Colaboração | Fluxo issue → branch → commit → Pull Request → revisão → merge, com papéis definidos |
| Automação | Workflow de verificação de links em `.md` e `.html` e Dependabot semanal para GitHub Actions |
| Documentação | Plano de implantação, política de segurança, guias, registro do Gemini e checklist de testes |
| Produção | GitHub Pages com HTTPS, tags de versão e preparação para release |

> **Status:** os arquivos desta entrega estão na branch `feature/portfoliohub-final` e aguardam revisão e merge na `main`. As configurações manuais de segurança e os testes ainda precisam ser concluídos — veja [Testes e produção](#testes-e-produção) e os TODOs ao final deste documento.

## Ambiente GitHub e armazenamento

- **Repositório público:** [`rodrigoangel1im/meu-portifolio`](https://github.com/rodrigoangel1im/meu-portifolio) — o nome do repositório foi mantido para preservar a URL publicada.
- **Branch padrão:** `main`. O trabalho é feito em branches (`feature/`, `fix/`, `docs/`) e integrado por Pull Request.
- **Hospedagem:** GitHub Pages, publicando a raiz do repositório (`main` + `/ (root)`).
- **Armazenamento dos projetos:** cada projeto vive em uma subpasta de [`projetos/`](projetos/), com README próprio e arquivos estáticos independentes. Não há build nem dependências externas: o navegador carrega HTML, CSS e JavaScript diretamente.
- **Documentos:** PDFs e documentos Markdown ficam em [`docs/`](docs/).
- **Histórico:** Git + GitHub, com commits no padrão Conventional Commits e tag estável `v1.0`.
- **Automação:** GitHub Actions (`check-links`) e Dependabot (`.github/dependabot.yml`).
- **Sem backend:** não há banco de dados, login de visitantes, formulários ou coleta de dados.

## Estrutura de pastas

```text
meu-portifolio/
├── .github/
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug.md
│   │   └── feature.md
│   ├── pull_request_template.md
│   └── workflows/
│       └── check-links.yml
├── docs/
│   ├── curriculo.pdf
│   ├── slides-apresentacao.pdf
│   ├── plano-de-implantacao.md
│   ├── politica-de-seguranca.md
│   ├── guia-de-colaboracao.md
│   ├── guia-de-configuracao.md
│   ├── registro-gemini.md
│   ├── checklist-testes.md
│   └── .gitkeep
├── projetos/
│   ├── site-vitrine/
│   │   └── README.md
│   ├── calculadora-imc/
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── lista-de-tarefas/
│       ├── README.md
│       ├── index.html
│       ├── style.css
│       └── script.js
├── index.html
├── style.css
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── .gitignore
└── README.md
```

> **TODO:** os READMEs dos projetos referenciam prints (`docs/print-*.png`) que ainda não existem no repositório. Gerar as imagens e restaurar as referências.

## Projetos

| Projeto | Descrição | Documentação | Online |
|---|---|---|---|
| **Site Vitrine (Portfólio)** | Página pessoal responsiva publicada com GitHub Pages. Versão 1.0. | [README](projetos/site-vitrine/README.md) | [Abrir](https://rodrigoangel1im.github.io/meu-portifolio) |
| **Calculadora IMC** | Calcula o Índice de Massa Corporal com validação de peso e altura. | [README](projetos/calculadora-imc/README.md) | [Abrir](projetos/calculadora-imc/index.html) |
| **Lista de Tarefas** | Gerenciador com adição, conclusão e exclusão, com persistência em `localStorage`. | [README](projetos/lista-de-tarefas/README.md) | [Abrir](projetos/lista-de-tarefas/index.html) |

## Gestão de usuários e papéis

O repositório aplica o princípio do menor privilégio. Os papéis disponíveis no GitHub são:

| Papel | Escopo | Uso neste projeto |
|---|---|---|
| **Read** | Visualizar código, issues e PRs | Avaliadores e visitantes |
| **Triage** | Organizar issues e PRs sem escrever código | Colaborador de triagem |
| **Write** | Criar branches, commits e PRs | Colaborador de código/documentação |
| **Maintain** | Gerenciar o repositório sem acesso a segurança | Co-mantenedor de confiança |
| **Admin** | Configurações, segurança e colaboradores | `@rodrigoangel1im` (Owner) |

**Equipe atual:**

| Pessoa | Papel | Contato |
|---|---|---|
| Rodrigo Angelim da Cunha | Owner / Admin | [GitHub](https://github.com/rodrigoangel1im) |
| Colaborador convidado | **TODO:** definir papel | **TODO:** informar perfil no GitHub |

Como convidar, revisar permissões e remover acessos: veja o [Guia de colaboração](docs/guia-de-colaboracao.md#2-como-convidar-um-colaborador-manual). **TODO:** registrar o colaborador convidado e o convite aceito.

## Segurança

Resumo dos controles adotados (detalhes e status em [`docs/politica-de-seguranca.md`](docs/politica-de-seguranca.md)):

- **2FA** obrigatório para o mantenedor e para colaboradores com escrita;
- **`main` protegida** com Pull Request obrigatório, revisão e bloqueio de force-push — *configuração manual pendente no GitHub*;
- **Secret scanning e push protection** para impedir o vazamento de credenciais — *configuração manual pendente*;
- **Dependabot** semanal para GitHub Actions, já configurado no repositório;
- **CODEOWNERS** para revisão obrigatória do proprietário;
- **LGPD:** apenas dados profissionais já públicos; sem telefone, endereço ou documentos pessoais;
- **Vulnerabilidades:** reporte de forma privada conforme [`SECURITY.md`](SECURITY.md).

> **TODO:** ativar secret scanning, push protection e Dependabot alerts em *Settings → Code security*, e criar o ruleset de proteção da `main`.

## Fluxo de colaboração

O fluxo completo está em [`CONTRIBUTING.md`](CONTRIBUTING.md), com papéis em [`docs/guia-de-colaboracao.md`](docs/guia-de-colaboracao.md). Resumo:

1. Abrir ou localizar uma **issue** (templates de [bug](.github/ISSUE_TEMPLATE/bug.md) e [feature](.github/ISSUE_TEMPLATE/feature.md));
2. Criar uma **branch** a partir da `main` (`feature/`, `fix/`, `docs/`);
3. Fazer **commits pequenos** no padrão Conventional Commits;
4. Abrir um **Pull Request** e referenciar a issue com `Closes #numero`;
5. Aguardar **revisão** do `CODEOWNERS` e o check `Verificação de links`;
6. **Merge** feito pelo mantenedor — nunca por push direto na `main`.

Todos os participantes devem seguir o [Código de Conduta](CODE_OF_CONDUCT.md).

## Documentação

| Documento | Conteúdo |
|---|---|
| [Plano de implantação](docs/plano-de-implantacao.md) | Objetivos, público, cronograma, recursos, métricas, riscos e pós-implantação |
| [Política de segurança](docs/politica-de-seguranca.md) | 2FA, menor privilégio, proteção da `main`, secret scanning, Dependabot, LGPD e tokens |
| [Guia de colaboração](docs/guia-de-colaboracao.md) | Papéis, convites, fluxo de PR, Issues, Projects e commits |
| [Guia de configuração](docs/guia-de-configuracao.md) | Git, SSH/PAT, clone, branch, PR e ativação do GitHub Pages |
| [Registro do Gemini](docs/registro-gemini.md) | Modelo para registrar prompts, respostas, aplicação e prints |
| [Checklist de testes](docs/checklist-testes.md) | Tabela de testes de links, responsividade, navegadores, acessibilidade e Lighthouse |
| [Segurança (SECURITY.md)](SECURITY.md) | Como reportar vulnerabilidades, versões suportadas e prazos |
| [Contribuição (CONTRIBUTING.md)](CONTRIBUTING.md) | Fluxo, padrões e checklist de PR |
| [Código de conduta](CODE_OF_CONDUCT.md) | Regras de convivência e aplicação |
| [Licença MIT](LICENSE) | Termos de uso |

**Materiais em PDF:** [currículo](docs/curriculo.pdf) e [slides de apresentação](docs/slides-apresentacao.pdf).

## Testes e produção

- **Checklist oficial:** [`docs/checklist-testes.md`](docs/checklist-testes.md) — links, responsividade, janela anônima, navegadores, acessibilidade, Lighthouse, HTML válido e bloqueio de push na `main`.
- **Automação:** o workflow [`.github/workflows/check-links.yml`](.github/workflows/check-links.yml) verifica links quebrados em `.md` e `.html` a cada push e Pull Request na `main`, usando `lychee` com permissões mínimas (`contents: read`).
- **Produção:** GitHub Pages em <https://rodrigoangel1im.github.io/meu-portifolio>, com HTTPS (verificado em 25/10/2026).
- **Resultados:** ainda **não registrados**. **TODO:** executar a bateria de testes e preencher as colunas “Resultado” e “Data” do checklist, anexando evidências.
- **Release:** **TODO:** após o merge, criar a tag/release `v2.0` com as notas da Entrega Final.

## Uso do Google Gemini

O **Google Gemini** foi utilizado como **guia de apoio** ao planejamento da entrega: estruturação do plano, revisão de textos, sugestões de testes e checagem de boas práticas de segurança e acessibilidade. Ele não substitui a validação humana, não executou testes e não é fonte de verdade para links ou comandos.

Todas as interações relevantes devem ser registradas em [`docs/registro-gemini.md`](docs/registro-gemini.md), com prompt, resumo, decisão de aplicar/descartar e print. **TODO:** preencher o registro e anexar os prints — nenhuma conversa foi inventada.

## Links

| Recurso | Link |
|---|---|
| Página publicada (GitHub Pages) | <https://rodrigoangel1im.github.io/meu-portifolio> |
| Repositório no GitHub | <https://github.com/rodrigoangel1im/meu-portifolio> |
| Issues | <https://github.com/rodrigoangel1im/meu-portifolio/issues> |
| Pull Requests | <https://github.com/rodrigoangel1im/meu-portifolio/pulls> |
| Plano de implantação (Google Docs) | **TODO:** inserir o link público do documento |
| Vídeo de apresentação (YouTube) | **TODO:** inserir o link público do vídeo |
| GitHub Projects | **TODO:** criar o projeto e inserir o link público |

## Versionamento

| Tag | Descrição | Data |
|---|---|---|
| `v1.0` | Primeira versão estável do portfólio (Entrega Intermediária) | 17/10/2026 |

- Apenas a tag `v1.0` existe hoje (`git tag`).
- **TODO:** após o merge desta entrega, criar a release/tag `v2.0` (Entrega Final) e atualizar esta tabela.
- Histórico completo: `git log --oneline --graph --all`.
- Padrão de mensagens: [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`).

## Como executar localmente

```bash
git clone https://github.com/rodrigoangel1im/meu-portifolio.git
cd meu-portifolio

# Opção 1: abrir direto no navegador
start index.html            # Windows
open index.html             # macOS
xdg-open index.html         # Linux

# Opção 2: servidor local (recomendado)
py -m http.server 8000      # Windows com Python
python3 -m http.server 8000 # macOS/Linux
# Acesse http://localhost:8000
```

Cada projeto em `projetos/` também pode ser aberto diretamente pelo respectivo `index.html`. Não há etapa de build.

## Tecnologias

- **HTML5, CSS3 e JavaScript (ES6)** — sem frameworks e sem dependências de runtime;
- **Git e GitHub** — versionamento, branches, tags e Pull Requests;
- **GitHub Pages** — hospedagem estática com HTTPS;
- **GitHub Actions** — verificação de links com `lychee`;
- **Dependabot** — atualização semanal das Actions;
- **Google Gemini** — apoio ao planejamento e à revisão (ver [registro](docs/registro-gemini.md)).

## Licença

Este projeto está sob a licença [MIT](LICENSE) — uso livre para fins acadêmicos, com manutenção do aviso de copyright.

---

**Autor:** Rodrigo Angelim da Cunha · **Contato profissional:** [GitHub](https://github.com/rodrigoangel1im) · [LinkedIn](https://www.linkedin.com/in/rodrigo-angelim-45a137246)
