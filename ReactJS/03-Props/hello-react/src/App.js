import React from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Tayfun" },
  { id: 3, name: "Gökhan" },
];

function App() {
  return (
    <div>
      <User
        name="Mehmet"
        surname="Seven"
        age={27}
        isLoggedIn={true}
        friends={friends}
      />
    </div>
  );
}

export default App;
