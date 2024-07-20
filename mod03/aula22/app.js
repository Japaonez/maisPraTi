class Consulta{
    constructor(nome, data, horario){
        this.nome = nome
        this.data = data
        this.horario = horario
    }

    validadeData(){
        for(let i in this){
            if(this[i] == undefined || this[i] == "")
                return false
        }
        return true
    }
}

class Database{
    constructor(){
        const id = localStorage.getItem("id")

        if(id == null)
            localStorage.setItem("id", 0)
    }

    createConsulta(consulta){
        const id = getId()
        localStorage.setItem(id, JSON.stringify(consulta))
        localStorage.setItem('id', id)
    }

    getConsulta(consulta){
        const filteredConsulta = Array()

        filteredConsulta = this.getConsultas()

        if(consulta.nome != "")
            filteredConsulta = filteredConsulta.filter(c => c.nome == consulta.nome)

        if(consulta.data != "")
            filteredConsulta = filteredConsulta.filter(c => c.data == consulta.data)

        if(consulta.horario != "")
            filteredConsulta = filteredConsulta.filter(c => c.horario == consulta.horario)

        return filteredConsulta
    }

    getConsultas(){
        const consultas = Array()
        const id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            const consulta = JSON.parse(localStorage.getItem(i))

            if(!consulta)
                continue
            
            consulta.id = 1
            consultas.push(consulta)
        }

        if(consultas)
            return consultas
    }

    removeConsulta(id){
        localStorage.removeItem(id)
    }
}

const database = new Database()

function getId(){
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1
}

function registerConsulta(){
    const nome = document.getElementById('nome').value
    const data = document.getElementById('data').value
    const horario = document.getElementById('horario').value

    const consulta = new Consulta(nome, data, horario)

    if(consulta.validadeData())
        database.createConsulta(consulta)
}

function loadConsultas(consultas = Array()){
    if(consultas.length == 0)
        consultas = database.getConsultas()

    const tabela = document.getElementById('tabela')

    consultas.forEach(element => {
        const row = tabela.insertRow()

        row.insertCell(0).innerHTML = element.nome

        let arr = element.data.split('-')
        let data = arr[2] + "/" + arr[1] + "/" + arr[0]
        let horario

        if(element.horario < 10)
            horario = `0${element.horario}:00`
        else
            horario = `${element.horario}:00`

        row.insertCell(1).innerHTML = data
        row.insertCell(2).innerHTML = horario

        const btn = document.createElement('button')

        btn.id = element.id
        btn.innerHTML = 'Deletar'
        btn.onclick = ()=>{
            const id = element.id
            database.removeConsulta(id)
            window.location.reload()
        }

        row.insertCell(3).append(btn)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.body.contains(document.getElementById('tabela')))
        loadConsultas()
})