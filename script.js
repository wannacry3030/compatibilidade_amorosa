const form = document.querySelector("form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const seuNome = document.querySelector("#seu-nome").value;
  const nomeOutraPessoa = document.querySelector("#nome-outra-pessoa").value;

  // Cálculo da compatibilidade
  const compatibilidade = calcularCompatibilidade(seuNome, nomeOutraPessoa);

  // Exibição do resultado
  const resultadoContainer = document.querySelector("#resultado-container");
  resultadoContainer.innerHTML = `
    <h2>Compatibilidade Amorosa</h2>
    <p>A compatibilidade entre ${seuNome} e ${nomeOutraPessoa} é de ${compatibilidade}%</p>
  `;
});

// Função para calcular a compatibilidade
function calcularCompatibilidade(nome1, nome2) {
  const soma = somaDosValoresDosNomes(nome1) + somaDosValoresDosNomes(nome2);
  const compatibilidade = soma % 101;
  return compatibilidade;
}

// Função para somar os valores de cada letra de um nome
function somaDosValoresDosNomes(nome) {
  let soma = 0;
  for (let i = 0; i < nome.length; i++) {
    soma += nome.charCodeAt(i);
  }
  return soma;
}
