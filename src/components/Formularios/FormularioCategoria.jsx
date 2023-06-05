import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";
import Boton from "../Button/Boton";
import React from 'react'
import { MuiColorInput } from 'mui-color-input'
import { ColorFormularios, StyledP } from "../../Global";
import { useState } from "react";


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
            var datos = {
                value,
                TituloC,
                DescripcionC,
                codigoC,
            }
            if(codigoC.value === "1234"){
                console.log(datos)
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