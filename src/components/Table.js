import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './table.css';

function Table() {
  const { data, planet } = useContext(StarWarsContext);
  const [filterPlanets, setNames] = useState([]);
  useEffect(() => {
    const filterPlanetsName = data.filter((value) => (
      value.name.includes(planet.filterByName.name)));
    setNames(filterPlanetsName);
  }, [data, planet]);
  return (
    <table className="tableComponent">
      <thead>
        <tr className="tableTitle">
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          filterPlanets.map((value) => (
            <tr key={ value.name }>
              <td>{ value.name }</td>
              <td>{ value.rotation_period }</td>
              <td>{ value.orbital_period }</td>
              <td>{ value.diameter }</td>
              <td>{ value.climate }</td>
              <td>{ value.gravity }</td>
              <td>{ value.terrain }</td>
              <td>{ value.surface_water }</td>
              <td>{ value.population }</td>
              <td>{ value.films }</td>
              <td>{ value.created }</td>
              <td>{ value.edited }</td>
              <td>{ value.url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
export default Table;
