import * as React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import {url, today} from "./config"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CarbonTable(props) {
	const [loaded, setLoaded] = React.useState(false)
	const [request, setRequest] = React.useState(false)
	const [response, setResponse] = React.useState({})
	
	if(!request) {
		axios({
		  method: "GET",
		  url: url + props.path + props.date
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