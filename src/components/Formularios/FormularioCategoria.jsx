import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Button/Boton";
import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import { ColorFormularios, StyledP } from "../../Global";
import { useState } from "react";


const DivModificado = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`   

const HorizontalDiv = styled.div`
    display:flex;
    justify-content:space-between;
    gap:50px;
`

const StlyedForm = styled.form`
    display:flex;
    flex-direction: column;
    width:90%;
    align-items:center;
    margin:50px 0px;
`

const ModP = styled(StyledP)`
    color:${ColorFormularios};
    font-size:20px;
`

const FormularioCategoria = (props) => {
    const [value, setValue] = useState('#ffffff')
    const [TituloC,setTituloC] = useState("") 
    const [DescripcionC,setDescripcionC] = useState("")
    const [codigoC,setCodigoC] = useState("")
    const handleChange = (newValue) => {
        setValue(newValue)
    }
    const limpiar = () => {
        setValue('#ffffff')
        setCodigoC("")
        setTituloC("")
        setDescripcionC("")
    }
    const ColorPicker = () => {
        return (
            <DivModificado>
                <ModP>Escoge el color de la categoria</ModP>
                <MuiColorInput value={value} onChange={handleChange} />
            </DivModificado>
        )
        }
        const envio = (e) => {
            e.preventDefault()
            var datos = {
                value,
                TituloC,
                DescripcionC,
                codigoC,
            }
            console.log(datos)
        }
    return(
        <StlyedForm onSubmit={envio}>
            <CampoTexto 
            label="Nombre de la categoria" type="text" 
            valid={null} 
            valor={TituloC}
            setValue={setTituloC}
            helperText="Ingrese el nombre de la categoria"/>
            <CampoTexto 
            label="Descripcion" 
            type="text" 
            valid={null} 
            valor={DescripcionC}
            setValue={setDescripcionC}
            helperText="Ingrese la descripcion de la categoria" />
            <ColorPicker/>
            <CampoTexto 
            label="Codigo de seguridad" type="number" 
            valor={codigoC}
            valid={null} 
            setValue={setCodigoC}
            helperText="Ingrese el codigo de seguridad valido" />
            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="reset" onClick={limpiar}>Limpiar</Boton>
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioCategoria