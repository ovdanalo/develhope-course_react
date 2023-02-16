import { useState, useEffect } from "react";

const ClickCounter = ({ onCounterChange }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(cnt => cnt + 1)
  }

  useEffect(() => onCounterChange(counter), [onCounterChange, counter])

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

export default ClickCounter;