# 📁 Meu Portfólio — Entrega Intermediária

Repositório pessoal com meus **projetos acadêmicos**, **projetos pessoais** e **documentos**, versionado com Git e publicado no GitHub. Esta é a **Entrega Intermediária: Criação de Repositório com Versionamento** do Bootcamp.

> **Autor:** Rodrigo Angelim da Cunha — Ciência da Computação (CEUB)
> **GitHub:** [github.com/rodrigoangel1im](https://github.com/rodrigoangel1im) · **LinkedIn:** [Perfil](https://www.linkedin.com/in/rodrigo-angelim-45a137246)
> **Página online:** [https://rodrigoangel1im.github.io/meu-portifolio](https://rodrigoangel1im.github.io/meu-portifolio)

---

## 📑 Índice

- [Sobre o repositório](#-sobre-o-repositório)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Projetos](#-projetos)
- [Documentos](#-documentos)
- [Como executar localmente](#-como-executar-localmente)
- [Tecnologias](#-tecnologias)
- [Versionamento](#-versionamento)
- [Licença](#-licença)

---

## 📂 Sobre o repositório

Este repositório foi organizado em **uma pasta para cada projeto**, com README próprio em cada um, seguindo boas práticas de documentação e versionamento (Conventional Commits, tag `v1.0`).

| Seção | Pasta | Conteúdo |
|---|---|---|
| Página principal | `/` | Site do portfólio (GitHub Pages) |
| Projetos | `/projetos` | Um subpasta por projeto, com README |
| Documentos | `/docs` | Trabalhos, slides e currículo em PDF |

## 🌳 Estrutura de pastas

```
meu-portifolio/
├── README.md                    ← este arquivo
├── index.html                   ← página do GitHub Pages
├── style.css                    ← estilos da página
├── docs/
│   ├── curriculo.pdf
│   ├── slides-apresentacao.pdf
│   └── print-*.png            ← prints dos projetos
└── projetos/
    ├── site-vitrine/
    │   └── README.md
    ├── calculadora-imc/
    │   ├── README.md
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    └── lista-de-tarefas/
        ├── README.md
        ├── index.html
        ├── style.css
        └── script.js
```

## 🚀 Projetos

### 1. Site Vitrine (Portfólio)
Página pessoal responsiva publicada com **GitHub Pages** — a que você está vendo.
`[Ver projeto](projetos/site-vitrine/README.md)`

### 2. Calculadora IMC
Aplicação web que calcula o Índice de Massa Corporal com validação de dados.
`[Ver projeto](projetos/calculadora-imc/README.md)`

### 3. Lista de Tarefas
Gerenciador de tarefas: adicionar, concluir e excluir itens.
`[Ver projeto](projetos/lista-de-tarefas/README.md)`

## 📄 Documentos
Materiais disponíveis na pasta [`docs/`](docs/):
- `curriculo.pdf` — currículo atualizado
- `slides-apresentacao.pdf` — slides sobre o repositório e os projetos
- `print-*.png` — capturas de tela dos projetos

A página do portfólio também reúne links para a documentação e para o código-fonte no GitHub.

## 💻 Como executar localmente

```bash
git clone https://github.com/rodrigoangel1im/meu-portifolio.git
cd meu-portifolio
# basta abrir o index.html no navegador, ou:
start index.html        # Windows
```

## 🛠 Tecnologias
- HTML5, CSS3, JavaScript (ES6)
- Git e GitHub (versionamento)
- GitHub Pages (hospedagem estática)

## 🏷 Versionamento
| Tag | Descrição | Data |
|---|---|---|
| `v1.0` | Primeira versão estável do portfólio | 17/10/2026 |

Histórico com `git log --oneline --graph --all`.

## 🤝 Colaboração
Como o repositório é público, qualquer pessoa pode contribuir pelo fluxo padrão do GitHub:
1. **Fork** do repositório
2. Criação de uma **branch** (`git checkout -b feature/minha-melhoria`)
3. **Commit** com mensagens no padrão Conventional Commits
4. **Push** e abertura de um **Pull Request**
5. Revisão e merge na `main`

## 📜 Licença
Este projeto está sob a licença [MIT](LICENSE) — uso livre para fins acadêmicos.
