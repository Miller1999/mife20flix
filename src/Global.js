//!Colocar los estilos generales de la pagina, colores, fuentes, tamaños de fuente
import Mostwasted from "./assets/fonts/Mostwasted.ttf"
import { createGlobalStyle, keyframes } from "styled-components"
import styled from "styled-components"

//Colores
export const CategoriaTikTok = "#ff1dd4"
export const CategoriaYoutube = "#ff0001"
export const CategoriaTwitch = "#a970ff"
export const ColorPrimario = "#B905F0"
export const ColorSecundario = "#00A5CF"
export const ColorFondoHeader = "#010400"
export const ColorFondo = "#6d7569"
export const ColorLetras = "#FFFBFC"
export const ColorResaltado = "#535950"
export const ColorFormularios = "#2b2e2a"

export const Fuente1 = createGlobalStyle`
    @font-face {
        font-family: "Mostwasted" ;
        src: url(${Mostwasted});
    }
`

const GlobalStyle = createGlobalStyle`
body{
    background: linear-gradient(180deg, rgba(144,155,139,1) 0%, rgba(48,52,46,1) 100%);;
    font-family:"Raleway",sans;
}
`
export const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:100px;
`
export const StyledP = styled.p`
    font-size: 1.5vw;
    color: ${ColorLetras}
`
export const Styledh3 = styled.h3`
    display:inline-block;
    font-family: "Mostwasted",sans-serif;
    font-size: 5vw;
    color: ${ColorLetras};
    transition: 0.5s all;
    &:hover{
        transform:scale(1.05)
    }
`

export const CambioColorInstagram = keyframes`
    
    0%      {background: #ffb106;background-clip:text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    25%     {background: #ff2137;background-clip:text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    50%     {background: #8131f4;background-clip:text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    75%     {background: #ff2137;background-clip:text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
    100%    {background: #ffb106;background-clip:text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;}
`
export const CambioColorTwitch = keyframes`
    0%      {color: #9146ff}
    25%     {color: #6441a5}
    50%     {color: #392e5c}
    75%     {color: #6441a5}
    100%    {color: #9146ff}
`

export default GlobalStyle