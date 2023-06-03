import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StyledVideoCard,ContainerVideoCard,Pshort } from "../VideoCard/VideoCard";
import { Fragment } from "react";



const Carrusel = (props) => {
    const info = require("../../../Data/initial-data.json")
    const Youtube = info.Youtube
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return(
            <Slider {...settings}>
            {Youtube.map((item) => {
                return(
                    <Fragment key={item.id}>
                        <ContainerVideoCard>
                            <StyledVideoCard src={item.Imagenvideo} alt={item.Nombre}/>
                            <Pshort>{item.Nombre}</Pshort>
                        </ContainerVideoCard>
                    </Fragment>
                )
            })}
            </Slider>
    )
}

export default Carrusel