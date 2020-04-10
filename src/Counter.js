import React, {useState} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 성능최적화로 사용할 경우
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    // useState를 통한 처리
    setNumber(number - 1);
  }

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;