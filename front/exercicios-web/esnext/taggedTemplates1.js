// Tagged Template
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Palavras Aleatórias'
}

let nome = 'Jão'
let situacao = 'Pobre'
console.log(tag `${nome} está ${situacao}!`)