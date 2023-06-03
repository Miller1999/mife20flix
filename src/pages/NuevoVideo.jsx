import styled from "styled-components";
import { Styledh3,StyledDiv, ColorPrimario } from "../Global";
import CampoTexto from "../components/CampoTexto/CampoTexto";

const StyledTitle = styled(Styledh3)`
    font-size:4vw;
    color:${ColorPrimario};
`

const NuevoVideo = () =>{
    return(
        <StyledDiv>
            <StyledTitle>Nuevo Video</StyledTitle>
            <CampoTexto label="Titulo del video" type="text" valid={null} helperText="Debe ingresar el titulo del video"/>
        </StyledDiv>
    )
}

export default NuevoVideo