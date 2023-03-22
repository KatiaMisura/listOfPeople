function Form() {
  const onSave = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const ime = formData.get("ime");
    const prezime = formData.get("prezime");
    console.log(ime, prezime);
  }

  return (
    <form className="input-form" onSubmit={onSave}>
      <div>
        <input type="text" name="ime"></input>
        <span>Ime</span>
      </div>
      <div>
        <input type="text" name="prezime"></input>
        <span>Prezime</span>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
