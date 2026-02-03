import {useState, useEffect} from 'react';
/**
 * @typedef {Object} WindowSize
 * @property {number} height
 * @property {number} width
 */
/**
 * @returns {WindowSize}
 */
export default function useWindowSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleSize() {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    }
  }, []);

  return size;
}