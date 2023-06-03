import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledVideoCardH,ContainerVideoCardH,Pshort,StyledVideoCardV,ContainerVideoCardV } from "../VideoCard/VideoCard";
import { Fragment } from "react";

const Carrusel = (props) => {
    const info = require("../../../Data/initial-data.json")
    const Youtube = info.Youtube
    const Instagram = info.Instagram
    const Twitch = info.Twitch
    const TikTok = info.Tiktok
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    if(props.Categoria === "Youtube"){
        return(
            <Slider {...settings}>
            {Youtube.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ContainerVideoCardH>
                            <StyledVideoCardH src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardH>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "Twitch"){
        return(
            <Slider {...settings}>
            {Twitch.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ContainerVideoCardH>
                            <StyledVideoCardH src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardH>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "TikTok"){
        return(
            <Slider {...settings}>
            {TikTok.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ContainerVideoCardV>
                            <StyledVideoCardV src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardV>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "Instagram"){
        return(
            <Slider {...settings}>
            {Instagram.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ContainerVideoCardV>
                            <StyledVideoCardV src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardV>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
}

export default Carrusel