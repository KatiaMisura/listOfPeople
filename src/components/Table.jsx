import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table(props) {
  const { contacts } = props;
  return (
    <div id="user-table">
      <TableHeader />
      {contacts.map((contact) => {
        return <TableRow contact={contact} deleteContact={props.deleteContact} key={contact.id} />;
      })}
    </div>
  );
}

export default Table;
