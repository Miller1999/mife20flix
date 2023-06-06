import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledVideoCardH,ContainerVideoCardH,Pshort,StyledVideoCardV,ContainerVideoCardV } from "../VideoCard/VideoCard";
import { Fragment } from "react";
import { apiY, buscarT, buscarY, apiT, buscarTw, apiTw, buscarI, apiI } from "../../../api/api";
import { useEffect } from "react";
import { useState } from "react";

const Carrusel = (props) => {
    const [ListaYoutube,setYoutube] = useState([])
    const [ListaTikTok,setTiktok] = useState([])
    const [ListaTwitch,setTwitch] = useState([])
    const [ListaInstagram,setInstagram] = useState([])
    useEffect(()=>{
        buscarY(apiY.baseURL,(response) =>{
            console.log(response)
            setYoutube(response)
            console.log("Esta es la lista:", ListaYoutube)
        })
    },[setYoutube])

    useEffect(()=>{
        buscarT(apiT.baseURL,(response) =>{
            console.log(response)
            setTiktok(response)
            console.log("Esta es la lista:", ListaTikTok)
        })
    },[setTiktok])

    useEffect(()=>{
        buscarTw(apiTw.baseURL,(response) =>{
            console.log(response)
            setTwitch(response)
            console.log("Esta es la lista:", ListaTwitch)
        })
    },[setTwitch])

    useEffect(()=>{
        buscarI(apiI.baseURL,(response) =>{
            console.log(response)
            setInstagram(response)
            console.log("Esta es la lista:", ListaInstagram)
        })
    },[setInstagram])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    
    if(props.Categoria === "Youtube"){
        return(
            <Slider {...settings}>
            {ListaYoutube.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <a href={item.url} target="_blank"> <ContainerVideoCardH>
                            <StyledVideoCardH src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardH>
                        </a>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "Twitch"){
        return(
            <Slider {...settings}>
            {ListaTwitch.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <a href={item.url} target="_blank"> <ContainerVideoCardH>
                            <StyledVideoCardH src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardH>
                        </a>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "TikTok"){
        return(
            <Slider {...settings}>
            {ListaTikTok.map((item) => {
                return(
                    <Fragment key={item.id}>
                    <a href={item.url} target="_blank"> <ContainerVideoCardV>
                            <StyledVideoCardV src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardV>
                        </a>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
    else if(props.Categoria === "Instagram"){
        return(
            <Slider {...settings}>
            {ListaInstagram.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <a href={item.url} target="_blank"> <ContainerVideoCardV>
                            <StyledVideoCardV src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCardV>
                        </a>
                    </Fragment>
                )
            })}
            </Slider>
        )
    }
}

export default Carrusel