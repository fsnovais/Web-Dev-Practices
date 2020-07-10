console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.A = 1
exports.B = 2
module.exports.C = 3

console.log(module.exports)

exports = null
console.log(module.exports)

exports = {
    nome: 'João'
}
console.log(module.exports)

module.exports = {
    publico: true
}

console.log(module.exports)