function checkPalindrome(inputString) {
    let list = []
    let list2 = []
    for (i in inputString) {
    list[i] = inputString[i]
    }
    for (let j = list.length -1; j >= 0; j--){
        list2.push(list[j])
    }
    if (JSON.stringify(list) == JSON.stringify(list2)) {
        return (true)
    }else {
        return (false)
    }
}
console.log(checkPalindrome("arara"))
console.log(checkPalindrome("casa"))