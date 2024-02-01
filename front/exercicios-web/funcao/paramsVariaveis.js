const soma = function () {
    valor = 0
    for (let i in arguments) {
        valor += arguments[i]
    } 
    return(valor)
}

console.log(soma(1,2,3))
console.log(soma(20,30,5))
console.log(soma('a','b','c'))