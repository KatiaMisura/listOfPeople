import { Osoba } from '../data/contacts';
import Filters from './Filters';
import { createCategoryoptions } from '../data/filterOptions';
import moduleStyles from "../styles/form.module.css";

function Form(props) {
  const onSave = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const ime = formData.get("ime");
    const prezime = formData.get("prezime");
    const datumRođenja = formData.get("dateOfBirth");
    const broj = formData.get("number");
    const kategorija = formData.get("kategorija");
    const adresa = formData.get("address");
    const grad = formData.get("city");

    const osoba = new Osoba(
      ime,
      prezime,
      datumRođenja,
      broj,
      adresa,
      grad,
      kategorija
    );
    props.createContact(osoba);
    event.currentTarget.reset();
  }

  return (
    <form className={"input-form " + moduleStyles["form-background"]} onSubmit={onSave}>
      <div>
        <input type="text" name="ime"></input>
        <span>Ime</span>
      </div>
      <div>
        <input type="text" name="prezime" ></input>
        <span>Prezime</span>
      </div>
      <div>
        <input type="date" name="dateOfBirth" ></input>
        <span>Datum Rođenja</span>
      </div>
      <div>
        <input type="number" name="number" ></input>
        <span>Broj</span>
      </div>
      <div>
        <input type="text" name="address" ></input>
        <span>Adresa</span>
      </div>
      <div>
        <input type="text" name="city" ></input>
        <span>Grad</span>
      </div>
      <Filters
          filterOptions={createCategoryoptions}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
