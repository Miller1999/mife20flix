import styled from "styled-components";
import banner from "../../assets/img/banner.png"


const StyledBanner = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.8;
    margin: 0px;
`

const Banner = () => {
    return (
        <StyledBanner src={banner} alt="Offline" />
    )
}
export default Banner
