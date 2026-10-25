# Política de Segurança — PortfolioHUB

| Campo | Valor |
|---|---|
| Projeto | PortfolioHUB |
| Responsável | Rodrigo Angelim da Cunha (`@rodrigoangel1im`) |
| Versão | 1.0 |
| Última atualização | 25/10/2026 |
| Documento relacionado | [`SECURITY.md`](../SECURITY.md) |

Este documento descreve os controles de segurança do repositório e classifica cada item como **Configurado no repositório** (evidência em arquivo versionado) ou **A configurar em Settings (manual)** (depende da interface do GitHub e não pode ser garantido por código).

> **Importante:** a configuração manual deve ser conferida na conta `rodrigoangel1im` e no repositório `meu-portifolio`. Itens manuais não são considerados concluídos até que alguém os verifique na interface.

## 1. Resumo dos controles

| # | Controle | Status | Onde fica / evidência |
|---|---|---|---|
| 1 | Autenticação em dois fatores (2FA) | Configurado (conta) — informado pelo autor | GitHub → Settings → Password and authentication |
| 2 | Princípio do menor privilégio e papéis | Configurado (documentado) | [`guia-de-colaboracao.md`](guia-de-colaboracao.md) |
| 3 | `main` protegida: PR obrigatório | A configurar em Settings (manual) | Settings → Rules → Rulesets (ou Branches) |
| 4 | `main` protegida: force-push bloqueado | A configurar em Settings (manual) | Settings → Rules → Rulesets |
| 5 | Revisão obrigatória do `CODEOWNERS` | Parcial — arquivo no repositório; exigência é manual | [`.github/CODEOWNERS`](../.github/CODEOWNERS) + Rulesets |
| 6 | Secret scanning | A configurar em Settings (manual) | Settings → Code security |
| 7 | Push protection | A configurar em Settings (manual) | Settings → Code security |
| 8 | Dependabot alerts (alertas de vulnerabilidade) | A configurar em Settings (manual) | Settings → Code security |
| 9 | Dependabot version updates (atualização semanal) | Configurado no repositório | [`.github/dependabot.yml`](../.github/dependabot.yml) |
| 10 | Verificação automática de links | Configurado no repositório | [`.github/workflows/check-links.yml`](../.github/workflows/check-links.yml) |
| 11 | Canal privado de relato de vulnerabilidade | Configurado (documentado); advisories depende do GitHub | [`SECURITY.md`](../SECURITY.md) |
| 12 | LGPD e minimização de dados | Parcial — revisão de contato pendente | Seção 9 deste documento |
| 13 | Gestão de tokens e chaves SSH | Configurado (documentado) | [`guia-de-configuracao.md`](guia-de-configuracao.md) |
| 14 | `.gitignore` para segredos e temporários | Configurado no repositório | [`.gitignore`](../.gitignore) |

## 2. Autenticação em dois fatores (2FA)

- **Status:** configurado na conta do mantenedor (informado pelo autor).
- **Política:** todos os colaboradores com permissão **Write**, **Maintain** ou **Admin** devem manter 2FA ativo.
- **Verificação:** GitHub → *Settings* → *Password and authentication* → *Two-factor authentication*.
- **Recomendação:** usar aplicativo autenticador ou chave de segurança física; guardar os códigos de recuperação em local seguro e offline.

> **TODO:** confirmar a data de ativação do 2FA e registrar uma captura (sem expor códigos) como evidência para a entrega.

## 3. Princípio do menor privilégio

- Conceder apenas o papel necessário (ver tabela de papéis em [`guia-de-colaboracao.md`](guia-de-colaboracao.md)).
- `Admin` restrito ao proprietário; colaboradores recebem `Write` somente quando forem contribuir com código.
- Revisar acessos a cada semestre e remover permissões de quem não participa mais.
- Não compartilhar credenciais: cada pessoa usa a própria conta.

**Status:** política documentada; a concessão de acessos é uma ação manual em *Settings → Collaborators*.

## 4. Proteção da branch `main`

### 4.1 Regras obrigatórias

- Pull Request obrigatório antes do merge;
- pelo menos 1 aprovação de revisão;
- revisão do `CODEOWNERS` exigida;
- conversas resolvidas antes do merge;
- status check `Links em .md e .html` (workflow `check-links`) obrigatório;
- force-push bloqueado;
- exclusão da branch bloqueada;
- (opcional) histórico linear e assinatura de commits.

### 4.2 Como configurar (manual)

1. Acesse **Settings → Rules → Rulesets → New ruleset → New branch ruleset**.
2. Nome sugerido: `protecao-main`.
3. Em *Target branches*, adicione `main`.
4. Ative:
   - *Require a pull request before merging* (1 aprovação);
   - *Require review from Code Owners*;
   - *Require status checks to pass* e selecione `Links em .md e .html`;
   - *Block force pushes*;
   - *Restrict deletions*.
