function hide(e, reflow) {      // Oculta um elemento e faz script de seu estilo
    if (reflow) {               // Se o segundo argumento é verdadeiro
        e.style.display = 'none'// Oculta o elemento que ultiliza seu espaço
    }else {                     // Caso Contrario
        e.style.display = 'hidden'// Torna invisível mas deixa seu espaço
    }
}