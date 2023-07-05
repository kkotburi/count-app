import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __minusNumber, __plusNumber, minusNumber, plusNumber } from './redux/modules/counterSlice';

function App() {
  // const [count, setCount] = useState(0);
  const globalnumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const minusBottonHandler = () => {
    // const newMinusCount = count - 1;
    // setCount(newMinusCount);
    dispatch(__minusNumber(+number));
  };

  const plusBottonHandler = () => {
    // const newPlusCount = count + 1;
    // setCount(newPlusCount);
    dispatch(__plusNumber(+number));
  };

  return (
    <div>
      <div>{globalnumber}</div>
      <input
        type="number"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <div>
        <button onClick={minusBottonHandler}>-</button>
        <button onClick={plusBottonHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
