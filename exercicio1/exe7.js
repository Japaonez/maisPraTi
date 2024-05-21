const prompt = require('prompt-sync')()

console.log("Comprem maçãs, R$ 0,30 cada ou R$ 0,25 se comprar mais de uma duzia")

let qntMacas = parseInt(prompt("Quantidade de maçãs a serem compradas: "))
let total = (qntMacas < 12) ? qntMacas * 0.30 : qntMacas * 0.25

console.log(`O total deu = R$`, total.toFixed(2))