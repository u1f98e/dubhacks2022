import * as React from 'react';
import TextField from '@mui/material/TextField';



export default function ProTip() {
    const [firstName, setFirstName] = React.useState('');
    
    return (
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" alue={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} /> 
        <div> CustomerName: {firstName} </div>
        </div>
    );
}
