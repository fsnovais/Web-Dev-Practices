// Armazenando uma funcao em uma variavel
const imprimirSona = function (a, b) {
    console.log(a+b)
}

imprimirSona(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,8))

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(7,5)) 

const imprimir2 = a => console.log(a)
imprimir2('Legal!')