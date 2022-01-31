function saudacao(){
    console.log('Ola');
}

saudacao()


//POssível definir valor padrão
function soma(x = 0, y = 0){
    const resultado = x + y;
    return resultado;
}

const somas = soma();
console.log(somas);