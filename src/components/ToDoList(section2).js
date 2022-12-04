import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";
import "../styles/ToDoList.css";
import { useSelector } from "react-redux";

function ToDoList() {
  const todos = useSelector((state) => state.todos);
  const activ = useSelector((state) => state.activity);

  if (activ === "all") {
    return (
      <ul className="todolist">
        <li style={{ display: "block" }}>
          <h3 className="listtitle">What needs to be done?</h3>
          <hr />
        </li>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <ToDoItem
              key={index}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))
        ) : (
          <span className="nodataerror">There is no data for show!</span>
        )}
      </ul>
    );
  } else if (activ === "complet") {
    return (
      <ul className="todolist">
        <li>
          <h3 className="listtitle">What needs to be done?</h3>
        </li>
        {todos.map(
          (todo, index) =>
            todo.completed === false && (
              <ToDoItem
                key={index}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            )
        )}
      </ul>
    );
  }

  // return(
  //     <>

  //     <ul className="todolist">
  //     <li><h3 className="listtitle">What needs to be done?</h3></li>
  {
    /* { JSON.stringify(activ)===JSON.stringify("all") ? todos.map((todo,index) => ( 
                    <ToDoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />
                )) : todos.map((todo,index) => ( todo.completed == true &&
                    <ToDoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />))} */
  }

  //     </ul>
  //    </>

  //  );
}
export default ToDoList;
