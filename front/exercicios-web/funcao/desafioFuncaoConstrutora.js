//Classe Construtora
class Pessoa1 {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa1('Felipe')
p1.falar()

//Função Construtora
const Pessoa2 = function(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
    
}

const p2 = new Pessoa2('Felipe')
p2.falar()