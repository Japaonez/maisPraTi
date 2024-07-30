import { useState } from "react";

function Form2(){
    const [endereco, setEndereco] = useState({
        rua: "",
        cidade: "",
        cep: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setEndereco(prev => ({
            ... prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!endereco.rua || !endereco.cidade || !endereco.cep)
            alert("Alerta")
        else
            alert(`Endereco\nRua: ${endereco.rua}\nCidade: ${endereco.cidade}\ncep: ${endereco.cep}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="rua" value={endereco.rua} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="cidade" value={endereco.cidade} onChange={handleChange}/>
            </label>
            <br />
            <label>
                cep:
                <input type="text" name="cep" value={endereco.cep} onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submeter</button>
        </form>
    )
}

export default Form2