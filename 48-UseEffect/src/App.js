import React from "react";
import ClickCounter from './ClickCounter';

const App = () => {
  
  const onCounterChange = (value) => {
    console.log(value)
  }
  return (
      <div>
        <ClickCounter onCounterChange={onCounterChange}/>
      </div>
    )
  }

export default App;