5. Salve e teste com uma tentativa controlada de push direto na `main` (deve ser rejeitada).

**Status:** a configurar em Settings (manual). O repositório já contém o `CODEOWNERS` e o workflow necessários.

> **TODO:** anexar print do ruleset ativo e do push direto bloqueado em [`checklist-testes.md`](checklist-testes.md).

## 5. Secret scanning e push protection

- **Objetivo:** impedir que tokens, chaves e senhas cheguem ao histórico.
- **Secret scanning:** detecta segredos já enviados e notifica o mantenedor.
- **Push protection:** bloqueia o push que contenha um segredo reconhecido.
- **Status:** a configurar em Settings (manual), em **Settings → Code security**.
- **Complementos já no repositório:** `.gitignore` cobre `.env`, chaves e arquivos temporários; a política de contribuição proíbe segredos.

### Se um segredo for exposto

1. **Revogar imediatamente** o token/chave no serviço de origem.
2. Gerar um novo segredo e armazená-lo fora do repositório.
3. Remover o segredo do arquivo e commitar a correção.
4. Avaliar a limpeza do histórico (com cautela, pois reescreve commits) e registrar o incidente.
5. Nunca usar force-push na `main` para “esconder” o ocorrido sem orientação.

## 6. Dependabot

- **Version updates:** configurado em [`.github/dependabot.yml`](../.github/dependabot.yml), ecossistema `github-actions`, semanal (segunda-feira, 09:00, America/Sao_Paulo).
- **Alerts:** a configurar em Settings (manual) → *Code security* → *Dependabot alerts*.
- **Fluxo:** cada PR do Dependabot passa pelo workflow de links e pela revisão do mantenedor antes do merge.
- **Limite:** o projeto não possui dependências npm; o monitoramento cobre as Actions usadas no workflow.

## 7. CODEOWNERS

- Arquivo: [`.github/CODEOWNERS`](../.github/CODEOWNERS) com `* @rodrigoangel1im`.
- Garante que o proprietário seja solicitado para revisar qualquer alteração.
- **Atenção:** o `CODEOWNERS` só bloqueia o merge se a regra *Require review from Code Owners* estiver ativa no ruleset.

## 8. Tokens, chaves SSH e credenciais

- Preferir **SSH** com chave `ed25519` e passphrase, ou **fine-grained PAT** com escopo mínimo (`Contents: Read and write` apenas no repositório necessário).
- Nunca colar tokens em arquivos, Issues, prints ou mensagens de commit.
- Usar o gerenciador de credenciais do Git/Windows e não salvar tokens em texto puro.
- Revogar tokens antigos e remover chaves SSH não utilizadas periodicamente.
- Passo a passo em [`guia-de-configuracao.md`](guia-de-configuracao.md).

## 9. LGPD e privacidade

O site é estático e **não coleta dados de visitantes** (sem formulários, cookies de rastreamento ou analytics). Ainda assim:

- Publicar apenas dados profissionais já públicos: nome, curso, GitHub, LinkedIn e currículo;
- Não publicar CPF, RG, endereço, telefone, data de nascimento ou documentos pessoais;
- Não publicar dados de terceiros sem consentimento;
- Revisar PDFs e prints antes de commitar (metadados e informações visíveis);
- Atender a pedidos de remoção de dados pelo contato profissional.

**Status:** parcial. A página mantém um link `mailto:` para um e-mail que já era público antes desta entrega. **TODO:** decidir se o link permanece ou se será substituído apenas pelo LinkedIn, aplicando o princípio da minimização de dados.

## 10. Resposta a incidentes

| Etapa | Ação | Responsável |
|---|---|---|
| 1. Detecção | Alerta do secret scanning, Dependabot ou relato privado | Mantenedor |
| 2. Contenção | Revogar credencial, remover conteúdo ou reverter commit | Mantenedor |
| 3. Correção | Aplicar patch via Pull Request e validar o workflow | Mantenedor |
| 4. Registro | Documentar causa, impacto e ação tomada (sem expor segredos) | Mantenedor |
| 5. Comunicação | Informar afetados e, se aplicável, a comunidade | Mantenedor |

## 11. Checklist de verificação manual

- [ ] 2FA ativo na conta e nos colaboradores com escrita;
- [ ] ruleset `protecao-main` ativo com PR, revisão, status check e force-push bloqueado;
- [ ] secret scanning ativo;
- [ ] push protection ativo;
- [ ] Dependabot alerts ativo;
- [ ] colaboradores com o menor papel necessário;
- [ ] GitHub Pages com “Enforce HTTPS” marcado;
- [ ] nenhum segredo no histórico (`git log -p` e alertas);
- [ ] links de contato revisados sob a ótica da LGPD.
