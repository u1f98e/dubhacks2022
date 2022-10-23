import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Tabs from './tabs';
import TabsWrappedLabel from './panels';

import CarbonTable from "./table"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
        Team NPM Install WSU - Dubhacks 2022
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          FootprintMinder      
        </Typography>
        <ProTip />
        <Tabs />
        <TabsWrappedLabel />
        <Copyright />
        <CarbonTable />
        </Box>
        </Container>
  );

 

}


