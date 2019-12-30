const soma = function (x,y) {
    return(x + y)
}

const ImprimirResultado = function (a, b, calculo = soma) {
    return (console.log(calculo(a,b)))
}

ImprimirResultado(2,3)
ImprimirResultado(2,3,soma)
ImprimirResultado(2,3,function(a,b) {
    return(a-b)
})
ImprimirResultado(2,3, (a, b) => a * b )


let falar = {
    saudar: function () {
        console.log('Olá!')
    },
    cumprimentar: () => console.log('Tudo bem?'),
    perguntar() {
        console.log('Como vão as coisas?')
    }
}

falar.saudar()
falar.cumprimentar()
falar.perguntar()

