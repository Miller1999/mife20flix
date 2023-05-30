import styled from "styled-components";
import { StyledP } from "../../../Global";

const Container = styled.div`
    display:flex;

`

const ContainerVideoCard = styled.div`
    width: 350px;
    height: 250px;
    display:flex;
    padding:10px;
    align-items: center;
    margin:20px;
    flex-direction: column;
    background-color:#373b35;
    border-radius: 50px;
    border: 1px red solid;
    box-shadow:  30px 30px 60px #292b27, -30px -30px 60px #373b35;
`

const StyledVideoCard = styled.img`
    width: 90%;
    height: 90%;
    margin:10px;
    border-radius:50px;
`

const Pshort = styled(StyledP)`
    font-size: 20px;
`
const VideoCard = (props) => {
    const Detalles = () => {
        let data = require('../../../Data/initial-data.json')
        return data
    }

    const data  = Detalles()
    console.log(data)
    const info = data.data
    return (
        <Container>
            {
                info.map((video) => {
                    return(
                        <a href={video.url} target="_blank" rel="noreferrer" key={video.Nombre}><ContainerVideoCard >
                        <StyledVideoCard src={video.Imagenvideo} alt={video.Nombre}/>
                        <Pshort>{video.Nombre}</Pshort>
                        </ContainerVideoCard></a>
                        )
                    })
                    
            }
            </Container>
    )
}

export default VideoCard