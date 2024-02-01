// ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// Melhoria na notação literal
const nome = 'Felipe'
const pessoa = {
    nome,
    ola(){
        return 'Bom dia!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Classe

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())