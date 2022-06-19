import React, { useContext } from 'react';
import StarWatsContext from '../context/StarWarsContext';

function InputPlanetsName() {
  const { setPlanet } = useContext(StarWatsContext);
  function handleChangeInputText({ target: { value } }) {
    setPlanet({ filterByName: { name: value } });
  }
  return (
    <input
      type="text"
      name="planet-name"
      placeholder="Nome do Planeta"
      data-testid="name-filter"
      onChange={ handleChangeInputText }
    />
  );
}
export default InputPlanetsName;
