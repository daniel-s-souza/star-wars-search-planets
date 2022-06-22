import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import FilterInputs from './components/FilterInputs';

function App() {
  return (
    <StarWarsProvider>
      <FilterInputs />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
