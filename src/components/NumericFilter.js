import React, { useContext, useState } from 'react';
import StarWatsContext from '../context/StarWarsContext';
import './NumericFilter.css';

const comparisons = ['maior que', 'igual a', 'menor que'];

function NumericFilter() {
  const { setFilterByNumericValues,
    filterByNumericValues, columns } = useContext(StarWatsContext);
  const [coluumn, setColumn] = useState('population');
  const [comparisoon, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      {
        column: coluumn,
        comparison: comparisoon,
        value,
      },
    ]);
  };
  return (
    <div>
      <form className="form">
        <label htmlFor="column">
          <select
            name="column"
            onChange={ ({ target }) => { setColumn(target.value); } }
            data-testid="column-filter"
          >
            {/* <option>Select a column</option> */}
            { columns.map((column, index) => (
              <option key={ index }>
                {column}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor=" comparison">
          <select
            id="comparison"
            name="comparison"
            onChange={ ({ target }) => { setComparison(target.value); } }
            data-testid="comparison-filter"
          >
            {/* <option>Select a  comparison</option> */}
            { comparisons.map((comparison, index) => (
              <option key={ index }>
                { comparison}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="value">
          <input
            id="value"
            name="value"
            onChange={ ({ target }) => { setValue(target.value); } }
            type="number"
            data-testid="value-filter"
            value={ value }
          />
        </label>

        <button
          type="button"
          onClick={ handleClick }
          data-testid="button-filter"
        >
          FILTRAR

        </button>

      </form>
    </div>
  );
}
export default NumericFilter;
