import React, { useEffect, useState } from "react";
import "../styles/ToDoList.css";
import { useDispatch } from "react-redux";

function ToDoItem({ id, title, completed }) {
  const [complet, setcomplet] = useState();
  const dispatch = useDispatch();
  const handelclick = () => {
    setcomplet(!complet);
    handelcheck();
  };
  const handelcheck = () => {
    dispatch({
      type: "CHECK_TODO",
      payload: {
        id: id,
        completed: !complet,
      },
    });
  };

  const handelDelet = () => {
    dispatch({
      type: "DELET_TODO",
      payload: {
        id: id,
      },
    });
    setcomplet(!complet);
  };

  return (
    <li key={id} className="todoitemli">
      <div className="todoitem">
        <span className="todospan">
          <input
            className="todoitemcheckbox"
            type="checkbox"
            onClick={handelclick}
            defaultChecked={completed}
          ></input>
          <span className={complet || completed ? "title-line" : "title"}>
            {title}
          </span>
        </span>
        <button className="todoitembtn" onClick={handelDelet}>
          <img
            className="closebtnimg"
            src="/closebutton.png"
            alt="buttonpng"
            border="0"
          />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
