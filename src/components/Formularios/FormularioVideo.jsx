import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Selector from "../Select/Select";
import Boton from "../Button/Boton";
import { Link } from "react-router-dom";

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
`

const FormularioVideo = () => {
    return(
        <StlyedForm>
            <CampoTexto label="Titulo del video" type="text" valid={null} helperText="Debe ingresar el titulo del video"/>
            <CampoTexto label="Link del video" type="url" valid={null} helperText="Ingrese una URL valida"/>
            <CampoTexto label="Link imagen del video" type="url" valid={null} helperText="Ingrese una URL valida"/>
            <Selector/>
            <CampoTexto label="Descripcion" type="text" valid={null} helperText="Ingrese la descripcion del video" />
            <CampoTexto label="Codigo de seguridad" type="number" valid={null} helperText="Ingrese el codigo de seguridad valido" />
            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="button">Limpiar</Boton>
                <Link to="/NuevaCategoria"><Boton type="button">Nueva Categoria</Boton></Link> 
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioVideo