function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const result = [];

  // form.onsubmit = function(e) {
  //     e.preventDefault();
  //     alert(1);
  // };

  function recebeEventoForm(e) {
    e.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    }

    result.push(pessoa);
    console.log(result);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
