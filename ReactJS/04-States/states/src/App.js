import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Kemal");
  const [age, setAge] = useState(29);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Hasan")}>Change Name</button>
      <button onClick={() => setAge(26)}>Change Age</button>
    </div>
  );
}

export default App;
