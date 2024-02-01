// Arrow Function
const soma = (a,b) => a+b
console.log(soma(2,3))
// Arrow Function (This)
const valor1 = () => this === module.exports
const valor2 = valor1.bind({})

console.log(valor1())
console.log(valor2())

// parametro default
const padrao = (a = 'Node') => console.log(a)
padrao()
padrao('Mais forte')
// Operador Rest

const acumulador = (...numeros) => {
    let total = 0
    numeros.forEach(n => total += n)
    return total
} 

console.log(acumulador(2,3,4,5,6,7))