const alunos = [
    {nome: 'Felipe', idade: 25, bolsista: true},
    {nome: 'Bianca', idade: 22, bolsista: false},
    {nome: 'Jessika', idade: 23, bolsista: true},
    {nome: 'Camila', idade: 22, bolsista: false}
]

const resultado = alunos.map(a => a.idade).reduce(function(acumulador,atual){
    console.log(`Acumulado: ${acumulador} Atual: ${atual}`)
    return acumulador + atual
})
console.log('Resultado Final: ' + resultado)
