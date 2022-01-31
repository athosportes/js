const alunos = ['Athos', 'Ana Clara', 'Maggie']
console.log(alunos)

alunos.push('Maria') //Insere um elemento na última posição o array
console.log(alunos)

alunos.unshift('Renan') //Insere um elemento na primeira posição do array
console.log(alunos)

const removidoFinal = alunos.pop() //Remove o último item do array, é possível armazenar o valor em uma variável
console.log(alunos)
console.log(removidoFinal)

const removidoInicio = alunos.shift() //Remove o primeiro item do array, é possível armazenar o valor em uma variável
console.log(alunos)
console.log(removidoInicio)

delete alunos[1]; //Deleta o item do índice informado e deixa a posição vazia
console.log(alunos)

alunos.slice(0 ,2) //fatia o array, pode receber valores negativos também
console.log(alunos)

console.log(typeof alunos); // O tipo de um array é object, porém é possível saber se é um array utilizar o instanceof
console.log(alunos instanceof Array)