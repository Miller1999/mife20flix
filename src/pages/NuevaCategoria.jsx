
import { StyledTitle } from "./NuevoVideo";
import { StyledDiv } from "../Global";
import FormularioCategoria from "../components/Formularios/FormularioCategoria";
import BasicTable from "../components/Tabla/tabla";
import { useState } from "react";


const NuevaCategoria = () => {
    const [Categorias,setCategorias] = useState([])
return(
    <StyledDiv>
        <StyledTitle>Nueva Categoria</StyledTitle>
        <FormularioCategoria Categorias={Categorias} setCategorias={setCategorias} />
        <BasicTable Categorias={Categorias} setCategorias={setCategorias} />
    </StyledDiv>
)
}

export default NuevaCategoria