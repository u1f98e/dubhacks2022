import * as React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
// import {url, today} from "./config"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const url = "http://localhost:5000"

function today() { return (new Date).toISOString().slice(0,10) }
function this_month_year() { return (new Date).toISOString().slice(0,7) }
function this_year() { return (new Date).toISOString().slice(0,4) }

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

export default function CarbonTable() {
	const [loaded, setLoaded] = React.useState(false)
	const [request, setRequest] = React.useState(false)
	const [response, setResponse] = React.useState({})

	const [selectedDate, setSelectedDate] = React.useState(today())
	
	if(!request) {
		axios({
		  method: "GET",
		  url: url + "/tracker/rows/" + selectedDate
		})
		.then((resp) => {
			setResponse(resp.data)
			setLoaded(true)
		}).catch((error) => {
		  if (error.response) {
				console.log(error.response)
				console.log(error.response.status)
				console.log(error.response.headers)
			}
		})
		
		setRequest(true)
	}
	
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableBody>
					{loaded && response.rows.map(( row, rindex ) => (
						<TableRow key={rindex}>
							<TableCell key={row.label + "Cell"}>
								<p>{row.label}</p>
							</TableCell>
							{Object.keys(row.columns).map(( col, _cindex ) => (
								<TableCell key={col + "Cell"} align="right">
									<TextField key={col} label={row.columns[col].label} variant="outlined" value={row.columns[col].value} />
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}