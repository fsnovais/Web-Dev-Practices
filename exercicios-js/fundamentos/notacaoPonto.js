console.log(Math.ceil(6.1))

const obj1  = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function () {
        console.log("Executando saporra")
    }
}
const Obj1 = new Obj('Casa')
const Obj2 = new Obj('Carro')
const Obj3 = new Obj('Teste')

console.log(Obj1.nome)
console.log(Obj2.nome)
Obj3.exec()