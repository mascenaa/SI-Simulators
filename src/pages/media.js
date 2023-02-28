import React, { useState } from "react";
import '../App.css'

function Avarage() {
    const [name, setName] = useState("Digite o nome do aluno")
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [avarage, setAvarage] = useState(0)
    function calcAvarage() {
        const firstGrade = parseFloat(first)
        const secondGrade = parseFloat(second)
        const av = (firstGrade + secondGrade) / 2
        setAvarage(av)
    }
    return(
            <section>
                <h1>Olá, vamos descobrir a média do aluno?</h1>
                <p>Nome do aluno: {name}</p>
                <p>A média dele foi de: {avarage} </p>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    calcAvarage()
                }} className="div">
                    <label>Digite o nome do aluno</label>
                    <input onChange={(e) => setName(e.target.value)} />

                    <label>Digite a primeira nota do aluno</label>
                    <input onChange={(e) => setFirst(e.target.value)} />

                    <label>Digite a segunda nota do aluno</label>
                    <input onChange={(e) => setSecond(e.target.value)}/>

                    <button type="submit">Somar</button>
                </form>
            </section>
        )
}

export default Avarage