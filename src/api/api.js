
import axios from "axios";

export const apiY = axios.create({
    baseURL:"http://localhost:5000/Youtube"
})

export const apiT = axios.create({
    baseURL:"http://localhost:5000/Tiktok"
})

export const apiTw = axios.create({
    baseURL:"http://localhost:5000/Twitch"
})

export const apiI = axios.create({
    baseURL:"http://localhost:5000/Instagram"
})

export const buscarY = async (url,setData) => {
        const respuesta = await apiY.get(url)
        setData(respuesta.data)
}

export const buscarT = async (url,setData) => {
    const respuesta = await apiT.get(url)
    setData(respuesta.data)
}

export const buscarTw = async (url,setData) => {
    const respuesta = await apiTw.get(url)
    setData(respuesta.data)
}

export const buscarI = async (url,setData) => {
    const respuesta = await apiI.get(url)
    setData(respuesta.data)
}