import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';
import Boton from '../Button/Boton';

const DivC = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin:100px;
`

function createData(title, descripcion, edit, remove) {
return { title, descripcion, edit, remove };
}

const rows = [
createData('Youtube', "Videos en youtube", "Editar", "Remover"),
createData('TikTok', "Videos en tiktok", "Editar", "Remover"),
createData('Twitch', "Videos en twitch", "Editar", "Remover"),
createData('Instagram', "Imagenes de instagram", "Editar", "Remover"),
];

export default function BasicTable() {
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
            {rows.map((row) => (
                <TableRow
                key={row.name}
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