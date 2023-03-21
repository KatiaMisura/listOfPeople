function Filters(props) {
  const { filterChanged, filterOptions } = props;

  const handleFilterChange = (event) => {
    const value = event.target.value;
    filterChanged(value);
  }

  return (
    <div id="table-filters">
      <div>
        <div className="filter-name">{filterOptions.filterName}:</div>
        <select name="kategorija" onChange={handleFilterChange}>
          {filterOptions.options.map((option) =>
            <option value={option.value} key={option.value}>{option.label}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default Filters;
