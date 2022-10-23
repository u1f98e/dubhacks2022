import * as React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';


function getData(e) {
    axios({
      method: "POST",
      url:"/test/" + e.target.value,
    })
    .then((response) => {
      const res =response.data
      console.log(response.data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

export default function ProTip() {
    const [firstName, setFirstName] = React.useState('');
   
    const callbackTest = (e) => {
        console.log(e.target.value);
        return setFirstName(e.target.value)};
     
    
    return (
        <div>
        <TextField id="outlined-basic" label={firstName} variant="outlined" value={firstName} onChange={getData} /> 
        
        </div>
    );
}


//<TextField id="outlined-basic" label={firstName} variant="outlined" value={firstName} onChange={callbackTest} /> 