import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
import Boton from '../Button/Boton';
import { useState,useEffect } from 'react';
import { buscarC,apiC } from '../../api/api';

const DivC = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin:100px;
`
export default function BasicTable(props) {
    const {Categorias,setCategorias} = props
    useEffect(()=>{
        buscarC(apiC.baseURL,(response) =>{
            console.log(response)
            setCategorias(response)
            console.log("Esta es la lista:", Categorias)
        })
    },[setCategorias])
function createData(title, descripcion, edit, remove) {
return { title, descripcion, edit, remove };
}

function row1(){
    const info = Categorias.map((item) => (
        createData(item.Titulo,item.Descripcion,"Edit","Remove")
    ))
    console.log("Esta es la info",info)
    return info
}
const informacion = row1()
console.log("Esta es la informacion",informacion)
return (
    <DivC>
        <TableContainer>
        <Table sx={{ width: 850 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Nombre de Categoria</TableCell>
                <TableCell align="center">Descripcion</TableCell>
                <TableCell align="center">Editar</TableCell>
                <TableCell align="center">Remover</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {informacion.map((row) => (
                <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">{row.title}</TableCell>
                <TableCell align="center">{row.descripcion}</TableCell>
                <TableCell align="center"><Boton type="button">{row.edit}</Boton></TableCell>
                <TableCell align="center"><Boton type="button">{row.remove}</Boton></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </DivC>
);
}