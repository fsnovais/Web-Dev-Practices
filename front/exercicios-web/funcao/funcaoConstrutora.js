const carro = function (velocidadeMaxima = 200, delta = 5) {
    // metodo privado
    let velocidadeAtual = 0
    this.acelerar = function() {
        if (velocidadeAtual < velocidadeMaxima) {
            velocidadeAtual = velocidadeAtual + delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo público
    this.getVelocidadeatual = function() {
        return(velocidadeAtual)
    }
}

const fusca = new carro
fusca.acelerar()
console.log(fusca.getVelocidadeatual())

const camaro = new carro(350, 10)
camaro.acelerar()
camaro.acelerar()
camaro.acelerar()
console.log(camaro.getVelocidadeatual())