const process = require("process")
const readline = require("readline").createInterface({
    input: process.stdin,
    output : process.stdout
})

let nombre

readline.question("Introduzca el nombre:", nombre =>{
    readline.close()
    console.log(`El nombre es ${nombre}`)
}) 