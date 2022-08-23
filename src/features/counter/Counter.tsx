import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "./counterSlice";

interface CounterState {
  counter: {
    count: number;
  };
}

const Counter = () => {
  const count = useSelector((state: CounterState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const [decrementAmount, setDecrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const subtractValue = Number(decrementAmount) || 0;

  const resetValues = () => {
    setIncrementAmount(0);
    setDecrementAmount(0);
    dispatch(reset());
  };

  return (
    <div className="container text-center p-4 m-0">
      <h1 className="display-2">Counter App</h1>
      <h2 className="display-4">Count: {count}</h2>

      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <div>
          <input
            type={"number"}
            value={decrementAmount}
            onChange={(e) => setDecrementAmount(Number(e.target.value))}
          />

          <button
            className="btn btn-primary m-2"
            onClick={() => dispatch(decrementByAmount(subtractValue))}
          >
            Subtract Number
          </button>

          <input
            type={"number"}
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
          />

          <button
            className="btn btn-primary m-2"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Number
          </button>
        </div>

        <section>
          <button className="btn btn-primary m-2" onClick={resetValues}>
            Reset
          </button>
        </section>
      </div>
    </div>
  );
};

export default Counter;
