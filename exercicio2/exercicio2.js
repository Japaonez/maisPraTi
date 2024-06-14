const prompt = require('prompt-sync')()

let opcao

do{
    opcao = parseInt(prompt("Qual exercício?(0 para sair): "))

    switch(opcao){
        case 1:
            console.log("Quantos cigarros você fuma?")

            let dias = parseInt(prompt("Por dia: "))
            let anos = parseInt(prompt("Por quantos anos: "))

            let total = dias * (anos * 365)  * 600
            total = total / 60 / 60

            console.log("Você perdeu", Math.floor(total / 24) , "dias e", Math.floor(total % 24), "minutos de vida")
            break;
        case 2:
            console.log("Ande no limite")

            let velocidade = parseInt(prompt("Qual a velocidade atual do carro: "))

            if(velocidade > 80)
            console.log("Você foi multado em R$", (velocidade - 80) * 5, "por estar andando em", velocidade, "Km/h")
            break;
        case 3:
            console.log("Custo por Km")

            let km = parseInt(prompt("Quantos Km?: "))
            let total3

            if(km <= 200)
                total3 = km * 0.5
            else
                total3 = km * 0.45

            console.log("A viagem de", km, "km custará R$", total3)
            break;
        case 4:
            console.log("Forme um triângulo")

            let A = parseInt(prompt("Lado 1: "))
            let B = parseInt(prompt("Lado 2: "))
            let C = parseInt(prompt("Lado 3: "))

            let triangulo

            if(A < B + C && B < A + C && C < A + B)
                triangulo = "Forma um triângulo"
            else
                triangulo = "Não forma um triângulo"

            console.log(triangulo)
            break;
        case 5:
            console.log("Jokempo")

            let jokempo = ["pedra", "papel", "tesoura"]

            let random5 = Math.floor(Math.random() * jokempo.length)

            console.log("1 - pedra\n2 - papel\n3 - tesoura")
            let escolhaJokempo = prompt("Escolha: ")

            if((escolhaJokempo - 1 == 0 && random5 == 1) || (escolhaJokempo - 1 == 1 && random5 == 2) || (escolhaJokempo - 1 == 2 && random5 == 0))
                console.log(jokempo[escolhaJokempo - 1], "x", jokempo[random5] + "\nVocê perdeu!")
            else if((escolhaJokempo - 1 == 0 && random5 == 0) || (escolhaJokempo - 1 == 1 && random5 == 1) || (escolhaJokempo - 1 == 2 && random5 == 2))
                console.log(jokempo[escolhaJokempo - 1], "x", jokempo[random5] + "\nEmpate!")
            else
                console.log(jokempo[escolhaJokempo - 1], "x", jokempo[random5] + "\nVocê ganhou!")
            break;
        case 6:
            console.log("Acerte o número entre 1 e 5")

            let random6 = Math.floor(Math.random() * 5) + 1
            let num6

            do{
                num6 = prompt("Adivinhe: ")
                if(num6 != random6)
                    console.log("Errou!")
            }while(num6 != random6)

            console.log("Acertou o numero", random6)
            break;
        case 7:
            console.log("Aluguel de carro")

            let carro = parseInt(prompt("Carro a ser alugado\n1 - Popular\n2 - Luxo\nEscolha: "))
            let dias7 = parseInt(prompt("Quantos dias irá alugar?: "))
            let km7 = parseInt(prompt("Quantos Km's percorrido: "))

            if(carro == 1){
                if(km7 <= 100)
                    console.log("O preço final a ser pago é de R$", (km * 0.20) + (dias7 * 90))
                else
                    console.log("O preço final a ser pago é de R$", (km * 0.10) + (dias7 * 90))
            }else if(carro == 2){
                if(km7 <= 200)
                    console.log("O preço final a ser pago é de R$", (km * 0.30) + (dias7 * 150))
                else
                    console.log("O preço final a ser pago é de R$", (km * 0.25) + (dias7 * 150))
            }else if(carro != 1 && carro != 2 && km7 < 1 && dias7 < 1)
                console.log("Algo deu errado!")
            break;
        case 8:
            console.log("Programa fidelidade vida saudavel")

            let mes8 = parseInt(prompt("Quantas horas de atividade no mês: "))

            if(mes8 < 11)
                console.log("Você faturou R$", (mes8 * 2) * 0.05, "com um total de", mes8 * 2, "pontos")
            else if(mes8 < 21)
                console.log("Você faturou R$", (mes8 * 5) * 0.05, "com um total de", mes8 * 5, "pontos")
            else if(mes8 > 20)
                console.log("Você faturou R$", (mes8 * 10) * 0.05, "com um total de", mes8 * 10, "pontos")
            else
                console.log("Precisa fazer mais exercícios")
            break;
        case 9:
            console.log("Comparar salario entre os sexo")

            let sexo = []
            let salario = []
            let opcao9

            do{
                do{
                    console.log("\n1 - homem\n2 - mulher\n")
                    opcao9 = parseInt(prompt("Sexo do funcionario:"))
                }while(opcao9 != 1 && opcao9 != 2)
                sexo.push(opcao9)
                salario.push(parseFloat(prompt("Salário do funcionario (R$): ")))

                opcao9 = parseInt(prompt("Quer continuar? (0 Não / 1 Sim): "))
            }while(opcao9 != 0)

            let salarioHomem = 0
            let salarioMulher = 0

            for(let i = 0; i < sexo.length; i++){
                if(sexo[i] == 1)
                    salarioHomem += salario[i]
                else
                    salarioMulher += salario[i]
            }

            console.log("Salário pago aos homens: R$", salarioHomem, "\nSalario pago as mulheres: R$", salarioMulher)
            break;
        case 10:
            console.log("Usando laço enquanto faça")

            let somatorio10 = 0, menor10, media10 = 0, par10 = 0, num10, opcao10, qnt10 = 0

            do{
                num10 = parseInt(prompt("Digite um numero: "))
                qnt10++
                if(qnt10 == 1)
                    menor10 = num10
                else(num10 < menor10)
                    menor10 = num10
                somatorio10 += num10
                media10 += num10
                if(num10 % 2 == 0)
                    par10++
            }while(opcao10 != 0)

            media10 = media10 / qnt10

            console.log("Somatorio =", somatorio10, "\nMenor valor =", menor10, "\nmédia =", media10.toFixed(2), "\nnumeros pares =", par10)
            break;
        case 11:
            console.log("Progressão Aritmetica (PA)")

            let termo11 = parseInt(prompt("Primeiro termo: "))
            let razao11 = parseInt(prompt("Razão: "))
            let soma11 = 0;

            for(let i = 0; i < 10; i++){
                // console.log(termo11 + razao11 * i, "")
                process.stdout.write(termo11 + razao11 * i + " ");
                soma11 += termo11 + razao11 * i
            }

            console.log("\n" + soma11)
            break;
        case 12:
            console.log("10 primeiros elementos Fibonacci")

            let alt12 = 1, num12 = 0, var12

            for(let i = 0; i < 10; i++){
                var12 = num12
                num12 += alt12
                alt12 = var12
                process.stdout.write(num12 + " ")
            }

            console.log("")
            break;
        case 13:
            console.log("Atribuindo os elementos de Fibonacci em um vetor")

            let fibonacci = []

            let alt13 = 1, num13 = 0, var13

            for(let i = 0; i < 15; i++){
                var13 = num13
                num13 += alt13
                alt13 = var13
                fibonacci.push(num13)
            }

            console.log(fibonacci)
            break;
        case 14:
            console.log("Mostrar lista de nomes invertida")

            let nomes = []

            for(let i = 0; i < 7; i++)
                nomes.push(prompt("Nome da pessoa: "))

            console.log(nomes.reverse())
            break;
        case 15:
            console.log("Mostrar a posição e o numero par em um vetor")

            let vetor15 = []

            for(let i = 0; i < 10; i++)
                vetor15.push(parseInt(prompt("Um numero: ")))

            for(let i = 0; i < 10; i++){
                if(vetor15[i] % 2 == 0)
                    console.log(i, vetor15[i])
            }
            break;
        case 16:
            console.log("Vetor gerado automaticamente e ordenado")

            let vetor16 = []

            for(let i = 0; i < 20; i++)
                vetor16.push(Math.floor(Math.random() * 100))

            console.log(vetor16)
            console.log(vetor16.sort())
            break;
        case 17:
            console.log("Menores de idade")

            let pessoa = []
            let idade = []


            for(let i = 0; i < 9; i++){
                pessoa.push(prompt("Nome da pessoa: "))
                idade.push(parseFloat(prompt("Idade da pessoa: ")))
            }

            for(let i = 0; i < pessoa.length; i++){
                if(idade[i] < 18)
                    console.log(pessoa[i], idade[i])
            }

            break;
        case 18:
            console.log("Não entendi")
            break;
        case 19:
            console.log("Não entendi")
            break;
        case 20:
            console.log("Folha mensal de pagamento")

            let matricula = []
            
    }   
}while(opcao > 0)