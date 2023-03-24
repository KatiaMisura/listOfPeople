import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Filters from "./Filters";
import { categoryOptions, cityOptions, yearOptions } from "../data/filterOptions";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import routes from "../data/routes";

function Table() {
  const { 
    displayedContacts,
    setCityFilter,
    setCategoryFilter
  } = useContext(AppContext);

  return (
    <div>
      <Link to={routes.form}>Stvori novi kontakt</Link>
      <Filters
        filterChanged={setCategoryFilter}
        filterOptions={categoryOptions}
      />
      <Filters
        filterChanged={setCityFilter}
        filterOptions={cityOptions}
      />
      <Filters
        filterChanged={setCityFilter}
        filterOptions={yearOptions}
      />
      <div id="user-table">
        <TableHeader />
        {displayedContacts.map((contact) => {
          return <TableRow contact={contact} key={contact.id} />;
        })}
      </div>
    </div>

  );
}

export default Table;
