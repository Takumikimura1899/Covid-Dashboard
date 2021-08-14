import React from 'react';

import './App.css';
import Cards from './features/covid/Cards/Cards';
import Chart from './features/covid/Chart/Chart';
import SwitchCountry from './features/covid/Chart/PieChart/DashBoard/SwitchCoutry/SwitchCountry';
import PieChart from './features/covid/Chart/PieChart/PieChart';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Cards />
        <Chart />
        <PieChart />
        <SwitchCountry />
      </header>
    </div>
  );
}

export default App;
