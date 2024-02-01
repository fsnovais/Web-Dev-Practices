const pessoa = {
    nome: 'João',
    idade: 25,
    peso:85
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Destructuring

Object.entries(pessoa).forEach(([chaves,valores]) => {
    console.log(chaves+": "+valores)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '22/10/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a: 4}
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 123
console.log(obj)