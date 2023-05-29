import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import routes from '../data/routes';

function Details() {
  const { findById, updateContact } = useContext(AppContext);
  const [contact, setContact] = useState({});
  let routeParams = useParams()
  const navigate = useNavigate();

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
    updateContact(contact);
    navigate(routes.home);
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
