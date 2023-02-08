import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Kemal");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34000 });

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Hasan")}>Change Name</button>
      <button onClick={() => setAge(26)}>Change Age</button>

      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add New Friend
      </button>
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 4444 })}
      >
        Change the Address
      </button>
    </div>
  );
}

export default App;
