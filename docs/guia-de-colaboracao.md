# Guia de Colaboração — PortfolioHUB

Este guia explica papéis, convites, fluxo de Pull Request, uso de Issues/Projects e convenções de commit. Ele complementa o [`CONTRIBUTING.md`](../CONTRIBUTING.md) e o [Código de Conduta](../CODE_OF_CONDUCT.md).

## 1. Papéis e permissões

O GitHub oferece papéis por repositório. Aplique o **menor privilégio** necessário.

| Papel | Pode fazer | Quando usar |
|---|---|---|
| **Read** | Ver código, issues, PRs e releases; abrir issues | Avaliadores, visitantes e pessoas que só precisam acompanhar |
| **Triage** | Gerenciar issues e PRs (labels, assignees, fechar/reabrir) sem escrever código | Colaborador que organiza demandas e faz triagem |
| **Write** | Criar branches, commits, push e abrir PRs | Colaborador que contribui com código ou documentação |
| **Maintain** | Gerenciar o repositório sem acesso a segurança e exclusão | Co-mantenedor de confiança |
| **Admin** | Configurações, segurança, colaboradores e exclusão | Apenas o proprietário (`@rodrigoangel1im`) |

**Regras:**

- `Admin` é exclusivo do proprietário;
- `Write` exige 2FA ativo e concordância com o Código de Conduta;
- ninguém faz merge direto na `main`: todo merge passa por PR e revisão;
- permissões são revisadas a cada semestre e removidas quando a colaboração termina.

> **TODO:** registrar aqui o nome e o papel do colaborador convidado, quando houver. O card correspondente em `index.html` também está marcado como TODO.

## 2. Como convidar um colaborador (manual)

1. Acesse o repositório → **Settings** → **Collaborators** (ou *Access*).
2. Clique em **Add people** e busque pelo usuário do GitHub (não por e-mail).
3. Escolha o papel (`Read`, `Triage`, `Write`, `Maintain` ou `Admin`).
4. Envie o convite e aguarde a aceitação.
5. Confirme que a pessoa ativou 2FA antes de conceder `Write`.
6. Registre o convite e o papel no histórico de decisões do projeto (issue ou Project).

Para organizações, o convite pode ser feito por *Teams*; neste projeto não há organização, apenas o repositório pessoal.

## 3. Fluxo de Pull Request

```text
Issue → branch → commits → push → Pull Request → revisão → checks verdes → merge → exclusão da branch
```

1. **Abra ou localize a issue.** Descreva o problema ou a melhoria.
2. **Atualize a `main`** e crie a branch:
   ```bash
   git switch main
   git pull origin main
   git switch -c feature/nome-curto
   ```
3. **Faça commits pequenos** no padrão Conventional Commits.
4. **Envie a branch:**
   ```bash
   git push -u origin feature/nome-curto
   ```
5. **Abra o PR** contra a `main` usando o template. Referencie a issue com `Closes #numero`.
6. **Aguarde a revisão** do `CODEOWNERS` e o workflow `check-links`.
7. **Ajuste** o que for solicitado com novos commits (não reescreva o histórico de um PR em revisão).
8. **Merge** feito pelo mantenedor, preferencialmente com *Squash and merge* para manter a `main` limpa.
9. **Exclua a branch** após o merge.

### Responsabilidades na revisão

| Papel | Responsabilidade |
|---|---|
| Autor | Explicar a mudança, testar, responder comentários e manter o PR pequeno |
| Revisor | Verificar clareza, segurança, acessibilidade, links e testes; aprovar ou solicitar ajustes |
| Mantenedor | Garantir checks verdes, checklist completo e merge seguro |

## 4. Issues

Use os templates disponíveis:

- **Bug:** [`bug.md`](../.github/ISSUE_TEMPLATE/bug.md);
- **Feature:** [`feature.md`](../.github/ISSUE_TEMPLATE/feature.md).

Boas práticas:

- Título objetivo (`bug: menu não abre no Safari`; `feat: seção de depoimentos`);
- Uma issue por assunto;
- Contexto, passos para reproduzir e critérios de aceite;
- Labels (`bug`, `enhancement`, `documentation`, `security`, `question`);
- Sem dados pessoais, senhas ou tokens.

## 5. Projects (manual)

O GitHub Projects pode organizar o trabalho em um quadro Kanban.

1. Acesse a aba **Projects** do repositório ou do perfil.
2. Crie um projeto chamado `PortfolioHUB — Entrega Final`.
3. Adicione as colunas: **Backlog**, **A fazer**, **Em andamento**, **Em revisão**, **Concluído**.
4. Crie os itens a partir das issues e dos TODOs deste repositório.
5. Vincule o projeto ao repositório em *Projects → Link project*.

> **TODO:** criar o Project e inserir o link público na seção “Links” do [`README.md`](../README.md).

## 6. Convenção de commits

Formato: `tipo(escopo opcional): descrição no imperativo`

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade, seção ou conteúdo visível |
| `fix` | Correção de bug ou link quebrado |
| `docs` | Documentação |
| `style` | Formatação/CSS sem mudança de comportamento |
| `refactor` | Reestruturação sem mudança de comportamento |
| `test` | Testes |
| `chore` | Manutenção, configuração, licença |
| `ci` | Workflows e automações |

Exemplos:

```text
feat: adiciona seção de equipe
docs: atualiza guia de configuração
ci: fixa versão da action de links
```

## 7. Boas práticas de comunicação

- Seja objetivo e respeitoso; critique a mudança, não a pessoa.
- Prefira discussões públicas em Issues/PRs para manter histórico.
- Use o canal privado apenas para vulnerabilidades ou assuntos sensíveis.
- Responda em português do Brasil.
- Não compartilhe prints com dados pessoais de terceiros.
