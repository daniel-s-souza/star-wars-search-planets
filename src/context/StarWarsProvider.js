import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import requestApi from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState({ filterByName: { name: '' } });
  async function getAPIData() {
    const results = await requestApi();
    setData(results);
  }
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <StarWarsContext.Provider value={ { data, planet, setPlanet } }>
      {children}
    </StarWarsContext.Provider>
  );
}
export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
