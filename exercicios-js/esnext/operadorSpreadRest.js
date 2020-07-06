// Operador Spread (Espalhar)/ Rest (Juntar)

// Spread com Objetos
const produto = {nome: 'Galaxy S8', valor: 6.999}
const clone = {vendido: false, ...produto}
console.log(clone)

// Spread com Arrays
const alunos = ['Ana','Paulo','Cecília']
const aprovados = ['Pedro', ...alunos, 'Bruna']
console.log(aprovados)