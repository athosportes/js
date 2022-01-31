const nomeSobrenome = 'Athos Portes';
const idade = 30;
const peso = 84;
const altura = 1.84;
const anosDeNascimento = 2022 - idade;


console.log(nomeSobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg' )
console.log('tem ' + altura + ' de altura e seu IMC é de ' + calcularImc(peso, altura))
console.log(nomeSobrenome + ' nasceu no ano de ' + anosDeNascimento)



function calcularImc(peso, altura) {
 return imc = peso / (altura * altura);
}

