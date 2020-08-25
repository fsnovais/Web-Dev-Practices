function accum(s){
    const list = s.split('')
    
    for (let i=0; i < list.length; i++){
        list[i] = list[i].toUpperCase() + list[i].toLowerCase().repeat(i)
    }
    return list.join('-')
}

console.log(accum("ZpglnRxqenU"))