const pessoa = {
    saudacao: 'Bom dia!!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// const falar1 = pessoa.falar()
// falar1()

const falar2 = pessoa.falar.bind(pessoa)
falar2()