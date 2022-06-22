import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  // const [data3, setData3] = useState([]);
  const [planet, setPlanet] = useState({ filterByName: { name: '' } });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  async function getAPIData() {
    const results = await requestApi();
    setData(results);
    setData2(results);
    // setData3(results);
  }
  useEffect(() => {
    getAPIData();
  }, []);

  const numericFilter = () => {
    if (filterByNumericValues.length > 0) {
      setData(data2);
    }
    const filterAll = data2.filter((planets) => {
      if (filterByNumericValues.comparison === 'maior que') {
        return Number(planets[filterByNumericValues.column])
        > Number(filterByNumericValues.value);
      }
      if (filterByNumericValues.comparison === 'menor que') {
        return Number(planets[filterByNumericValues.column])
        < Number(filterByNumericValues.value);
      }
      if (filterByNumericValues.comparison === 'igual a') {
        return Number(planets[filterByNumericValues.column])
        === Number(filterByNumericValues.value);
      }
      return undefined;
    });
    setData(filterAll);
  };

  useEffect(() => {
    numericFilter();
  }, [filterByNumericValues]);

  return (
    <StarWarsContext.Provider
      value={
        { data, planet, setPlanet, filterByNumericValues, setFilterByNumericValues }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}
export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
