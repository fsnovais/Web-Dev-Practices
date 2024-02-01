// novo recurtso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n ,i)

const {endereco : {logradouro, numero, casa}} = pessoa
console.log(logradouro,numero,casa)