import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main ( ) {

    const nav = useNavigate()

    return (
        <>
        <h1>
            Calcule sua conta de agua!
        </h1>
        <button onClick={() => {
            nav("/water")
        }}>Clique aqui! 😁</button>


        <h1>Calcule a média do user de acordo com duas provas</h1>
        <button onClick={() => nav("/avarage")}>Clique aqui!</button>
        </>
    )
}