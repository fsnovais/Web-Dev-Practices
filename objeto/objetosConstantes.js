// pessoa -> 123 -> {...dados...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

//Congelar o Objeto
Object.freeze(pessoa)

//Objeto não se altera
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João',end:'Casa 11'})
console.log(pessoaConstante)