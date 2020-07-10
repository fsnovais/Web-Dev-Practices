const pessoa = [
    {nome:'Pedro', idade: 15},
    {nome:'José', idade: 25},
    {nome:'Bruno', idade: 19},
    {nome:'Andre', idade: 22},
]

// Imperativo
let total = 0
    for(let i = 0;i < pessoa.length;i++ ){
        total += pessoa[i].idade
}
console.log(total/pessoa.length)

//Declarativo

const getIdade = pessoa => pessoa.idade
const soma = (total, atual) => total + atual
const total2 = pessoa.map(getIdade).reduce(soma)

console.log(total2/pessoa.length)