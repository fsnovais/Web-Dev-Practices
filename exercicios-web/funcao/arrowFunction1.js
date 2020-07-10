//Função normal
let dobro = function (a) {
    return (2 * a)
}

//Arrow Function com bloco
dobro = (a) => {
    return(2 * a)
}

//Arrow Function sem bloco
// Função arrow sem chaves tem return implicito
dobro = (a) => 2 * a


console.log(dobro(3))

//Função Normal
let ola = function () {
    console.log('Olá!')
}

//Arrow Function com bloco
ola = () => {
    console.log('Olá!!')
}

//Arrow Function sem bloco
ola = () => console.log('Olá!!!') // Arrow Function sem parâmetro
ola = _ => console.log('Olá!!!!') // Arrow Function com 1 parâmetro
ola()