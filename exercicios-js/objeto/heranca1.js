const ferrari = {
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(volvo.__proto__)
console.log(ferrari.__proto__ === Object.prototype)


function objeto() {}
console.log(typeof Object, typeof objeto)
console.log(Object.prototype, objeto.prototype)