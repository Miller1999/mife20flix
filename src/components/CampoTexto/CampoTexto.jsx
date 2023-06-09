import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';


export const ModDiv = styled.div`

    width:80%;
    margin:20px;
    padding-bottom:20px;
`
export const theme = createTheme({
    palette:{
        primary:{
            main: "#00A5CF"
        }
    },
    typography:{
        fontFamily:[
            "Raleway"
        ].join(","),
        fontSize:20,
        color: "#fff"
    }
})
const CampoTexto = (props) => {
    const {type,label,helperText,valor,setValue,id,error,onBlur,InputProps} = props
    const cambio = (e) =>{
        setValue(e.target.value)
    }
    return(
        <ModDiv>
            <ThemeProvider theme={theme}>
                <TextField 
                id={id}
                label={label} 
                variant="filled" 
                size='normal' 
                fullWidth
                error={error}
                type={type}
                helperText={helperText}
                multiline
                required
                value={valor}
                onChange={cambio}
                onBlur={onBlur}
                InputProps={InputProps}
                />
            </ThemeProvider>
        </ModDiv>

    )
}

export default CampoTexto