import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Button/Boton";
import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import { ColorFormularios, StyledP } from "../../Global";
import { useState,useEffect } from "react";
import { buscarC,apiC } from "../../api/api";
import Axios from "axios";
import {v4 as uuid} from "uuid"


const DivModificado = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
`   

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
    margin:50px 0px;
`

const ModP = styled(StyledP)`
    color:${ColorFormularios};
    font-size:20px;
`

const FormularioCategoria = (props) => {
    const {Categorias,setCategorias} = props
    useEffect(()=>{
        buscarC(apiC.baseURL,(response) =>{
            console.log(response)
            setCategorias(response)
            console.log("Esta es la lista:", Categorias)
        })
    },[setCategorias])
    const [value, setValue] = useState('#ffffff')
    const [TituloC,setTituloC] = useState({
        value:"",
        valid: null
    }) 
    const [DescripcionC,setDescripcionC] = useState({
        value:"",
        valid: null
    })
    const [codigoC,setCodigoC] = useState({
        value:"",
        valid: null
    })
    const handleChange = (newValue) => {
        setValue(newValue)
    }
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
    const limpiar = () => {
        setValue('#ffffff')
        setCodigoC({value:"",valid:false})
        setTituloC({value:"",valid:false})
        setDescripcionC({value:"",valid:false})
    }
    const ColorPicker = () => {
        return (
            <DivModificado>
                <ModP>Escoge el color de la categoria</ModP>
                <MuiColorInput value={value} onChange={handleChange} />
            </DivModificado>
        )
        }
        const envio = (e) => {
            e.preventDefault()
            if(codigoC.value === "1234"){
                const Categorias = async (id,Titulo,Descripcion,color) =>{
                    const {Categorias} = await Axios.post(
                        "http://localhost:5000/Categorias",
                        {
                            id,
                            Titulo,
                            Descripcion,
                            color
                        }
                    )
                    console.log(Categorias)
                }
                Categorias(uuid(),TituloC.value,DescripcionC.value,value)
                console.log("Si fue enviado")
                setInterval(()=>{window.location.href="https://mife20flix.vercel.app/NuevaCategoria"},1000)
            }
            else{
                console.log("codigo incorrecto")
                console.log(codigoC)
            }
        }
    return(
        <StlyedForm onSubmit={envio}>
            <CampoTexto 
            label="Nombre de la categoria" 
            type="text" 
            setValue={setTituloC}
            valor={TituloC.value}
            error={TituloC.valid}
            helperText={TituloC.valid ? "Debe ser mayor a 3 caracteres" : ""}
            onBlur={(e)=>{
                const title = e.target.value
                const valido = validarNombre(title)
                setTituloC({value:title,valid:valido})
            }}
            />
            <CampoTexto 
            label="Descripcion" 
            type="text" 
            setValue={setDescripcionC}
            valor={DescripcionC.value}
            error={DescripcionC.valid}
            helperText={DescripcionC.valid ? "Debe ser mayor a 3 caracteres" : ""}
            onBlur={(e)=>{
                const description = e.target.value
                const valido = validarNombre(description)
                setDescripcionC({value:description,valid:valido})
            }}/>
            <ColorPicker/>
            <CampoTexto 
            label="Codigo de seguridad" 
            type="number" 
            setValue={setCodigoC}
            valor={codigoC.value}
            error={!codigoC.valid}
            helperText={!codigoC.valid ? "Codigo incorrecto" : ""}
            onBlur={(e)=>{
                const code = e.target.value
                const valido = CodigoValido(code)
                setCodigoC({value:code,valid:valido})
            }}/>
            <HorizontalDiv>
                <Boton type="submit">Guardar</Boton>
                <Boton type="reset" onClick={limpiar}>Limpiar</Boton>
            </HorizontalDiv>
        </StlyedForm>
    )
}

export default FormularioCategoria