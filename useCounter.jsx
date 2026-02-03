import {useState, useCallback} from 'react';
/**
 * @param number initialValue
 * @return Object
 */
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev+1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev-1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, []);

  return {count, increment, decrement, reset, setCount };
}