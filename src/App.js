import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minusNumber, plusNumber } from './redux/modules/counter';

function App() {
  // const [count, setCount] = useState(0);
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const minusBottonHandler = () => {
    // const newMinusCount = count - 1;
    // setCount(newMinusCount);
    dispatch(minusNumber(1));
  };

  const plusBottonHandler = () => {
    // const newPlusCount = count + 1;
    // setCount(newPlusCount);
    dispatch(plusNumber(1));
  };

  return (
    <div>
      <div>{number}</div>
      <div>
        <button onClick={minusBottonHandler}>-</button>
        <button onClick={plusBottonHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
