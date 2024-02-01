const fs = require('fs')

const diretorio = __dirname + '/arquivo.json'

//sincrono

const conteudo = fs.readFileSync(diretorio, 'utf-8')
console.log(conteudo) 

//assincrono

fs.readFile(diretorio, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err,conteudo) => {
    console.log('Conteudo da pasta...')
    console.log(conteudo)
})