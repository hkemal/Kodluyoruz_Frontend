import { useState, useEffect } from "react";

const initialTodo = { text: "", active: false };
function Header({ todolist, setTodolist }) {
  const [todo, setTodo] = useState([initialTodo]);

  const onChangeInput = (e) => {
    setTodo({ text: e.target.value, active: true });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.text !== "") {
      let newTodoList = [...todolist, todo];
      setTodolist(newTodoList);
    }
  };

  useEffect(() => {
    setTodo(initialTodo);
  }, [todolist]);

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Header;
