const quaseArray = { 0: 'Pedro', 1:'Sabrina', 2:'Fernanda'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['Pedro','Sabrina','Fernanda'] 
console.log(quaseArray.toString(), meuArray)
console.log(typeof quaseArray.toString(), typeof meuArray)