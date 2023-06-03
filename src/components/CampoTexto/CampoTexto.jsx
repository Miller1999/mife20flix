import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';


const ModDiv = styled.div`

    width:80%;
    margin:20px;
    padding-bottom:20px;
`
const theme = createTheme({
    palette:{
        primary:{
            main: "#00A5CF"
        }
    },
    typography:{
        fontFamily:[
            "Raleway"
        ].join(","),
        fontSize:20
    }
})
const CampoTexto = (props) => {
    const {type,label,valid,helperText} = props
    return(
        <ModDiv>
            <ThemeProvider theme={theme}>
                <TextField 
                id="filled-basic" 
                label={label} 
                variant="filled" 
                size='normal' 
                fullWidth
                error={valid}
                type={type}
                helperText={helperText}
                />
            </ThemeProvider>
        </ModDiv>

    )
}

export default CampoTexto