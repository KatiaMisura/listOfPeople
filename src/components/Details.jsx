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
  }, []);

  return (
    <div className='user-details'>
      User Details Component
      <div>
        {contact ? contact.name : ""}
      </div>
    </div>
  );
}

export default Details;
