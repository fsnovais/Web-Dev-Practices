const produtos = [
    {nome: 'Notebook' , preco: 2499, fragil: true},
    {nome:'Ipad Pro' , preco:4199, fragil: true},
    {nome:'Copo de Vidro' , preco:12.49, fragil: true},
    {nome:'Copo de Plástico' , preco:18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 100
}))

produtosBaratos = produtos.filter(function(p){
    return p.preco < 1000
})
produtosFrageis = produtos.filter(function(p){
    return p.fragil
})
produtosFrageisECaros = produtos.filter(function(p){
    return p.fragil && p.preco > 2000
})
console.log(produtosBaratos)
console.log(produtosFrageis)
console.log(produtosFrageisECaros)

// ============================================

const barato = produto => produto.preco < 2000
const fragil = produto => produto.fragil

console.log(produtos.filter(barato).filter(fragil))