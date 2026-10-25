# Como Contribuir

Obrigado pelo interesse em contribuir com o **PortfolioHUB**! Este documento descreve o fluxo de trabalho, as convenções e os critérios de revisão do repositório.

Antes de contribuir, leia o [Código de Conduta](CODE_OF_CONDUCT.md) e a [Política de Segurança](SECURITY.md).

## Índice

- [Como rodar localmente](#como-rodar-localmente)
- [Fluxo de contribuição](#fluxo-de-contribuição)
- [Padrão de branches](#padrão-de-branches)
- [Convenção de commits](#convenção-de-commits)
- [Checklist do Pull Request](#checklist-do-pull-request)
- [Estilo de código e acessibilidade](#estilo-de-código-e-acessibilidade)
- [Segurança](#segurança)
- [Dúvidas](#dúvidas)

## Como rodar localmente

Pré-requisitos: [Git](https://git-scm.com/) e um navegador moderno. Python é opcional, apenas para servir a página por HTTP.

```bash
# 1. Clone o repositório
git clone https://github.com/rodrigoangel1im/meu-portifolio.git
cd meu-portifolio

# 2. Crie uma branch a partir da main atualizada
git switch main
git pull origin main
git switch -c feature/minha-melhoria

# 3. Abra a página
start index.html            # Windows
open index.html             # macOS
xdg-open index.html         # Linux

# Alternativa: servidor local (recomendado para testar caminhos e links)
py -m http.server 8000      # Windows (Python instalado)
python3 -m http.server 8000 # macOS/Linux
# Acesse http://localhost:8000
```

No VS Code, também é possível usar a extensão **Live Server**. O projeto não possui etapa de build: os arquivos são servidos como estão.

## Fluxo de contribuição

1. **Issue primeiro:** verifique se já existe uma issue aberta. Se não houver, abra uma usando os templates de [bug](.github/ISSUE_TEMPLATE/bug.md) ou [feature](.github/ISSUE_TEMPLATE/feature.md).
2. **Branch:** crie uma branch descritiva a partir de `main` (nunca trabalhe diretamente nela).
3. **Commits pequenos:** um assunto por commit, seguindo [Conventional Commits](https://www.conventionalcommits.org/pt-br/).
4. **Pull Request:** abra o PR usando o [template](.github/pull_request_template.md), referenciando a issue com `Closes #numero`.
5. **Revisão:** aguarde a revisão do `CODEOWNERS` (`@rodrigoangel1im`). Ajustes podem ser solicitados.
6. **Merge:** o merge é feito pelo mantenedor após aprovação, testes verdes e checklist completo. **Não** faça force-push nem merge por conta própria.

> A branch `main` é protegida. Pull Requests exigem revisão e a verificação automática de links precisa passar.

## Padrão de branches

| Prefixo | Uso | Exemplo |
|---|---|---|
| `feature/` | Nova funcionalidade ou seção | `feature/secao-depoimentos` |
| `fix/` | Correção de bug | `fix/menu-mobile` |
| `docs/` | Documentação | `docs/guia-de-testes` |
| `chore/` | Manutenção, configuração, dependências | `chore/atualiza-dependabot` |
| `ci/` | Alterações em workflows | `ci/verifica-links` |

Use letras minúsculas, hífen como separador e nomes curtos e objetivos.

## Convenção de commits

Formato: `tipo(escopo opcional): descrição no imperativo`

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade, seção ou conteúdo visível |
| `fix` | Correção de comportamento ou link quebrado |
| `docs` | Apenas documentação |
| `style` | Formatação/CSS sem mudança de comportamento |
| `refactor` | Reestruturação sem mudar comportamento |
| `test` | Testes |
| `chore` | Manutenção, configuração, licença |
| `ci` | Workflows e automações |

Exemplos:

```text
feat: adiciona seção de apresentação
fix: corrige link do currículo no rodapé
docs: atualiza guia de configuração
ci: fixa versão da action de links
```

Evite mensagens genéricas como `update` ou `ajustes`. Commits devem passar mensagens claras no `git log`.

## Checklist do Pull Request

- [ ] Descrição clara do que mudou e por quê
- [ ] Issue relacionada citada (`Closes #numero`)
- [ ] Branch atualizada com a `main`
- [ ] Commits no padrão Conventional Commits
- [ ] Links internos e externos testados
- [ ] Layout verificado em desktop, tablet e celular
- [ ] Navegação por teclado e textos alternativos revisados
- [ ] Nenhum segredo, token, senha ou dado pessoal incluído
- [ ] Documentação atualizada quando necessário
- [ ] Workflow de verificação de links passando

## Estilo de código e acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`) e headings em ordem (`h1` → `h2` → `h3`).
- Imagens sempre com `alt` descritivo; imagens decorativas com `alt=""`.
- Manter as variáveis CSS e o tema escuro definidos em `style.css`; não introduza cores fora da paleta sem justificativa.
- JavaScript vanilla, sem dependências externas, com nomes claros e sem expor dados sensíveis.
- Todo link externo aberto em nova aba deve usar `rel="noopener noreferrer"`.
- Textos em português do Brasil, com linguagem inclusiva e sem dados pessoais de terceiros.

## Segurança

- Nunca faça commit de `.env`, tokens, chaves SSH ou credenciais.
- Reporte vulnerabilidades de forma privada, conforme a [Política de Segurança](SECURITY.md).
- Não inclua e-mails pessoais, telefone, endereço ou documentos de terceiros.
- Desconfie de links encurtados e de dependências não revisadas.

## Dúvidas

Abra uma issue com a label `question` ou utilize o contato profissional público indicado no [README](README.md).
