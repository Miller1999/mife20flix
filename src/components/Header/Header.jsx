import styled from "styled-components"
import logo from "../../assets/img/Logo.png"
import Logo from "../Logo/Logo"
import Boton from "../Button/Boton"
import React from "react"
import { Link } from "react-router-dom"
import { ColorFondoHeader, ColorPrimario } from "../../Global"

const EstiloHeader = styled.header`
    width: 100%;
    display:flex;
    padding:10px;
    box-sizing:border-box;
    align-items:center;
    gap: 70vw;
    background-color:${ColorFondoHeader};
    border-bottom: 1px ${ColorPrimario} solid;
`

const Header = () => {
    return(
        <EstiloHeader>
            <Link to="/"><Logo src={logo} alt="mife20flix"/></Link>
            <Link to="/NuevoVideo"><Boton>Nuevo video</Boton></Link>
        </EstiloHeader>
    )
}

export default Header