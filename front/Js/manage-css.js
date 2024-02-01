function hide(e, reflow) {      // Oculta um elemento e faz script de seu estilo
    if (reflow) {               // Se o segundo argumento é verdadeiro
        e.style.display = 'none'// Oculta o elemento que ultiliza seu espaço
    }else {                     // Caso Contrario
        e.style.display = 'hidden'// Torna invisível mas deixa seu espaço
    }
}

function highlight(e) {         //Destaca e define uma classe CSS
    // Basta definir ou anexar no atributo da classe HTML
    // Isso presume que uma folha de estilo CSS já define a classe 'hilite'
    if (!e.className) e.className = 'hilite'
    else e.className += 'hilite'
}