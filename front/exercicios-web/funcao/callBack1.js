const linguagens = ['Java', 'Javascript', 'Phyton']

function chamar(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

linguagens.forEach(chamar)
linguagens.forEach(peteca => console.log(peteca))


