// coleção dinâmica de pares chave/valor

let obj = new Object
obj.nome = "bola"
obj['Marca do produto'] = "Nike"
obj.preco = 300
console.log(obj)
delete obj.preco
console.log(obj)

const carro = {
    nome: 'Up',
    valor: 31000,
    proprietario: {
        nome: 'Felipe',
        idade: 25,
        endereco: {
            cidade: 'Samambaia',
            rua: '213',
            casa: 38
            }
        },
    condutores: [{
        nome: 'Felipe',
        idade: 25,
        },
        {nome: 'Maria',
        idade: 49,}] 
        
    }

console.log(carro)
console.log(carro.proprietario.endereco.casa = 20)
console.log(carro)
console.log(carro.condutores.length)
delete carro.proprietario
console.log(carro)