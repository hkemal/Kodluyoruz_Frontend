import React from "react";

function ActiveTodo({ todolist, setTodolist }) {
  return (
    <div>
      {todolist.map((item, i) => {
        <li key={i}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={false}
              onChange={() => {
                const newArray = [...todolist];
                newArray[i].active = false;
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

export default ActiveTodo;
