//Object.preventExtensions - Não permite adicionar novos valores
const veiculo = Object.preventExtensions ({
    nome: 'Gol', vlMax: 220, valor: 15000
})
console.log(veiculo)

console.log(`Extensível: ${Object.isExtensible(veiculo)}`)
veiculo.nome = 'Up!'
veiculo.vlMax = 250
delete veiculo.valor
veiculo.portas = 4
console.log(veiculo) 

//Object.seal = Não permite adicionar nem excluir os valores
const pessoa = Object.seal({
    nome:'Jessika',
    idade: 22
})
delete pessoa.nome
pessoa.nome = 'Amanda'
console.log(pessoa)

//Object.freeze = seal + atributos são constantes
const casa = {
    cidade: 'Samambaia',
    valor: 100000
}
Object.freeze(casa)
casa.cidade = 'Guará'
delete casa.valor
console.log(casa)

