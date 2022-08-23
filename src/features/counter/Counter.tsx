import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

interface CounterState {
  counter: {
    count: number;
  };
}

const Counter = () => {
  const count = useSelector((state: CounterState) => state.counter.count);
  const dispatch = useDispatch();

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
      </div>
    </div>
  );
};

export default Counter;
