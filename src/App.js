import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import FilterInputs from './components/FilterInputs';
import NumericFilter from './components/NumericFilter';
import logo512 from './imgs/logo512.png';

function App() {
  return (
    <StarWarsProvider>
      <img className="StarWarsImage" src={ logo512 } alt="StarWars" />
      <FilterInputs />
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
