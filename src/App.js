import React from 'react';
import './App.css';
import Weather from './Weather';
import CitySearch from './CitySearch';


function App() {
  return (
    <div className="App">
      <CitySearch />
      <Weather />
    </div>
  );
}

export default App;
