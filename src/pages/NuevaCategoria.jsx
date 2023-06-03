
import { StyledTitle } from "./NuevoVideo";
import { StyledDiv } from "../Global";
import FormularioCategoria from "../components/Formularios/FormularioCategoria";
import BasicTable from "../components/Tabla/tabla";

const NuevaCategoria = () => {
return(
    <StyledDiv>
        <StyledTitle>Nueva Categoria</StyledTitle>
        <FormularioCategoria/>
        <BasicTable/>
    </StyledDiv>
)
}

export default NuevaCategoria