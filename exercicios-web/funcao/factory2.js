function criarProduto(nome,preco) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

let produto1 = criarProduto('Shampoo',15)
console.log(produto1)

console.log(criarProduto('Notebook',2199.00))
console.log(criarProduto('Tablet',300.00))