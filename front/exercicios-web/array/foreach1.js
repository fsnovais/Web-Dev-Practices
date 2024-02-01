const devedores = ['Camila', 'Ronaldo', 'Jessika', 'Bianca']

devedores.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

devedores.forEach(devedor => console.log(devedor))

let listarDevedor = (nome, indice) => console.log(indice+ 1,nome)
devedores.forEach(listarDevedor)