import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'

export default function Water () {

    const nav = useNavigate()

    const [salarioMin, setSalarioMin] = useState(1302)
    const [percent, setPercent] = useState(2)
    const [gasto, setGasto] = useState(0)

    const mySal = (percent/100) * salarioMin
    const contaVal = mySal/1000

    const [contaValor, setContaValor] = useState(contaVal)
    const [value, setValue] = useState(0)

    function calcValue () {
        const finalVal = contaValor * gasto
        const val = parseInt(finalVal)
        setValue(val)
    }

    return (
        <section>
            <h1>Quantos litros de água você gastou?</h1>
            <p>O valor por litro de água é de R$ {contaValor}</p>
            <h4>O valor da sua conta é de R$ {value}</h4>
            <p>Você gastou {gasto} Litros</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                calcValue()
            }}>
                <input onChange={(e) => {
                    setGasto(e.target.value)
                }}/>
                <button type="submit">Enviar</button>
            </form>

            <button onClick={() => nav("/")}>Voltar ao inicio</button>
        </section>

    )
}