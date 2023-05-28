import styled from "styled-components"
import logo from "../../assets/img/Logo.png"
import Logo from "../Logo/Logo"
import { ColorPrimario } from "../../Global"
import { StyledP } from "../../Global"

const StyledFooter = styled.footer`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    border-top:1px solid ${ColorPrimario};
    margin:0px;
`
const MarginP = styled(StyledP)`
    margin-bottom: 20px;
`
const Footer = () => {
    return (
        <StyledFooter>
            <Logo src={logo} alt="logo"/>
            <MarginP>Desarrollado por: Miller Arias - 2023</MarginP>
        </StyledFooter>
    )
}

export default Footer