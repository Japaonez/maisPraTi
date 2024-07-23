import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    // const stateData = useState(0)
    // console.log(stateData)

    return(
        <>
            <div>
                <p>Você clicou {count} vezes</p>
                <button onClick={() => setCount(count + 1)}>Clique</button>
            </div>
        </>
    )
}

export default Counter