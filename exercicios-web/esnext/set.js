// Set : Estrura não indexada que não aceita repetição

const carros = new Set()
carros.add('Fox')
carros.add('BMW').add('Gol')
carros.add('Celta').add('Up').add('Fox')
console.log(carros)

carros.delete('Celta')
console.log(carros.has('Celta'))
console.log(carros.size)