const inteiroAleatorio = function (min,max) {
    resultado = Math.random() * (max - min) + min
    return(Math.floor(resultado))
}
 opcao = 2

 while (opcao != -1) {
     opcao = inteiroAleatorio(-1,10)
     console.log(`O numero sorteado foi ${opcao}`)
 }
 console.log('Até o proximo código.')