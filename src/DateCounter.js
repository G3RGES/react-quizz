import { useReducer } from "react";

function DateCounter() {
  // const [count, setCount] = useState(0);

  function reducer(state, action) {
    // return state + action;

    // if (action.type === "inc") {
    //   return state + action.payload;
    // }
    // if (action.type === "dec") {
    //   return state - action.payload;
    // }
    // if (action.type === "setCount") {
    //   return action.payload;
    // }

    // return { count: 0, step: 1 };

    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + action.payload };
      case "dec":
        return { ...state, count: state.count - action.payload };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  const initialState = {
    count: 0,
    step: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: step });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: step });
    // dispatch(1);
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
