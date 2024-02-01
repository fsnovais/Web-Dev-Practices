const { realpath } = require("fs");

function real(partes, ...valores) {
    const lista = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        lista.push(partes[indice], valor)
    })
    return lista.join('')
}

const vista = 25.5
const parcelado = 10

console.log(real `O pagamento pode ser feito em ${vista} a vista, ou em 3 parcelas sem juros de ${parcelado}.`)