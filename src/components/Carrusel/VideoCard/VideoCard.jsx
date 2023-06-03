import styled from "styled-components";
import { StyledP } from "../../../Global";


export const ContainerVideoCardH = styled.div`
    width: 400px;
    height: 300px;
    display:flex;
    padding:10px;
    align-items: center;
    margin:20px;
    flex-direction: column;
    background-color:#373b35;
    border-radius: 50px;
    box-shadow:  10px 10px 10px #666666;
    transition: all 0.5s;
    &:hover{
        box-shadow:  15px 15px 10px #666666;
        transform:scale(1.02);
        background-color:#535950;
    }
`
export const ContainerVideoCardV = styled.div`
    width: 300px;
    height: 400px;
    display:flex;
    padding:10px;
    align-items: center;
    margin:20px;
    flex-direction: column;
    background-color:#373b35;
    border-radius: 50px;
    box-shadow:  10px 10px 10px #666666;
    transition: all 0.5s;
    &:hover{
        box-shadow:  15px 15px 10px #666666;
        transform:scale(1.02);
        background-color:#535950;
    }
`
export const StyledVideoCardH = styled.img`
    width: 90%;
    height: 90%;
    margin:10px;
    border-radius:50px;
`
export const StyledVideoCardV= styled.img`
    width: 90%;
    height: 90%;
    margin:10px;
    border-radius:50px;
`

export const Pshort = styled(StyledP)`
    font-size: 20px;
`

