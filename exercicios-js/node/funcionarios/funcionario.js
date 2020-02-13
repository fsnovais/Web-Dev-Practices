const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')



axios.get(url).then(response => {
    const funcionarios = response.data
    funcionarias = funcionarios.filter(f => f.genero === 'M' && f.pais === 'China')
    funcionaria = funcionarias.reduce((func, funcAtual) => {
        return func.salario > funcAtual.salario ? funcAtual : func
    })
    // console.log(funcionaria)

    japoneses = f => f.pais === 'Japan'
    mulheres = f => f.genero === 'F'
    pobres = f => f.salario < 1000
    ricos = f => f.salario > 1000
    console.log(funcionarios.filter(japoneses).filter(mulheres).reduce((f,fAtual) => {
        return f.salario > fAtual.salario ? fAtual : f
    }))
    
})
