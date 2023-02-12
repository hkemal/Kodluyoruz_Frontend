import React from "react";

function InActiveTodo({ todolist, setTodolist }) {
  return (
    <div>
      {todolist.map((item, i) => {
        <li className="completed" key={i}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={true}
              onChange={() => {
                const newArray = [...todolist];
                newArray[i].state = "active";
                setTodolist([...newArray]);
              }}
            />
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() => {
                const newArray = [...todolist];
                newArray.splice(i, 1);
                setTodolist([...newArray]);
              }}
            ></button>
          </div>
        </li>;
      })}
    </div>
  );
}

export default InActiveTodo;
