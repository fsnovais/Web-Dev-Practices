const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

function passou (nota) {
    const resultado = nota >= 5 ? 'Passou' : 'Se Fudeu'
    return(resultado)
}

console.log(passou(4.1))

