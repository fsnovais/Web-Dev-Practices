const notas = [ 10, 5.5, 6.7, 8.9, 7.8, 4.5, 9.2]

let notasBaixas = []
//Sem Callback
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]) 
    }
}

console.log(notasBaixas)

//Com Callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Com Callback e ArrowFunction
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)