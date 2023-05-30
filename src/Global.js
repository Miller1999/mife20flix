//!Colocar los estilos generales de la pagina, colores, fuentes, tamaños de fuente
import Mostwasted from "./assets/fonts/Mostwasted.ttf"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

//Colores
export const CategoriaTikTok = "#ff1dd4"
export const CategotiaYoutube = "#ff0001"
export const CategoriaTwitch = "#a970ff"
export const ColorPrimario = "#B905F0"
export const ColorSecundario = "#00A5CF"
export const ColorFondoHeader = "#010400"
export const ColorFondo = "#30332E"
export const ColorLetras = "#FFFBFC"

export const Fuente1 = createGlobalStyle`
    @font-face {
        font-family: "Mostwasted" ;
        src: url(${Mostwasted});
    }
`

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${ColorFondo};
}

`
export const StyledP = styled.p`
    font-family:"Raleway",sans;
    font-size: 1.5vw;
    color: ${ColorLetras}
`

export default GlobalStyle