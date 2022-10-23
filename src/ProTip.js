/*import * as React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';

const url = "http://localhost:5000"

function getData(e) {
    axios({
      method: "POST",
      url: url + "/test/" + e.target.value,
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
} */

import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CarbonTable from './table';
import {today} from './config'
import { positions } from '@mui/system';

const emails = ['username@gmail.com', 'user02@gmail.com'];

/*SimpleDialogProps {
  open;
  selectedValue;
  onClose: (value) => void;
} */

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Sources of Carbon Emissions</DialogTitle>
        <CarbonTable path="/lists/carbon-sources" date="1" showAdd="true" />
        
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   // setSelectedValue(value);
  };

  return (
    <Box alignItems="flex-end" sx={{ my: 1}}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}



//<TextField id="outlined-basic" label={firstName} variant="outlined" value={firstName} onChange={callbackTest} /> 