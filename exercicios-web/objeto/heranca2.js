// Cadeia de protótipos (prototype chain)
const avo = {a: 1}
const pai = {__proto__: avo, b: 2}
const filho = {__proto__: pai,c: 3, d: 4, a: 5}
const neto = {__proto__: filho, e:5, f: 6}
console.log(neto.d,neto.a,filho.b)

const carro = {
    velAtual: 200,
    velMax: 300,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual = this.velAtual + delta
        }else {
            this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 340 //shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerar(50)
console.log(volvo.status())

ferrari.acelerar(100)
console.log(ferrari.status())