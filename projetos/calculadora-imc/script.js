const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const valor = document.getElementById("valor");
const classificacao = document.getElementById("classificacao");
const erro = document.getElementById("erro");

function classificar(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}

botao.addEventListener("click", () => {
  const p = parseFloat(peso.value.replace(",", "."));
  const a = parseFloat(altura.value.replace(",", "."));

  if (!p || !a || p <= 0 || a <= 0) {
    erro.hidden = false;
    resultado.hidden = true;
    return;
  }

  const imc = p / (a * a);
  erro.hidden = true;
  resultado.hidden = false;
  valor.textContent = `IMC: ${imc.toFixed(1)}`;
  classificacao.textContent = classificar(imc);
});
