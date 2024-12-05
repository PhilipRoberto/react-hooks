import { TODO_ACTIONS } from "../pages/hooks/useReducer";

const Todo = ({todo, dispatch}) => {
    const toggle = () => {
        dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payLoad: {id: todo.id} })
    }
    const remove = () => {
        dispatch({type: TODO_ACTIONS.DELETE_TODO, payLoad: {id: todo.id}});
    }
    return (
        <div>
            <span style={{
                color: todo.complete? '#AAA' : '#000'
            }}>
                {todo.name}
            </span>
            <button onClick={toggle}>Toggle</button>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default Todo;