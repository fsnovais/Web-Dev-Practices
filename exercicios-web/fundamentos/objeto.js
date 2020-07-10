const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
console.log(prod1.nome)
prod1.preco = 4998.90
console.log('Nome:',prod1.nome,'Valor:',prod1.preco)
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)