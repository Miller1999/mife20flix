import styled from "styled-components";
import { Styledh3,StyledDiv, ColorPrimario } from "../Global";
import FormularioVideo from "../components/Formularios/FormularioVideo";


export const StyledTitle = styled(Styledh3)`
    font-size:4vw;
    color:${ColorPrimario};
`

const NuevoVideo = () =>{
    return(
        <StyledDiv>
            <StyledTitle>Nuevo Video</StyledTitle>
            <FormularioVideo/>
        </StyledDiv>
    )
}

export default NuevoVideo