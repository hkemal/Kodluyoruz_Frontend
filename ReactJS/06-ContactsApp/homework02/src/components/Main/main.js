import React, { useState } from "react";
import ActiveTodo from "../ActiveTodo/activeTodo";
import InActiveTodo from "../InActiveTodo/inActiveTodo";

let isActive = false;

function Main({ todolist, setTodolist, situation }) {
  const [activeTodos, setActiveTodos] = useState([]);
  const [inActiveTodos, setInActiveTodos] = useState([]);

  const labelOnClick = () => {
    if (!isActive) {
      let inActives = [...todolist].filter((item) => !item.active);
      setInActiveTodos([...inActiveTodos, inActives]);
      isActive = true;
    } else {
      let actives = [...todolist].filter((item) => item.active);
      setActiveTodos([...activeTodos, actives]);
      isActive = false;
    }
  };
  return (
    <div className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={labelOnClick}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {<ActiveTodo todolist={activeTodos} setTodolist={setTodolist} />}
        {<InActiveTodo todolist={inActiveTodos} setTodolist={setTodolist} />}
      </ul>
    </div>
  );
}

export default Main;
