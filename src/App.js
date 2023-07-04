import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const minusBottonHandler = () => {
    const newMinusCount = count - 1;
    setCount(newMinusCount);
  };

  const plusBottonHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={minusBottonHandler}>-</button>
        <button onClick={plusBottonHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
