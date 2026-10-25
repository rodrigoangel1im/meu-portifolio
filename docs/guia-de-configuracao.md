# Guia de Configuração — PortfolioHUB

Passo a passo para configurar o ambiente local, autenticar no GitHub, trabalhar com branches/Pull Requests e ativar o GitHub Pages.

> **Observação sobre este ambiente:** nesta máquina, o Git está instalado em `C:\Program Files\Git\cmd\git.exe` e não estava no `PATH`; o GitHub CLI (`gh`) e o Python não estavam instalados. Os comandos abaixo assumem uma instalação padrão — ajuste conforme o seu sistema.

## 1. Pré-requisitos

| Ferramenta | Versão mínima | Como verificar |
|---|---|---|
| Git | 2.30+ | `git --version` |
| Navegador moderno | Chrome, Edge, Firefox ou Safari atualizado | — |
| Conta no GitHub | Com 2FA ativo | github.com/settings/security |
| Editor | VS Code (recomendado) | — |
| Python (opcional) | 3.8+ | `python --version` ou `py --version` |

## 2. Configurar o Git

### 2.1 Identidade

Use seu nome e um e-mail associado à conta do GitHub. Para não expor e-mail pessoal, prefira o endereço **noreply**:

```bash
git config --global user.name "Rodrigo Angelim da Cunha"
git config --global user.email "rodrigoangel1im@users.noreply.github.com"
```

Confira:

```bash
git config --global --list
```

Para configurar apenas neste repositório, remova `--global` e execute dentro da pasta.

### 2.2 Branch padrão e finalização de linha

```bash
git config --global init.defaultBranch main
git config --global core.autocrlf true   # Windows
```

### 2.3 Autenticação por SSH (recomendada)

```bash
# 1. Gerar a chave (substitua pelo seu e-mail noreply)
ssh-keygen -t ed25519 -C "rodrigoangel1im@users.noreply.github.com"

# 2. Iniciar o agente e adicionar a chave
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Copiar a chave pública
cat ~/.ssh/id_ed25519.pub
```

No GitHub: **Settings → SSH and GPG keys → New SSH key**, cole a chave pública, dê um nome (ex.: `notebook-ceub`) e salve.

Teste:

```bash
ssh -T git@github.com
```

Depois, use a URL SSH do repositório:

```bash
git clone git@github.com:rodrigoangel1im/meu-portifolio.git
```

### 2.4 Alternativa: token de acesso pessoal (PAT)

Se preferir HTTPS:

1. GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. **Generate new token** com:
   - *Repository access:* apenas `meu-portifolio`;
   - *Permissions:* `Contents: Read and write` e `Pull requests: Read and write`;
   - *Expiration:* o menor prazo viável.
3. Copie o token uma única vez e use como senha no `git push` (ou deixe o Git Credential Manager armazenar).
4. **Nunca** faça commit do token, não o cole em issues e revogue-o quando não precisar mais.

> **Atenção:** um PAT clássico com escopo amplo dá acesso a todos os repositórios. Prefira fine-grained e o menor escopo possível.

## 3. Clonar e trabalhar no projeto

```bash
git clone https://github.com/rodrigoangel1im/meu-portifolio.git
cd meu-portifolio

# Verificar estado
git status
git log --oneline -10
git tag

# Criar uma branch a partir da main atualizada
git switch main
git pull origin main
git switch -c feature/minha-melhoria
```

Abra a página:

```bash
start index.html             # Windows
open index.html              # macOS
xdg-open index.html          # Linux
```

Ou sirva por HTTP (recomendado para testar caminhos):

```bash
py -m http.server 8000       # Windows com Python
python3 -m http.server 8000  # macOS/Linux
# Acesse http://localhost:8000
```

## 4. Commit, push e Pull Request

```bash
git add arquivo1.html arquivo2.md
git commit -m "feat: descreve a mudança"
git push -u origin feature/minha-melhoria
```

1. Abra o repositório no GitHub e clique em **Compare & pull request**.
2. Confirme a base `main` e a compare `feature/minha-melhoria`.
3. Preencha o template (descrição, `Closes #numero`, tipo, checklists).
4. Solicite revisão ao `@rodrigoangel1im`.
5. Aguarde o workflow **Verificação de links** e a aprovação.
6. Após o merge, apague a branch remota.

### Se o push direto na `main` for bloqueado

Isso é esperado: a `main` é protegida. Crie uma branch, envie e abra um PR. Nunca use `--force` para contornar a proteção.

## 5. Ativar o GitHub Pages

1. Acesse **Settings → Pages**.
2. Em *Build and deployment → Source*, escolha **Deploy from a branch**.
3. Selecione a branch **`main`** e a pasta **`/ (root)`**.
4. Clique em **Save**.
5. Aguarde o deploy (aba **Actions** ou a mensagem “Your site is live at…”).
6. Marque **Enforce HTTPS** quando a opção estiver disponível.
7. Acesse <https://rodrigoangel1im.github.io/meu-portifolio> e teste em janela anônima.

**Status atual:** o site responde em HTTPS (verificado em 25/10/2026). **TODO:** anexar print de *Settings → Pages* com “Enforce HTTPS” marcado.

### Solução de problemas

| Sintoma | Causa provável | Solução |
|---|---|---|
| Erro 404 no Pages | Branch/pasta errada ou deploy em andamento | Conferir `main` + `/ (root)` e aguardar o workflow `pages build and deployment` |
| CSS não atualiza | Cache do navegador/CDN | Testar em janela anônima e aguardar alguns minutos |
| `git` não reconhecido no Windows | Git fora do `PATH` | Reinstalar marcando “Git from the command line” ou adicionar `C:\Program Files\Git\cmd` ao `PATH` |
| `Permission denied (publickey)` | Chave SSH não adicionada | Repetir `ssh-add` e conferir a chave no GitHub |
| Push rejeitado na `main` | Proteção de branch | Criar branch e abrir PR |
| Workflow de links falha | Link externo indisponível | Ver o log do lychee e corrigir ou justificar a exclusão |

## 6. Checklist de configuração

- [ ] `git config user.name` e `user.email` definidos (noreply);
- [ ] 2FA ativo na conta;
- [ ] SSH ou PAT de escopo mínimo configurado;
- [ ] Repositório clonado e `git status` limpo;
- [ ] Branch de trabalho criada a partir da `main`;
- [ ] Push e PR funcionando;
- [ ] GitHub Pages publicado em `main` + `/ (root)`;
- [ ] “Enforce HTTPS” ativo;
- [ ] Workflow `check-links` executando em PRs.
