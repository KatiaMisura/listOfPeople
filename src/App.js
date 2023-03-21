import "./App.css";
// Initial data
import { contacts } from "./data/contacts";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useState } from "react";
import { categoryOptions, cityOptions, years } from "./data/filterOptions";

function App() {
  const [contactList, setContactList] = useState(contacts);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const handleCategoryChanged = (value) => {
    setCategoryFilter(value);
  };

  const handleCityChanged = (value) => {
    setCityFilter(value);
  };

  const deleteContact = (contactId) => {
    const newList = contactList.filter((contact) => {
      return contact.id !== contactId;
    });
    setContactList(newList);
  };

  return (
    <div>
      <Filters
        filterChanged={handleCategoryChanged}
        filterOptions={categoryOptions}
      />
      <Filters filterChanged={handleCityChanged} filterOptions={cityOptions} />
      <Table contacts={contactList} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
