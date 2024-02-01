const escola = [{
  nome: 'Turma1',
  alunos: [{
    nome: 'Carol',
    nota: 5.5
  },{
    nome: 'Claudio',
    nota: 7.3
  }]
},{
    nome: 'Turma2',
    alunos: [{
        nome: 'Fernanda',
        nota: 8.5},
        {
        nome: 'Pedro',
        nota: 6.3
    }],
  }  
]

const getNotasAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAluno)
const notas1 = escola.map(getNotasTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)