const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala anonimo!')
    process.exit()
}else{
    process.stdout.write('Insira o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(/\r?\n|\r/g, "")

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}