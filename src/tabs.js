import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

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
        <Button variant="contained" onClick={navigateToday}>Today</Button>
  );
}

