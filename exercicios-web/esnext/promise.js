function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Olá Promise')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))