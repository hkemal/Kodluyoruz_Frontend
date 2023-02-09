import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Kemal");

  useEffect(() => {
    console.log("number state güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("name state güncellendi");
  }, [name]);

  useEffect(() => {
    console.log("Component mount edildi");
  }, []);

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click me!</button>

      <hr />
      <h1>{name}</h1>
      <button onClick={() => setName("Mete")}>Click me!</button>
    </div>
  );
}

export default App;
