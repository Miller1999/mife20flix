
import styled from "styled-components"

const Logo = styled.img`
    width:300px;
    height:100px;
    margin: 20px;
    transition: all .5s;

    &:hover{
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(44%) sepia(95%) saturate(2063%) hue-rotate(161deg) brightness(96%) contrast(101%);
    }
`

export default Logo