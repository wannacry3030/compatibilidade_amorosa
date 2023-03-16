const form = document.querySelector("form");
const seuNomeInput = document.querySelector("#seu-nome");
const nomeOutraPessoaInput = document.querySelector("#nome-outra-pessoa");
const resultadoDiv = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const seuNome = seuNomeInput.value;
  const nomeOutraPessoa = nomeOutraPessoaInput.value;

  resultadoDiv.innerText = `Olá ${seuNome} e ${nomeOutraPessoa}, vocês são compatíveis!`;
});
