const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function Exec() {
    const valor = 'Local'
    minhaFuncao()
}

Exec()