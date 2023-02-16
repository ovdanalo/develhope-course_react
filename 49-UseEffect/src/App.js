import { useState } from "react";
import Counter from './Counter';

const App = () => {
  const [unmount, setUnmount] = useState(false);
  const handleClick = () => {
    setUnmount(true)
  }

  return (
    <div>
      {!unmount && <Counter />}
      <button onClick={handleClick}>unmount</button>
    </div>
  )
}

export default App;