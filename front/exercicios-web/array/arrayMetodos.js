const aprovados = ['Pedro', 'Kamila', 'Carlos', 'Bianca']
aprovados.pop() //Remove o ultimo valor
console.log(aprovados)
aprovados.push('Alberto') //Adiciona novo valor no final da lista
console.log(aprovados)
aprovados.shift() //Remove o primeiro valor
console.log(aprovados)
aprovados.unshift('José') //Adiciona novo valor no inicio da lista
console.log(aprovados)
aprovados.splice(2,0,'Gabriel','Luiz') //adiciona e remove valores da lista (indice, numero de valores excluidos, 'novo valor')
console.log(aprovados)
aprovados.splice(4,1)
console.log(aprovados)
const melhores = aprovados.slice(1,5) // Cria um novo array com valores de outro array
console.log(melhores)