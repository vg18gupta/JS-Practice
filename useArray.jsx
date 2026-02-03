import { useCallback, useState } from 'react';
/**
 * @template T
 * @param {T[]} defaultValue
 */
export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  const push = useCallback((item) => {
    setArray((prev) => [...prev,item]);
  },[]);
  const set = useCallback((newArray) => {
    setArray(newArray);
  },[]);

  const filter = useCallback((cb) => {
    setArray((prev) => prev.filter(cb));
  },[]);

  const remove = useCallback((index) => {
    setArray((prev) => prev.filter((_, i) => i !== index));
  },[]);

  const update = useCallback(
    (index, newElement) =>
      setArray((a) => [
        ...a.slice(0, index),
        newElement,
        ...a.slice(index + 1, a.length),
      ]),
    [],
  );

  const clear = useCallback(() => setArray([]), []);

  return { array, set: setArray, push, filter, update, remove, clear };
}