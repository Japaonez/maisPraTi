const prompt = require('prompt-sync')()

console.log("50 primeiros números primos depois do 100")

let i = 0
let numero = 100
let ver = true

while(i < 51){
    for(let n = 2; n < numero; n++){
        if(numero % n == 0){
            n = numero
            ver = false
        }
    }
    if(ver == true){
        i++
        console.log(numero)
    }
    ver = true
    numero++
}