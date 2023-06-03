import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Button/Boton";
import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import { ColorFormularios, StyledP } from "../../Global";

const ColorPicker = () => {
const [value, setValue] = React.useState('#ffffff')

const handleChange = (newValue) => {
    setValue(newValue)
}

return (
    <DivModificado>
        <ModP>Escoge el color de la categoria</ModP>
        <MuiColorInput value={value} onChange={handleChange} />
    </DivModificado>
)
}

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

const FormularioCategoria = () => {
    return(
        <StlyedForm>
            <CampoTexto label="Nombre de la categoria" type="text" valid={null} helperText="Ingrese el nombre de la categoria"/>
            <CampoTexto label="Descripcion" type="text" valid={null} helperText="Ingrese la descripcion de la categoria" />
            <ColorPicker/>
            <CampoTexto label="Codigo de seguridad" type="number" valid={null} helperText="Ingrese el codigo de seguridad valido" />
            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="button">Limpiar</Boton>
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioCategoria