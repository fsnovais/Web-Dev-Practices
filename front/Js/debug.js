function debug(msg) {
    // Localize a seção de depuração de documento, examinando os atributos de
    // identificação html
    var log = document.getElementById('debuglog')
    // Se não existe elemento algum com a identificação "debuglog", cria um.
    if (!log) {
        log = document.createElement('div')     // Cria um novo elemento <div>
        log.id = 'debuglog'                     // Define o atributo de identificação HTML nele

        log.innerHTML = '<h1>Debug Log</h1>'    // Define o conteúdo inicial
        document.body.appendChild(log)          // Adiciona-o no final do documento
    }
    // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
    var pre = document.createElement("pre"); // Cria uma marca <pre>
    var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
    pre.appendChild(text); // Adiciona o texto no <pre>
    log.appendChild(pre); // Adiciona <pre> no log

}