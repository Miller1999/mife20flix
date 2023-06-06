import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Selector from "../Select/Select";
import Boton from "../Button/Boton";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import {v4 as uuid} from "uuid"

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
    const {Categorias,setCategorias} = props
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
        if(Codigo.value === "1234"){
            if(Categoria === "TikTok"){
                const TikTok = async (id,Nombre,url,Imagenvideo,Descripcion) =>{
                    const {TikTok} = await Axios.post(
                        "http://localhost:5000/Tiktok",
                        {
                            id,
                            Nombre,
                            url,
                            Imagenvideo,
                            Descripcion
                        }
                    )
                    console.log(TikTok)
                }
                TikTok(uuid(),Nombre.value,url.value,ImagenVideo.value,Descripcion.value)
            }
            if(Categoria === "Youtube"){
                const Youtube = async (id,Nombre,url,Imagenvideo,Descripcion) =>{
                    const {Youtube} = await Axios.post(
                        "http://localhost:5000/Youtube",
                        {
                            id,
                            Nombre,
                            url,
                            Imagenvideo,
                            Descripcion
                        }
                    )
                    console.log(Youtube)
                }
                Youtube(uuid(),Nombre.value,url.value,ImagenVideo.value,Descripcion.value)
            }
            if(Categoria === "Twitch"){
                const Twitch = async (id,Nombre,url,Imagenvideo,Descripcion) =>{
                    const {Twitch} = await Axios.post(
                        "http://localhost:5000/Twitch",
                        {
                            id,
                            Nombre,
                            url,
                            Imagenvideo,
                            Descripcion
                        }
                    )
                    console.log(Twitch)
                }
                Twitch(uuid(),Nombre.value,url.value,ImagenVideo.value,Descripcion.value)
            }
            if(Categoria === "Instagram"){
                const Instagram = async (id,Nombre,url,Imagenvideo,Descripcion) =>{
                    const {Instagram} = await Axios.post(
                        "http://localhost:5000/Instagram",
                        {
                            id,
                            Nombre,
                            url,
                            Imagenvideo,
                            Descripcion
                        }
                    )
                    console.log(Instagram)
                }
                Instagram(uuid(),Nombre.value,url.value,ImagenVideo.value,Descripcion.value)
            }
            console.log("Si fue enviado")
            setInterval(()=>{window.location.href="https://mife20flix.vercel.app/"},1000)
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
            Categorias={Categorias}
            setCategorias={setCategorias}
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