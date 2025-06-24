import { useId, useState } from "react";

const App = () => {
  const counterId = useId();
  const [counter, setCounter] = useState(0);
  
  const handleClick = () => { setCounter(c => c + 1); }

  return (<div>
    <button onClick={ handleClick}>Press</button>
    <label htmlFor={counterId}>Counter:</label>&nbsp;<output id={counterId} data-testid='counter'>{counter}</output>
  </div>);
}

export default App;
