const pai = {
    nome: 'Deusdete',
    corCabelo:'Castanho'
}
const filho1 = Object.create(pai)
filho1.nome = 'Felipe'
console.log(filho1)
console.log(filho1.corCabelo)

const filho2 = Object.create(pai, {
    nome : {value: 'Bianca', writable: false, enumerable: true}
})
 
console.log(filho2)

console.log(Object.keys(filho2))

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
    console.log(key) :console.log(`Por herança: ${key}`)
}