//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao ='Falaaa' // contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua da minha rua',
        numero: 124
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)