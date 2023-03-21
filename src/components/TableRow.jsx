
function TableRow(props) {
  const { contact, deleteContact } = props;

  const handleDelete = () => {
    deleteContact(contact.id);
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
