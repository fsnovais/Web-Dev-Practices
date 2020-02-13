function adjacentElementsProduct(inputArray) {
    var current = Number.NEGATIVE_INFINITY
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i]*inputArray[i+1] > current){
            current = inputArray[i]*inputArray[i+1]
        }
    }
    return current
}