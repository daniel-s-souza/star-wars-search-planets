import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import FilterInputs from './components/FilterInputs';
import NumericFilter from './components/NumericFilter';

function App() {
  return (
    <StarWarsProvider>
      <FilterInputs />
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
