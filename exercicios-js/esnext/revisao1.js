//let e const
{
    const a = 1
    let b = 2
    var c = 3
}
console.log(c)

// Template String
const produto = 'celular'
console.log(`O Produto comprado foi um ${produto}!`)

// Destructuring
const [l,e,t,...ras] = "Felipe"
console.log(l,e,t,ras)

const [x,,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'Felipe', idade: 25}

console.log(nome, idade)