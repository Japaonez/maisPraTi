import { useState } from "react";

function Form(){
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`Olá ${name}`)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={name} onChange={handleChange}/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form