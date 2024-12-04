import { useState } from "react";

/*const initialCount = () =>{
    console.log("run function");
    return 4;
}*/

const UseState = () => {
  //   const [count, setCount] = useState(() => initialCount());
  //   const [state, setState] = useState({count:4, theme: 'blue'})
  const [state, setState] = useState(() => {
    return { count: 4, theme: "blue" };
  });
  const count = state.count;
  const theme = state.theme;
  const decrease = () => {
    // setCount((prevCount) => prevCount - 1); // use the function method to update state
    // setCount((prevCount) => prevCount - 1);'
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  const increase = () => {
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  return (
    <div className="use-state">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default UseState;
