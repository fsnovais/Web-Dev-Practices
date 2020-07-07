for (let letra of 'Felipe') {
    console.log(letra)
}
for (let i in 'Felipe') {
    console.log(i)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntos = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promisse',{abordado:false}]
])

for (let assuntosMap of assuntos) {
    console.log(assuntosMap)
}

for (let chaves of assuntos.keys()){
    console.log(chaves)
}

for (let valores of assuntos.values()){
    console.log(valores)
}

for (let [ch, vl] of assuntos) {
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
s.add('d').add('e').add('f')

for(let letras of s){
    console.log(letras)
}