import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';

function Details() {
  const { findById } = useContext(AppContext);
  const [contact, setContact] = useState({});
  let routeParams = useParams();

  useEffect(() => {
    const id = routeParams.id;
    const osoba = findById(id);
    setContact(osoba);
  }, [findById, routeParams.id]);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    const newContact = {
      ...contact,
      name: newName
    }
    setContact(newContact);
  }

  const handleSave = () => {
    // Save changes
  }

  return (
    <div className='user-details'>
      User Details Component
      <div>
        <input type="text" defaultValue={contact ? contact.name : ""} onChange={handleNameChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Details;
