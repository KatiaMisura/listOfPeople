import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { categoryList } from "../data/filterOptions";

function TableRow(props) {
  const { contact } = props;
  const { deleteContact } = useContext(AppContext);

  const handleDelete = () => {
    deleteContact(contact.id);
  }

  const handleDetails = () => {
    // Preusmjeri na stranicu s detaljima
  }

  const categoryColor = categoryList.find(
    category => category.value === contact.category
  ).color;

  return (
    <div className="table-row">
      <div>{contact.name}</div>
      <div>{contact.lastName}</div>
      <div>{contact.dateOfBirth}</div>
      <div>{contact.number}</div>
      <div>{contact.address}</div>
      <div>{contact.city}</div>
      <div className={'category'}>
        <div style={{backgroundColor: categoryColor}}></div>
      </div>
      <div>
        <button onClick={handleDetails}>Detalji</button>
      </div>
      <div>
        <button onClick={handleDelete}>Izbriši</button>
      </div>
    </div>
  );
}

export default TableRow;
