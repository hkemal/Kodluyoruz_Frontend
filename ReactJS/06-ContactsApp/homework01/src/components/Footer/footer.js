import React, { useEffect, useState } from "react";

function Footer({ situation, setSituation, todolist, setTodolist }) {
  const [inactiveTodoCount, setInactiveTodoCount] = useState(0);

  useEffect(() => {
    let count = [...todolist].filter((item) => !item.active).length;
    setInactiveTodoCount(count);
  }, [todolist]);

  const onClickAvailable = (e) => {
    setSituation(e.target.name);
  };
  const activeButton = () => {
    const newArray = todolist.filter((item) => item.state === "active");
    setTodolist(newArray);
  };

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{inactiveTodoCount}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            name="All"
            href="#/"
            onClick={onClickAvailable}
            className={situation === "All" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            name="Active"
            href="#/"
            onClick={onClickAvailable}
            className={situation === "Active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            name="Completed"
            href="#/"
            onClick={onClickAvailable}
            className={situation === "Completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={activeButton}>
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
