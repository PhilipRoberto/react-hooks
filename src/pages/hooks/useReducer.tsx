import { useReducer, useState } from "react";
import Todo from "../../components/Todo";

/*
const initialCount: number = 0;

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}

const reducer = (state: { count: number }, action: any) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: (state.count = initialCount) };
    default:
        state
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
*/

export const TODO_ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

const reducer = (todos: any, action: any) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payLoad.name)];
    case TODO_ACTIONS.TOGGLE_TODO:
      return todos.map((todo: { id: any; complete: any; }) => {
        if (todo.id === action.payLoad.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case TODO_ACTIONS.DELETE_TODO:
        return todos.filter((todo: { id: any; }) => {
            todo.id !== action.payLoad.id
        })
    default:
        return todos
  }
};

const newTodo = (name: any) => {
  return { id: Date.now, name: name, complete: false };
};

const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payLoad: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos?.map((todo: any) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};

export default UseReducer;
