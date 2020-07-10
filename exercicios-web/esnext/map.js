const { map } = require("lodash");

const tecnologia = new Map()
tecnologia.set('React', { framework: false, library: true })
tecnologia.set('Angular', {framework: true, library: false})

// console.log(tecnologia.React)
console.log(tecnologia.get('React').library)

const chavesVariadas = new Map([
    [() => { },'funcao'],
    [{}, 'objeto'],
    [[], 'array'],
    ['Nome', 'string'],
    [123, 'numero']
])

chavesVariadas.forEach((vlr, chave) => {
    console.log(chave, vlr)
})
console.log(chavesVariadas.has('Nome'))
console.log(chavesVariadas.delete('Nome'))
console.log(chavesVariadas.has('Nome'))
console.log(chavesVariadas.size)

chavesVariadas.set('Nome', 'String')
console.log(chavesVariadas)