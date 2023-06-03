import styled from "styled-components";
import banner from "../../assets/img/banner.png"
import { Styledh3,StyledP,Fuente1 } from "../../Global";


const Container = styled.div`
    display:flex;
    position:relative;
    flex-direction: column;
`

const ContainerText = styled.div`
    position:absolute; 
    left:10%;
    bottom:30%;
    width:40%;
`
const ContainerVideo = styled.div`
    position:absolute;
    right:10%;
    top:20%;
`

const StyledBanner = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.8;
    margin: 0px;
`
const StyledIframe = styled.iframe`
    height:378px;
    width:620px;
    border-radius: 20px;
`

const Banner = () => {
    return (
        <Container>
            <StyledBanner src={banner} alt="Offline" />
            <ContainerText>
                <Styledh3><Fuente1/>Mife20</Styledh3>
                <StyledP>Soy Mife20, el otro lado de Miller Arias, el desarrollador de esta pagina. Yo me dedico principalmente a hacer Streaming en Twitch, pero tambien me gusta editar y subir videos a otras redes sociales como: Youtube y Tiktok, ademas subo dibujos a Instagram</StyledP>
            </ContainerText>
            <ContainerVideo>
                <StyledIframe src="https://player.twitch.tv/?video=1024526244&parent=localhost:3000" frameBorder="0" allowFullScreen={true} scrolling="no" title="Presentacion"/>
            </ContainerVideo>
        </Container>
    )
}
export default Banner
