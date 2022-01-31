const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = `Seu número é ${numero}`
texto.innerHTML = `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>
<p> é NaN: ${Number.isNaN(numero)} </p>
<p> Arredondando para baixo: ${Math.floor(numero)} </p>
<p> Arredondando para cima ${Math.ceil(numero)} </p>
<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;9