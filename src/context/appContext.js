import { createContext, useState, useEffect } from "react";
import { contacts } from "../data/contacts";

export const AppContext = createContext();

export function AppContextProvider(Component) {
  return function Context(props) {
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

    const deleteContact = (contactId) => {
      const newList = contactList.filter((contact) => {
        return contact.id !== contactId;
      });
      setContactList(newList);
    };

    const createContact = (contact) => {
      const newList = [...contactList, contact];
      setContactList(newList);
    };

    return (
      <AppContext.Provider
        value={{
          displayedContacts,
          createContact,
          deleteContact,
          setCategoryFilter,
          setCityFilter,
        }}
      >
        <Component {...props} />
      </AppContext.Provider>
    );
  };
}
