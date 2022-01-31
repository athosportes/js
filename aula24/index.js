/* 
Operadores lógicos

&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

FALSY 
0
''
""
``
null / undefined
NaN
*/

function falarOi() {
    return 'oi';
}

const ieChegou = false;

console.log(ieChegou && falarOi())