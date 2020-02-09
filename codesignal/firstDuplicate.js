let array = [2,1,3,5,3,2]
function FirstDuplicate(a) {
    let primeiro = 0
    ultimo = -1
    for (let i = 0; i < a.length; i++ ) {
        ultimo = a.lastIndexOf(a[i])
        if (ultimo > i && ultimo < primeiro) {
            primeiro = ultimo;
        } 
    }
    return ultimo !== -1 ? a[ultimo] : -1;
}

console.log(FirstDuplicate(array))