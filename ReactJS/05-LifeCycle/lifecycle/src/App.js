import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [isVisable, setIsVisable] = useState(true);
  return (
    <div className="App">
      {isVisable && <Counter />}

      <button onClick={() => setIsVisable(!isVisable)}>Toggle</button>
    </div>
  );
}

export default App;
