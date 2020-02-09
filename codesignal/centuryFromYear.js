function centuryFromYear(year) {
    century = year / 100 + 1
    return parseInt(century)
}
console.log(centuryFromYear(2001))