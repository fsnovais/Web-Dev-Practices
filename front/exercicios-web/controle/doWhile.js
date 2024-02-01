const inteiroAleatorio = function (min,max) {
    resultado = Math.random() * (max - min) + min
    return(Math.floor(resultado))
}
 opcao = -1

 do {
     opcao = inteiroAleatorio(-1,10)
     console.log(`O numero sorteado foi ${opcao}`)
 }  while (opcao != -1)
 console.log('Até o proximo código.')