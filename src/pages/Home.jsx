import Banner from "../components/Banner/Banner";
import styled from "styled-components";
import { Styledh3,CategoriaTikTok,CategoriaYoutube,CambioColorInstagram,CambioColorTwitch } from "../Global";
import { Fragment } from "react";
import Carrusel from "../components/Carrusel/Carrusel/Carrusel";

const StyledConetenedor = styled.section`
    display:flex;
    flex-direction: column;
    padding:100px;
`

const Instagram = styled(Styledh3)`
    background: -webkit-linear-gradient(90deg, rgba(255,177,6,1) 0%, rgba(255,33,55,1) 50%, rgba(129,49,244,1) 100%);
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 1s;
    &:hover{
        animation:${CambioColorInstagram} 5s linear infinite;
    }
    
`
const Twitch = styled(Styledh3)`
    animation:${CambioColorTwitch} 5s linear infinite;
`
const Youtube = styled(Styledh3)`
    color: ${CategoriaYoutube};
`
const TikTok = styled(Styledh3)`
    color: ${CategoriaTikTok};
`

const Home = () => {
    return(
        <Fragment>
        <Banner/>
        <StyledConetenedor>
            <Youtube>Youtube</Youtube> 
            <Carrusel Categoria="Youtube"/>
            <TikTok>TikTok</TikTok>
            <Twitch>Twitch</Twitch>
            <Instagram>Instagram</Instagram>
        </StyledConetenedor>
        </Fragment>
    )
}

export default Home