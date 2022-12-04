import React, { useState } from "react";
import "../styles/ToDo.css";
import { useDispatch } from "react-redux";

function ToDo() {
  const dispatch = useDispatch();
  const [NewTodo, setNewTodo] = useState();
  const handelchange = (e) => setNewTodo(e.target.value);
  const handelclick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.ceil(Math.random() * 100),
        title: NewTodo,
        completed: false,
      },
    });
    setNewTodo("");
  };
  return (
    <div className="todosection">
      <h1 className="todotitle">To Do List</h1>

      <div className="inputsec">
        <input
          type="text"
          className="todoinput"
          placeholder="Tipyng..."
          value={NewTodo}
          onChange={handelchange}
        ></input>
        <button className="todobutton" onClick={handelclick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ToDo;
