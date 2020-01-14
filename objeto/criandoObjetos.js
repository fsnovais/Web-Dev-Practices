// usando a notação literal
const pessoa1 = {
    nome: 'José'
}
console.log(pessoa1)
//Object em JS
const pessoa2 = new Object
pessoa2.nome = 'José'
console.log(pessoa2)

//Função Construtora
function produto (nome,preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }

}
const produto1 = new produto('Notebook',100,0.10)
const produto2 = new produto('Iphone',4000,0.15)
console.log(produto1.getPrecoComDesconto(),produto2.getPrecoComDesconto())

//Função Factory
criarFuncionario = (nome,salarioBase,faltas) => {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return((salarioBase / 30) * (30 - faltas))
        }
    }
}
let f1 = criarFuncionario('Pedro',500,2)
let f2 = criarFuncionario('Maria',2000,3)
console.log(f1.getSalario().toFixed(2),f2.getSalario().toFixed(2))

//Object.create
const pessoa4 = Object.create(null)
pessoa4.nome = 'José'
console.log(pessoa4)
//JSON.parse
const pessoa5 = JSON.parse('{"nome": "José"}')
console.log(pessoa5)