const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Usando Break
console.log('Usando Break')
console.log('')
for (i in dados) {
    if (i == 5) {
        break //Ignora o Indice 5 e finaliza a repetição
    }
    console.log(`${i} = ${dados[i]}`)
}

// Usando Continue
console.log('Usando Continue')
console.log('')
for (i in dados) {
    if (i == 5) {
        continue // Ignora o Indice 5 e continua a repetição
    }
    console.log(`${i} = ${dados[i]}`)
}

// Usando rótulos
console.log('Usando Rotulos')
console.log('')
externo: for (x in dados) {
    for (y in dados) {
        console.log(`${x} = ${y}`)
        if (x == 3 && y == 2) 
        {
            break externo // O Break será feito no for rotulado
        } 
    }
}