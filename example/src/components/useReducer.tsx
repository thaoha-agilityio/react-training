import { useReducer } from "react";

// Init state
type CountInitState = number;

// Action
enum CountAction {
  UP_ACTION = "up",
  DOWN_ACTION = "down",
}

// Reducer
const reducer = (state: CountInitState, action: CountAction) => {
  switch (action) {
    case CountAction.UP_ACTION:
      return state + 1;
    case CountAction.DOWN_ACTION:
      return state - 1;
    default:
      throw new Error();
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(CountAction.DOWN_ACTION)}>DOWN</button>
      <button onClick={() => dispatch(CountAction.UP_ACTION)}>UP</button>
    </div>
  );
};
