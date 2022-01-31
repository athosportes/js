//               0123456789
let umaString = "O rato roeu a roupa do rei de roma."

//mostra que a palavra inserida, começa no index 3
console.log(umaString.indexOf('texto'))

//procura a palavra desejada a partir do index 6, caso não encontrada, retorna -1
console.log(umaString.indexOf('texto', 6))

//procura o trecho de trás para frente
console.log(umaString.lastIndexOf('texto'))

//procura o trecho de trás para frente a partir do index informado
console.log(umaString.lastIndexOf('texto', 3))

//método replace substitui o primeiro texto pelo segundo
console.log(umaString.replace('texto', 'casa de pedra'))

//retorna o tamanho da string
console.log(umaString.length)

//"fatia" a string de acordo com os valores de index informado logo será retornado => rato
console.log(umaString.slice(2, 6))

//"fatia" a string de acordo com os valores de index informado, podendo ser valor negativo, que irá pegar o length total da string subtraido do valor inserido no slice
console.log(umaString.slice(32))

//"fatia" a string de acordo com os valores de index informado logo será retornado => rato
console.log(umaString.substring(umaString.length - 5))

//divide a string no valor inserido, o valor divisor não é incluso na impressão
console.log(umaString.split(''))

//divide a string no valor inserido, o valor divisor não é incluso na impressão, podendo passar o número de vezes que a ação será executada
console.log(umaString.split('', 3))

//toda a string em maiúsculo
console.log(umaString.toUpperCase())

