const imprimirNota = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('Aprovado!')
            break
        case 5:
        case 4:
        case 3:
            console.log('Recuperação!')
            break
        case 2:
        case 1:
        case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota Inválida')
    }
    
}

imprimirNota(10)
imprimirNota(7.5)
imprimirNota(5.4)
imprimirNota(3.2)
imprimirNota(11)
imprimirNota(-2)