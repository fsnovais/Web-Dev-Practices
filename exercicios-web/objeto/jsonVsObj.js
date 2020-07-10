const obj = {a:1,b:2,c:3, soma(){return a + b + c }}
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a:1, b:2, c:3 }"))
//console.log(JSON.parse("{ 'a':1, 'b':2 , 'c': 3}"))
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'))

console.log(JSON.parse('{"a":"String","b":true,"c": 2.4, "d":[2,3], "e": {"a":1,"b": 2}}'))
