const form = document.querySelector("form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const seuNome = document.querySelector("#seu-nome").value;
  const nomeOutraPessoa = document.querySelector("#nome-outra-pessoa").value;
  const porcentagem = Math.floor(Math.random() * 101);

  resultado.innerHTML = `<p>A chance de ${seuNome} e ${nomeOutraPessoa} darem certo é de ${porcentagem}%</p>`;
});
