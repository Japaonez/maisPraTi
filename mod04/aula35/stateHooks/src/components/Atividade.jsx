import { useState } from "react";

function Atividade(){
    const [count, setCount] = useState("")

    return(
        <>
            {/* <textarea id="story" onChange={() => setCount(document.getElementById("story").value)}></textarea> */}
            <textarea id="story" onChange={(e) => setCount(e.target.value)}></textarea>
            <p>{count}</p>
        </>
    )
}

export default Atividade