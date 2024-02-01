//Function normal tem this variável

function compareThis (param) {
    console.log(this === param)
}

compareThis(global)

const obj = {}
compareThis(obj)
compareThis = compareThis.bind(obj)
compareThis(obj)

//Arrow Function não permite alterar o this

let compareArrowThis = param => console.log(param === this)

compareArrowThis(global)
compareArrowThis = compareArrowThis.bind(obj)
compareArrowThis(obj)
compareArrowThis(module.exports)

