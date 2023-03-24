
import { useContext } from 'react';
import { DeleteContext } from '../App';

function TableRow(props) {
  const { contact } = props;
  const deleteFunction = useContext(DeleteContext);

  const handleDelete = () => {
    deleteFunction(contact.id);
  }

  return (
    <div className="table-row">
      <div>{contact.name}</div>
      <div>{contact.lastName}</div>
      <div>{contact.dateOfBirth}</div>
      <div>{contact.number}</div>
      <div>{contact.address}</div>
      <div>{contact.city}</div>
      <div className={'category ' + contact.category}>
        <div></div>
      </div>
      <div>
        <button onClick={handleDelete} >Izbriši</button>
      </div>
    </div>
  );
}

export default TableRow;
