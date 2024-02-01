// Usandor For in em um array

const notas = [6.5 ,7.3 ,8.4 , 9.3, 3.2]

for (let i in notas) {
    console.log(`A ${i}° nota da lista é ${notas[i]}`)
}

// Usando for in em um objeto

Aluno = {
    nome: 'Felipe',
    sobrenome: 'Novais',
    idade: 25,
    peso:90

}

for (let atributo in Aluno) {
    console.log(`${atributo}: ${Aluno[atributo]}`)
}