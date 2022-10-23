import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const year=`${current.getFullYear()}`;


export default function TabsWrappedLabel() {
  const navigate=useNavigate(); 
  const [value, setValue] = React.useState('one');
  const handleChange=(event, newValue)=>{
  navigate(newValue);
  };

return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="??"
        >
        <Tab value="/1" label="Carbon Footprint Assesment"wrapped/>


        <Tab value="/2" label="Today's Carbon Steps" />



        <Tab value="/3" label="This Month's Carbon Steps" />


        <Tab value="/4" label="Yearly Carbon Steps" />



        <Tab value="/5" label="About Page" />
      
      </Tabs>

      <Routes>

             <Route path="/1" element={<Button> 
                Assesments questions
                1. 
                2.
                3. 
                4. 
             </Button>} />
            <Route path="/2" element={<Button> {date}</Button> } />
          <Route path="/3" element={<Button> Month {current.getMonth()+1}</Button>} />
          <Route path="/4" element={<Button> Year {year}</Button>} />



          <Route path="/5" element={<Button> 
          About Page. 

          footprintMinder helps user see how much of an effect they have on the enviornment in the day to day tasks. They are able to get their current carbon footprint score and have a reachable goal they can work towards. 
          Users can work towards a reachable carbon footprint goal by following recomendations that they app directs
          them too if they score is too high. 

          </Button>} />


        </Routes>
    </Box>
  );
}
