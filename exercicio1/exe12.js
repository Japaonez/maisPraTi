const prompt = require('prompt-sync')()

console.log("Só irão aparecer números com resto igual a 5 dentre 1000 a 1999")

for(let i = 1000; i < 2000; i++)
    if(i % 11 == 5) console.log(i)