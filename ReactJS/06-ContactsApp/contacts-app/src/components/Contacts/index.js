import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123",
    },
    {
      fullname: "Kemal",
      phone_number: "456554",
    },
    {
      fullname: "Nazlı",
      phone_number: "78897878",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
