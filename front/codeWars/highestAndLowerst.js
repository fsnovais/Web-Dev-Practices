function highAndLow(numbers) {
  const list = numbers.split(' ')
  let max = parseInt(list[0])
  let min = parseInt(list[0])
  if (list.length === 1) {
    return (`${max} ${min}`)
  } else {
    for (let i = 0; i < list.length; i++) {
      let number = parseInt(list[i])
      number > max ? max = number : false
      number < min ? min = number : false
    }
    return (`${max} ${min}`)
  }
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))