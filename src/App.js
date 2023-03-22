import "./App.css";
// Initial data
import { contacts } from "./data/contacts";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useEffect, useState } from "react";
import { categoryOptions, cityOptions, years } from "./data/filterOptions";

function App() {
  const [contactList, setContactList] = useState(contacts);
  const [displayedContacts, setDisplayedContacts] = useState(contactList);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    const newContactList = contactList.filter((contact) => {
      const isCategoryShown =
        categoryFilter === "" || categoryFilter === contact.category;
      const isCityShown = cityFilter === "" || cityFilter === contact.city;

      return isCategoryShown && isCityShown;
    });
    setDisplayedContacts(newContactList);
  }, [contactList, categoryFilter, cityFilter]);

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
      <Table contacts={displayedContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
