const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)

const nomeAttr = 'Nota'
const vlrAttr = 7.56

const obj2 = {}
obj2[nomeAttr] = vlrAttr
console.log(obj2)

const obj3 = {[nomeAttr]:vlrAttr}
console.log(obj3)

const obj4 = {
    funcao1: function() {
        // ...
    },
    funcao2: function() {
        // ...
    }
}

console.log(obj5)