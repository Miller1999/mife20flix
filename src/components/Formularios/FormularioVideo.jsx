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
    //Declaraciones
    const [Nombre,setNombre] = useState({
        value:"",
        valid: null
    })
    const [url,setUrl] = useState({
        value:"",
        valid: null
    })
    const [ImagenVideo,setImagen] = useState({
        value:"",
        valid: null
    })
    const [Categoria,setCategoria] = useState("")
    const [Descripcion,setDescripcion] = useState({
        value:"",
        valid: null
    })
    const [Codigo,setCodigo] = useState({
        value:"",
        valid: null
    })
//Validaciones
    function validarNombre(nombre){
        if(nombre.length <=3 ){
            return  true
        }
        else{
            return false
        }
    }
    function CodigoValido(numero){
        if(numero !== "1234"){
            return false
        }
        else{
            return true
        }
    }
    function URLvalida(url){
        try{
            new URL(url)
            return (true)
        }
        catch{
            return (false)
        }
    }
//Limpiar campos
    const limpiar = () => {
        setNombre({value:"",valid:false})
        setUrl({value:"",valid:false})
        setImagen({value:"",valid:false})
        setDescripcion({value:"",valid:false})
        setCategoria("")
        setCodigo({value:"",valid:false})
    }
//Enviar info
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
        if(Codigo.value === "1234"){
            console.log(datos)
        }
        else{
            console.log("codigo incorrecto")
            console.log(Codigo)
        }
    }

    return(
        <StlyedForm onSubmit={envio}>
            <CampoTexto 
            id="Nombre"
            label="Titulo del video" 
            type="text" 
            valor={Nombre.value}
            setValue={setNombre}
            error={Nombre.valid}
            helperText={Nombre.valid ? "Debe ser mayor a 3 caracteres" : ""}
            onBlur={(e)=>{
                const name = e.target.value
                const valido = validarNombre(name)
                setNombre({value:name,valid:valido})
            }}
            />
            <CampoTexto 
            id="url"
            label="Link del video" 
            type="text" 
            valor={url.value}
            setValue={setUrl}
            error={!url.valid}
            helperText={!url.valid ? "Ingrese una URL valida" : ""}
            onBlur={(e)=>{
                const url = e.target.value
                const valido = URLvalida(url)
                setUrl({value:url,valid:valido})
            }}
            />
            <CampoTexto 
            id="imagen"
            label="Link imagen del video" 
            type="url" 
            valor={ImagenVideo.value}
            setValue={setImagen}
            error={!ImagenVideo.valid}
            helperText={!ImagenVideo.valid ? "Ingrese una URL valida" : ""}
            onBlur={(e)=>{
                const imagen = e.target.value
                const valido = URLvalida(imagen)
                setImagen({value:imagen,valid:valido})
            }}
            />
            <Selector
            id="categoria"
            valor={Categoria}
            setValue={setCategoria}
            />
            <CampoTexto 
            id="descripcion"
            label="Descripcion" 
            type="text" 
            setValue={setDescripcion}
            valor={Descripcion.value}
            error={Descripcion.valid}
            helperText={Descripcion.valid ? "Debe ser mayor a 3 caracteres" : ""}
            onBlur={(e)=>{
                const description = e.target.value
                const valido = validarNombre(description)
                setDescripcion({value:description,valid:valido})
            }}
            />
            <CampoTexto 
            id="codigo"
            label="Codigo de seguridad" 
            type="number"
            valor={Codigo.value}
            setValue={setCodigo}
            error={!Codigo.valid}
            helperText={!Codigo.valid ? "Codigo incorrecto" : ""}
            onBlur={(e)=>{
                const code = e.target.value
                const valido = CodigoValido(code)
                setCodigo({value:code,valid:valido})
            }}
            />

            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="reset" onClick={limpiar}>Limpiar</Boton>
                <Link to="/NuevaCategoria"><Boton type="button">Nueva Categoria</Boton></Link> 
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioVideo