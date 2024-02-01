const fs = require('fs')

const casa  = {
    quartos: 2,
    sala: 1,
    banheiros: 2,
    garagem: true
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(casa), err => {
    console.log(err || 'Arquivo Salvo!')
})