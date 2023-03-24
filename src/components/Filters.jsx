import { useState } from "react";

function Filters(props) {
  const [selectColor, setSelectColor] = useState('');
  const { filterChanged, filterOptions, name } = props;

  const handleFilterChange = (event) => {
    const value = event.target.value;

    const option = filterOptions.options.find(
      option => option.value === value
    );

    if (option) setSelectColor(option.color);

    filterChanged && filterChanged(value);
  }

  return (
    <div id="table-filters">
      <div className="filter-name">{filterOptions.filterName}:</div>
      <select
        name={name}
        onChange={handleFilterChange}
        style={{backgroundColor: selectColor}}>
        {filterOptions.options.map((option) =>
          <option
            style={{backgroundColor: option.color}}
            value={option.value}
            key={option.value}>
              {option.label}
          </option>
        )}
      </select>
    </div>
  );
}

export default Filters;
