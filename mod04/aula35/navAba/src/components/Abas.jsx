import { useState } from "react";
import "./Abas.css"

const conteudos = [
    [
        "Texto primeiro",
        "Texto segundo",
        "Texto terceiro"
    ],
    [
        "Texto primeiro do segundo",
        "Texto segundo do segundo",
        "Texto terceiro do segundo"
    ],
    [
        "Texto primeiro do terceiro",
        "Texto segundo do terceiro",
        "Texto teceiro do terceiro"
    ]
  ]

function Abas(){
    const [count, setCount] = useState([])

    return(
        <>
            <header>
                {/* <img src="../img/javascript-icon.png" alt="Javascript logo"> */}
                <div>
                    <h1>Vanilla JS</h1>
                    <p>Javascript puro</p>
                </div>
            </header>

            <div id="tabs">
                <menu>
                    <button onClick={() => setCount(conteudos[0])}>Javascript</button>
                    <button onClick={() => setCount(conteudos[1])}>React</button>
                    <button onClick={() => setCount(conteudos[2])}>Node</button>
                </menu>
                <div id="content">
                    <ul>
                        {count.map((map, index) => (
                            <li key={index}>{map}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Abas