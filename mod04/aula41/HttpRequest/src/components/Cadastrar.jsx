import { useState } from "react"
import axios from "axios"

function Cadastrar(){
    const [dado, setDado] = useState({
        nome: "",
        altura: ""
    })

    const handleChange = async (e) => {
        const {name, value} = e.target

        setDado(prev => ({
            ... prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await axios.post("https://reqres.in/api/users", dado)

            console.log(response)

            alert(`Usuário criado com sucesso! ID ${response.data.id}`)
        } catch (e) {
            console.error(e)
            alert("Error")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input type="text" name="nome" value={dado.nome} onChange={handleChange}/>
            </div>
            <div>
                <label>Altura:</label>
                <input type="number" name="altura" value={dado.altura} onChange={handleChange}/>
            </div>
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Cadastrar