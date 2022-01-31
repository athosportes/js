/* 
    Primitivos (Valores imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
    são valores que são copiados ao passar o valor dele para outra variável
*/

let nome = 'Athos'
console.log(nome)
let nomeTambem = nome;
console.log(nomeTambem)

nome = 'Luiz'
console.log(nome)
console.log(nomeTambem)

/* 
    Referência - (Valores mutáveis) - array, object, function
    são valores que apontam para a mesma referência
*/

let a = [1, 2, 3];
let b = a;
b.push(4)
console.log(a, b)
