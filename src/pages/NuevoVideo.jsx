import styled from "styled-components";
import { Styledh3,StyledDiv, ColorPrimario } from "../Global";
import FormularioVideo from "../components/Formularios/FormularioVideo";
import { useState } from "react";



export const StyledTitle = styled(Styledh3)`
    font-size:4vw;
    color:${ColorPrimario};
`



const NuevoVideo = () =>{
    const [Categorias,setCategorias] = useState([])
    return(
        <StyledDiv>
            <StyledTitle>Nuevo Video</StyledTitle>
            <FormularioVideo Categorias={Categorias} setCategorias={setCategorias} />
        </StyledDiv>
    )
}

export default NuevoVideo