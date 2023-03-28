import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/slice/mojSlice';

function Redux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
}

export default Redux;
