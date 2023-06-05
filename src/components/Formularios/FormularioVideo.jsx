import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Selector from "../Select/Select";
import Boton from "../Button/Boton";
import { Link } from "react-router-dom";
import { useState } from "react";

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



const FormularioVideo = (props) => {
    const [Nombre,setNombre] = useState("")
    const [url,setUrl] = useState("")
    const [ImagenVideo,setImagen] = useState("")
    const [Categoria,setCategoria] = useState("")
    const [Descripcion,setDescripcion] = useState("")
    const [Codigo,setCodigo] = useState("")
    const limpiar = () => {
        setNombre('')
        setUrl("")
        setImagen("")
        setDescripcion("")
        setCategoria("")
        setCodigo("")
    }
    const envio = (e) => {
        e.preventDefault()
        let datos = {
            Nombre,
            url,
            ImagenVideo,
            Categoria,
            Descripcion,
            Codigo
        }
        console.log(datos)
    }
    return(
        <StlyedForm onSubmit={envio}>
            <CampoTexto 
            label="Titulo del video" 
            type="text" 
            valid={null} 
            valor={Nombre}
            setValue={setNombre}
            helperText="Debe ingresar el titulo del video"/>
            <CampoTexto 
            label="Link del video" 
            type="url" 
            valid={null} 
            valor={url}
            setValue={setUrl}
            helperText="Ingrese una URL valida"/>
            <CampoTexto 
            label="Link imagen del video" 
            type="url" 
            valor={ImagenVideo}
            valid={null} 
            setValue={setImagen}
            helperText="Ingrese una URL valida"/>
            <Selector
            valor={Categoria}
            setValue={setCategoria}
            />
            <CampoTexto 
            label="Descripcion" 
            type="text" 
            valid={null} 
            setValue={setDescripcion}
            valor={Descripcion}
            helperText="Ingrese la descripcion del video" />
            <CampoTexto 
            label="Codigo de seguridad" 
            type="number" 
            valor={Codigo}
            valid={null} 
            setValue={setCodigo}
            helperText="Ingrese el codigo de seguridad valido" />
            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="reset" onClick={limpiar}>Limpiar</Boton>
                <Link to="/NuevaCategoria"><Boton type="button">Nueva Categoria</Boton></Link> 
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioVideo