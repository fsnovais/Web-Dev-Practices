function findEvenIndex(arr){
  let leftSum = 0
  for (let i = 0; i < arr.length -1; i++){
    i === 0 ? leftSum += arr[i] : leftSum += arr[i - 1]
    console.log('l '+ leftSum)
    let rightSum = 0
    for (let j = i; j < arr.length -1; j++){
        rightSum += arr[j + 1]
        console.log('r '+ rightSum)
    }
    if(leftSum === rightSum){
        return i
    }
  }
  return -1
}

console.log(findEvenIndex(20,10,-80,10,10,15,35))