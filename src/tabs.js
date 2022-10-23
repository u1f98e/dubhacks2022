
/*Buttons for the:
-About Us Page
-Carbon Quiz
*/ 

import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Buttons() {
  const navigate = useNavigate();

  const navigateAbout = () => {
    //navigate to About us button
    navigate('/about');
  };

  const navigateQuiz = () => {
    //navigate to quiz botton
    navigate('/quiz');
  };

  return (
        <div>

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>Carbon Assesment</Button>
              <Button>About
                
              </Button>
            </ButtonGroup>
  
        </div>
  );
  
}

