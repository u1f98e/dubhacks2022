import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
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
      <div>
        <button onClick={navigateToday}>Today</button>
        <hr />
        <button onClick={navigateMonthly}>Current Monthly</button>
        <hr/>
        <button onClick={navigateYearly}>Current Year</button>
      
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/" element={<Monthly />} />
          <Route path="/yearly" element={<Yearly />} />
        </Routes>
      </div>
    </div>
  );
}

function Today() {
  return <h2>Today</h2>;
}

function Monthly() {
  return <h2>Current Monthly</h2>;
}

function Year() {
  return <h2>Current Year</h2>;
}
