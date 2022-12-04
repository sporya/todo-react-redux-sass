const initalstate = {
  todos: [],
  activity: "all",
};

const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELET_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload.id),
      };
    case "CHECK_TODO":
      return {
        ...state,
        todo: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? (todo.completed = action.payload.completed)
            : todo
        ),
      };

    case "ALL_SHOW":
      return {
        ...state,
        activity: "all",
      };
    case "ACTIVE_SHOW":
      return {
        ...state,
        activity: "complet",
      };
    case "REMOVE_ALL":
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
};

export default reducer;
