import { ColorPrimario,ColorSecundario,ColorLetras } from "../../Global";
import styled from "styled-components";

export const EstiloBoton = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: ${ColorPrimario};
    color:${ColorLetras};
    font-size: 20px;
    font-weight: 600;
    transition: all .5s;
    margin:20px;
    
    &:hover{
        background-color: ${ColorSecundario};
        cursor: pointer;
        transform:scale(1.1)
    }
`
const Boton = (props) => {
    
    if(props.type === "reset"){
        return <EstiloBoton type={props.type} onClick={props.onClick}>{props.children}</EstiloBoton>
    }
    return <EstiloBoton type={props.type} >{props.children}</EstiloBoton>
}

export default Boton