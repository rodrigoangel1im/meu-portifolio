const form = document.getElementById("formTarefa");
const entrada = document.getElementById("novaTarefa");
const lista = document.getElementById("lista");
const vazio = document.getElementById("vazio");
const contador = document.getElementById("contador");
const limpar = document.getElementById("limpar");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizar() {
  lista.innerHTML = "";
  tarefas.forEach((t, i) => {
    const li = document.createElement("li");
    if (t.concluida) li.classList.add("concluida");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = t.concluida;
    check.addEventListener("change", () => {
      tarefas[i].concluida = check.checked;
      salvar();
      renderizar();
    });

    const texto = document.createElement("span");
    texto.textContent = t.nome;

    const excluir = document.createElement("button");
    excluir.textContent = "✕";
    excluir.title = "Excluir tarefa";
    excluir.addEventListener("click", () => {
      tarefas.splice(i, 1);
      salvar();
      renderizar();
    });

    li.append(check, texto, excluir);
    lista.appendChild(li);
  });

  const pendentes = tarefas.filter(t => !t.concluida).length;
  contador.textContent = `${pendentes} tarefa(s) pendente(s)`;
  vazio.hidden = tarefas.length > 0;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const nome = entrada.value.trim();
  if (!nome) return;
  tarefas.push({ nome, concluida: false });
  entrada.value = "";
  salvar();
  renderizar();
});

limpar.addEventListener("click", () => {
  tarefas = tarefas.filter(t => !t.concluida);
  salvar();
  renderizar();
});

renderizar();
