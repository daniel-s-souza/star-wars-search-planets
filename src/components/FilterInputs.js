import React, { useContext } from 'react';
import StarWatsContext from '../context/StarWarsContext';
import './FilterName.css';

function InputPlanetsName() {
  const { setPlanet } = useContext(StarWatsContext);
  function handleChangeInputText({ target: { value } }) {
    setPlanet({ filterByName: { name: value } });
  }
  return (
    <input
      className="nameInput"
      type="text"
      name="planet-name"
      placeholder="Nome do Planeta"
      data-testid="name-filter"
      onChange={ handleChangeInputText }
    />
  );
}
export default InputPlanetsName;
