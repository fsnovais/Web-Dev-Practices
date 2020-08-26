  const gulp = require('gulp')
  const {series, parallel} = require('gulp')


  const antes1 = cb => {
    console.log('Antes 1!')
    return cb()
  }

  const antes2 = cb => {
    console.log('Antes 2!')
    return cb()
  }

  function copiar(cb) {
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest('pastaB'))
    return cb()
  }

  const fim = cb => {
    console.log('Fim!')
    return cb()
  }

  module.exports.default = series(
      parallel(antes1, 
      antes2), 
      copiar, 
      fim)