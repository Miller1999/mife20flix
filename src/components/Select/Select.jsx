import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {v4 as uuid} from "uuid"
import { ModDiv } from '../CampoTexto/CampoTexto';
import {theme} from "../CampoTexto/CampoTexto"
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { buscarC,apiC } from '../../api/api';

const Categoria = [
    {
        id:uuid(),
        titulo:"Youtube",
    },
    {
        id:uuid(),
        titulo:"TikTok"
    },
    {
        id:uuid(),
        titulo:"Twitch"
    },
    {
        id:uuid(),
        titulo:"Instagram"
    }
]

const Selector = (props) => {
    const {setValue,valor,Categorias,setCategorias} = props
    useEffect(()=>{
        buscarC(apiC.baseURL,(response) =>{
            console.log(response)
            setCategorias(response)
            console.log("Esta es la lista:", Categorias)
        })
    },[setCategorias])
    const cambio = (e)=> {
        setValue(e.target.value)
    }
    return(
        <ModDiv>
        <ThemeProvider theme={theme}>
            <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Categoria</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                required
                value={valor}
                onChange={cambio}
                >
                {Categorias.map((categoria) => (
                    <MenuItem key={categoria.id} value={categoria.Titulo}>{categoria.Titulo}</MenuItem>
                ))}
                </Select>
            </FormControl>
        </ThemeProvider>
        </ModDiv>

    )
}

export default Selector