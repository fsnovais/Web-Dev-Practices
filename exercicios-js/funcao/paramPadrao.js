// estrategia 1 para gerar valor padrão
function soma1 (a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return(console.log(a+b+c))
}

soma1()
soma1(1,2,3)
soma1(0,0,0) // 0 == false

//estrategia 2,3,4 para gerar valor padrão
function soma2 (a,b,c) {
    a = isNaN(a) ? 1 : a
    b = 1 in arguments ? b : 1
    c = c !== undefined ? c : 1
    return(console.log(a+b+c))
}

soma2()
soma2(1,2,3)
soma2(0,0,0)

//estrategia padrão ES2015
function soma3(a=1,b=1,c=1) {
    return(console.log(a+b+c))
}

soma3()
soma3(1,2,3)
soma3(0,0,0)