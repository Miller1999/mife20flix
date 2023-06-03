import styled from "styled-components";
import { Styledh3,StyledDiv } from "../Global";
import CampoTexto from "../components/CampoTexto/CampoTexto";

const StyledTitle = styled(Styledh3)`
    font-size:4vw;
`

const NuevoVideo = () =>{
    return(
        <StyledDiv>
            <StyledTitle>Nuevo Video</StyledTitle>
            <CampoTexto/>
        </StyledDiv>
    )
}

export default NuevoVideo