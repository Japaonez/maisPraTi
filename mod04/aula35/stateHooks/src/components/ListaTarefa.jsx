import { useState } from "react";

function ListaTarefa(){
    const [count, setCount] = useState([])
    const [value, setValue] = useState("")

    const addLista = () => {
        setCount([ ... count, value])
        setValue("")
    }

    return(
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={addLista}>Adicionar tarefa</button>

            <ul>
                {count.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTarefa