import React from "react";
import "../styles/Footer.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Footer() {
  const todos = useSelector((state) => state.todos);
  const activ = useSelector((state) => state.activity);
  const dispatch = useDispatch();
  const left = todos.map((t) => t.completed === false);

  const handelremoveall = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  };
  const handelactivity = () => {
    dispatch({
      type: "ACTIVE_SHOW",
    });
  };
  const handelall = () => {
    dispatch({
      type: "ALL_SHOW",
    });
  };
  return (
    <>
      <div className="footer">
        <div>
          <p>{left.length} item left</p>
        </div>
        <div>
          <button
            className={activ === "all" ? "button2active" : "button2"}
            onClick={handelall}
          >
            All
          </button>
          <button
            className={activ === "complet" ? "button2active" : "button2"}
            onClick={handelactivity}
          >
            Active
          </button>
        </div>
        <div>
          <button className="clearbutton" onClick={handelremoveall}>
            clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
