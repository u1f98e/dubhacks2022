import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function Tabs() {
  const navigate = useNavigate();

  const navigateToday = () => {
    // 👇️ navigate to today botton
    navigate('/today');
  };

  const navigateMonthly = () => {
    // 👇️ navigate to monthly botton
    navigate('/monthly');
  };

  const navigateYearly = () => {
    // 👇️ navigate to yearly botton
    navigate('/yearly');
  };


  return (
        <div>

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button>Today</Button>
              <Button>Monthly</Button>
              <Button>Yearly</Button>
            </ButtonGroup>
  
        </div>
  );
  
}

