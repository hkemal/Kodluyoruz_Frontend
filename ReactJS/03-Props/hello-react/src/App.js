import React from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

function App() {
  return (
    <div>
      <User
        name="Mehmet"
        surname="Seven"
        age={27}
        isLoggedIn={true}
        friends={["Ahmet", "Tayfun", "Gökhan", "Ayşe", "Fatma"]}
      />
    </div>
  );
}

export default App;
