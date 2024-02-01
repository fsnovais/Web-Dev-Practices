//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2,5,4,5,6,7,8) //Vai somar os dois primeiros valores e ignorar os outros
imprimirSoma() //NaN

// Funcao com retorno

function soma(a, b = 0) {
    return a + b
} 
console.log("-----------------")
console.log(soma(2,6))
console.log(soma(7))
console.log(soma())