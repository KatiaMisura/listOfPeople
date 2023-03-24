import "./App.css";
// Initial data
import { contacts } from "./data/contacts";
import Table from "./components/Table";
import Filters from "./components/Filters";
import { useEffect, useState, createContext } from "react";
import { categoryOptions, cityOptions } from "./data/filterOptions";
import Form from "./components/Form";

export const DeleteContext = createContext();

function App() {
  const [contactList, setContactList] = useState(contacts);
  const [displayedContacts, setDisplayedContacts] = useState(contactList);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const [brojac, setBrojac] = useState(0);

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
    setBrojac(brojac + 1);
  };

  const createContact = (contact) => {
    const newList = [...contactList, contact];
    setContactList(newList);
  };

  return (
    <div>
      <Form createContact={createContact} />
      <Filters
        filterChanged={handleCategoryChanged}
        filterOptions={categoryOptions}
      />
      <Filters filterChanged={handleCityChanged} filterOptions={cityOptions} />
      <DeleteContext.Provider value={deleteContact}>
        <Table contacts={displayedContacts} />
      </DeleteContext.Provider>
    </div>
  );
}

export default App;
