import { Contact } from '../data/contacts';
import Filters from './Filters';
import { createCityOptions, createCategoryOptions } from '../data/filterOptions';
import moduleStyles from "../styles/form.module.css";
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../data/routes';

function Form() {
  const { createContact } = useContext(AppContext);
  const navigate = useNavigate();

  const formDataNames = [
    "name",
    "surname",
    "dateOfBirth",
    "number",
    "address",
    "city",
    "category"
  ];

  const onSave = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const dataValues = formDataNames.map(value => formData.get(value));

    const dataMissing = dataValues.some(value => !value);
    if (dataMissing) {
      alert("Ispunite sva polja");
      return;
    }

    const contact = new Contact(...dataValues);
    createContact(contact);

    navigate(routes.home);
    event.currentTarget.reset();
  }

  return (
    <div className={moduleStyles["form-background"]}>
      <Link to={routes.home}>Nazad</Link>
      <form className={"input-form"} onSubmit={onSave}>
        <div>
          <span>Ime</span>
          <input type="text" name="name"></input>
        </div>
        <div>
          <span>Prezime</span>
          <input type="text" name="surname" ></input>

        </div>
        <div>
          <span>Datum Rođenja</span>
          <input type="date" name="dateOfBirth" ></input>
        </div>
        <div>
          <span>Broj</span>
          <input type="number" name="number" ></input>
        </div>
        <div>
          <span>Adresa</span>
          <input type="text" name="address" ></input>
        </div>
        <Filters
            name={"city"}
            filterOptions={createCityOptions}
        />
        <Filters
            name={"category"}
            filterOptions={createCategoryOptions}
        />
        <button type="submit">Spremi</button>
      </form>
    </div>
  );
}

export default Form;
