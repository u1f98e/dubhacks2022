import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';
import  CircularStatic from './scores';

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
        <Tab value="/2" label="About your scores" />
        <Tab value="/3" label="Today's Carbon Steps" />
        <Tab value="/4" label="This Month's Carbon Steps" />
        <Tab value="/5" label="Yearly Carbon Steps" />
        <Tab value="/6" label="About Page" />
      
      </Tabs>

      <Routes>

             <Route path="/1" element={<Box> 
                Assesments questions
                1. 
                2.
                3. 
                4. 
             </Box>} />
             <Route path="/2" element={<Box> <h1>What does my score mean?</h1> <CircularStatic />  
             
             
             
             </Box>} />
             
        <Route path="/3" element={<Box> <h1>{date} </h1> <CircularStatic /> </Box> } />
          <Route path="/4" element={<Box> <h1>Month {current.getMonth()+1}</h1> <CircularStatic /></Box>} />
          <Route path="/5" element={<Box> <h1>Year {year} </h1> <CircularStatic /> </Box>} />
          <Route path="/6" element={<Box sx={{ my: 1 }}> 
         
          FootprintMinder goal is for its users to have some sense of control when it comes to the climate crisis. In FootprintMinder you are able to see how many carbon footprints you are contributing to the climate crisis to help 
          the user get some sort of idea of how much their daily habits are affecting our planet. FootprintMinder will give you suggestions on how you 
          could reduce you carbon footprint and how much of a difference you would actually be making. 
          FootprintMinder helps users see how much of an effect they have on the enviornment in day to day tasks. They are able to get their current carbon footprint score and have a reachable goal they can work towards. 
          Users can work towards a reachable yearly carbon footprint goal by following recomendations suggested by the app
          if their score for an individual day or week is too high. 

          </Box>} />


        </Routes>
    </Box>
  );
}
