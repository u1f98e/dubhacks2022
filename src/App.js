import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import ProTip from './ProTip';
import TabsWrappedLabel from './panels';
import CarbonTable from './table'
import {today} from './config'
import  SimpleContainer from './welcomeScreen'; 

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
        Team NPM Install WSU - Dubhacks 2022
      {'.'}
    </Typography>
  );
  }

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
        <h1>footprintMinder</h1>
        </Typography>
        <TabsWrappedLabel />
        <SimpleContainer />
        <Footer />
        <CarbonTable path="/tracker" date={today()} />
        </Box>
        </Container>
  );


}


