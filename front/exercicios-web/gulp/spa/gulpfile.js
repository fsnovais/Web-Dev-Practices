const {series, parallel} = require('gulp')
const gulp = require('gulp')

const {appCSS,appHTML,appIMG,appJS} = require('./gulpTasks/app')
const {depsCSS,depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos,servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML,appCSS,appJS,appIMG),
        series(depsCSS,depsFonts)
    ),
    servidor,
    monitorarArquivos
)