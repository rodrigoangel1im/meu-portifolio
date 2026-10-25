# Registro de Uso do Google Gemini

Este documento registra, de forma auditável, como o **Google Gemini** foi utilizado como guia na Entrega Final do PortfolioHUB.

Os prints das conversas estão na pasta `docs/`. Nenhuma credencial ou dado pessoal de terceiros foi enviado nos prompts.

## 1. Como ler este registro

- **Etapa:** momento do projeto em que o Gemini foi usado.
- **Prompt enviado:** resumo do que foi perguntado.
- **Resumo da resposta:** síntese do que o Gemini respondeu.
- **O que apliquei:** mudança concreta feita a partir da resposta.
- **O que descartei e por quê:** sugestões não adotadas e a justificativa.
- **Print:** arquivo de imagem com a conversa.

## 2. Dados da ferramenta

| Campo | Valor |
|---|---|
| Ferramenta | Google Gemini |
| Modelo/versão | Gemini 3.6 Flash |
| Período de uso | 25/10/2026 |
| Finalidade | Apoio ao planejamento, revisão do plano, ideias de teste e checagem de boas práticas |
| Dados sensíveis enviados | Nenhum |

## 3. Registro das interações

| Etapa | Prompt enviado | Resumo da resposta | O que apliquei | O que descartei e por quê | Print |
|---|---|---|---|---|---|
| Planejamento (contexto inicial) | Expliquei que sou aluno de Ciência da Computação no CEUB, que já tinha o repositório meu-portifolio com página no GitHub Pages, 3 projetos (site, calculadora de IMC e lista de tarefas) e verificação em duas etapas ativada. Pedi que me guiasse em passos curtos e avisasse quando algo precisasse ser configurado direto no site do GitHub. | O Gemini confirmou que entendeu o contexto e passou a me guiar em passos curtos. Destacou que a verificação em duas etapas já cobre boa parte da segurança. Sugeriu como primeiro passo organizar o ambiente no GitHub com um quadro Kanban (Todo, In Progress, Done) na aba Projects, chamado "PortfolioHUB - Roadmap", e avisou que essa configuração é feita direto no site do GitHub. Ficou aguardando eu avisar para seguir para o Git local e as branches. | Criei o GitHub Project "PortfolioHUB - Roadmap" em formato Board e coloquei as issues do trabalho nele. | Nada descartado nesta etapa; segui a sugestão. | docs/print-gemini-01.png |
| Revisão do plano | Enviei o plano de 6 etapas (planejamento, ambiente GitHub, usuários e segurança, colaboração, testes e vídeo) e perguntei o que estava faltando ou fora de ordem, quais riscos eu não tinha visto, o que é mais importante em segurança para um repositório público de portfólio e o que poderia deixar para depois se faltasse tempo. | O Gemini disse que o plano cobre os pilares exigidos. Sugeriu configurar a proteção da main e o SECURITY.md antes das issues e dos PRs, ter um arquivo LICENSE e gravar no vídeo o bloqueio de push direto na main. Apontou como riscos o site quebrar no GitHub Pages, o atraso de 2 a 5 minutos na publicação e o áudio ou tempo do vídeo. Em segurança, destacou nunca versionar credenciais (.gitignore), manter a main fechada com no mínimo 1 aprovação em PR e deixar o Dependabot ativo. Para ganhar tempo, sugeriu simplificar o Lighthouse e os modelos de PR e convidar uma conta secundária como colaboradora. | Mantive o LICENSE (MIT) e o .gitignore no repositório, ativei o Dependabot e a proteção da main (sem push direto, sem force push e sem apagar a branch) e vou gravar o bloqueio de push no vídeo. Para o Pages, vou publicar a release com antecedência e conferir o site em janela anônima. | Não usei 1 aprovação obrigatória no PR, porque eu sou o único com acesso e não consigo aprovar o meu próprio PR; deixei 0 aprovações, mas o Pull Request continua obrigatório. Também não consegui seguir a ordem sugerida: ativei a proteção da main depois dos primeiros PRs, e registrei isso como aprendizado. | docs/print-gemini-02.png |

## 4. Limites e cuidados

- O Gemini foi usado como **apoio**, não como fonte de verdade: links, comandos e recomendações foram conferidos antes de aplicar.
- Resultados de testes **não** foram inferidos a partir de respostas do Gemini; só valem as medições reais registradas em [`checklist-testes.md`](checklist-testes.md).
- Nenhuma credencial, token, senha ou dado pessoal de terceiros foi enviado à ferramenta.
- Sugestões que conflitavam com as regras do repositório ou com o tempo disponível foram descartadas e registradas na coluna correspondente.

## 5. Declaração

Declaro que as informações preenchidas neste registro correspondem ao uso real da ferramenta no projeto.

**Autor:** Rodrigo Angelim da Cunha

**Data:** 25/10/2026
