import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "../../redux/counterSlice";

export const SimpleCounter = () => {
  /**
   * Hooks
   */

  const initialCount = useSelector(selectCount);
  const dispatch = useDispatch();
  const [count, setCount] = useState(initialCount);
  /**
   * JavaScript Code
   */
  const addNumber = () => {
    //Add number to counter
    dispatch(increment());
    setCount(count + 1);
  };
  const subtractNumber = () => {
    dispatch(decrement())
    setCount(count - 1);
    //Subtract Number from counter
  };
  /**
   * HTML Code (JSX)
   */

  return (
    <>
      <div className="row">
        <div className="col display-6">Counter:{count}</div>
        <div className="col-1">
          <button onClick={addNumber} className="btn btn-primary">
            +
          </button>
        </div>
        <div className="col-1">
          <button onClick={subtractNumber} className="btn btn-primary">
            -
          </button>
        </div>
      </div>
    </>
  );
};
