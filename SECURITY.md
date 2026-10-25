# Política de Segurança

Obrigado por ajudar a manter o **PortfolioHUB** seguro. Este repositório é um site estático (HTML, CSS e JavaScript), publicado com GitHub Pages, sem backend, banco de dados ou coleta de dados de visitantes.

## Versões suportadas

| Versão | Suporte |
|---|---|
| `main` (última versão publicada) | Suportada |
| `v1.0` | Suportada |
| Branches de trabalho (`feature/*`, `fix/*`, `docs/*`) | Não publicadas; correções entram via Pull Request na `main` |

## Como reportar uma vulnerabilidade

1. **Canal preferencial (privado):** use o botão **Report a vulnerability** na aba _Security_ do repositório:
   <https://github.com/rodrigoangel1im/meu-portifolio/security/advisories/new>
2. **Contato profissional público:** [LinkedIn de Rodrigo Angelim](https://www.linkedin.com/in/rodrigo-angelim-45a137246).

Não publique detalhes exploráveis em Issues, Discussions ou Pull Requests. Se o canal privado não estiver disponível, envie uma mensagem pelo LinkedIn informando que deseja reportar uma vulnerabilidade e aguarde orientação.

### O que incluir no relato

- Descrição da falha e impacto potencial;
- Passos para reproduzir (URL, navegador, payload);
- Evidências (prints ou trechos de código) **sem dados pessoais de terceiros**;
- Se possível, sugestão de correção.

## Prazo de resposta (meta)

| Etapa | Prazo alvo |
|---|---|
| Confirmação de recebimento | até 5 dias úteis |
| Avaliação inicial e classificação | até 10 dias úteis |
| Correção de falha crítica/alta | até 30 dias |
| Correção de falha média/baixa | próximo ciclo de manutenção |

> Os prazos são metas de boa-fé para um projeto acadêmico individual e não constituem SLA contratual.

## Escopo

**Em escopo:** XSS ou injeção via DOM nos scripts, redirecionamentos e links maliciosos, exposição de segredos, dependências vulneráveis de GitHub Actions, configuração incorreta do GitHub Pages e dos controles do repositório.

**Fora de escopo:** engenharia social, ataques de negação de serviço, vulnerabilidades em serviços de terceiros (GitHub, LinkedIn, YouTube, Google) e conteúdo de PDFs sem impacto de segurança.

## Boas práticas adotadas

- Autenticação em dois fatores (2FA) na conta do mantenedor;
- Princípio do menor privilégio e papéis definidos para colaboradores;
- `main` protegida: Pull Request obrigatório, revisão e bloqueio de force-push;
- Secret scanning e push protection configurados no GitHub (status em [política de segurança](docs/politica-de-seguranca.md));
- Dependabot para GitHub Actions, com verificação semanal (`.github/dependabot.yml`);
- `CODEOWNERS` e templates de issue e Pull Request;
- Nenhum segredo, token, senha ou dado pessoal sensível versionado;
- Publicação apenas de dados profissionais já públicos, em linha com a LGPD.

## Divulgação responsável

Pedimos que o relato seja mantido em sigilo até a correção e a publicação de um aviso, quando aplicável. Créditos serão dados a quem reportar, se assim desejar.
