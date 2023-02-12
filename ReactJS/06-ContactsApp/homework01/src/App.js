import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import React, { useState, useEffect } from "react";

function App() {
  let [todolist, setTodolist] = useState([
    { text: "test1", active: true },
    { text: "test2", active: false },
  ]);
  let [situation, setSituation] = useState("All");

  let inActiveCount = [...todolist].filter((item) => !item.active).length;
  console.log(todolist);

  return (
    <div className="App todoapp">
      <Header todolist={todolist} setTodolist={setTodolist} />
      <Main
        todolist={todolist}
        setTodolist={setTodolist}
        situation={situation}
      />
      <Footer
        situation={situation}
        setSituation={setSituation}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    </div>
  );
}

export default App;
